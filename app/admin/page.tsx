"use client";
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, MousePointerClick, TrendingUp, 
  Activity, Globe, Monitor, Clock, RefreshCw, BarChart3, Lock, Key
} from 'lucide-react';

// === НАСТРОЙКИ ДОСТУПА ===
const VALID_USERS = [
  { username: 'artur', password: 'korea2026' },
  { username: 'partner', password: 'korea2026' }
];

// === МОКОВЫЕ ДАННЫЕ ===
const MOCK_STATS = {
  totalClicks: 0,
  liveUsers: 0,
  conversionRate: '0',
  deposits: '₩ 0'
};

const MOCK_RECENT_CLICKS = [];



const MOCK_CHART_DATA = [
  { day: 'Пн', clicks: 0 }, { day: 'Вт', clicks: 0 }, { day: 'Ср', clicks: 0 },
  { day: 'Чт', clicks: 0 }, { day: 'Пт', clicks: 0 }, { day: 'Сб', clicks: 0 }, { day: 'Вс', clicks: 0 },
];


export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(MOCK_STATS);
  const [clicks, setClicks] = useState(MOCK_RECENT_CLICKS);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = VALID_USERS.find(u => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setStats(MOCK_STATS);
    setClicks(MOCK_RECENT_CLICKS);
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
      const interval = setInterval(fetchData, 60000);
      return () => clearInterval(interval);
    }
  }, [isLoggedIn]);

  // ЭКРАН ЛОГИНА
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-fuchsia-500/20 p-4 rounded-2xl border border-fuchsia-500/40 mb-4">
              <Lock className="w-8 h-8 text-fuchsia-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">TowerRush Admin</h1>
            <p className="text-slate-500 text-sm mt-1">Введите данные для входа</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1 ml-1">Логин</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1 ml-1">Пароль</label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>
            {error && <p className="text-red-400 text-xs text-center font-medium animate-shake">{error}</p>}
            <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-fuchsia-900/20 active:scale-[0.98]">
              Войти в панель
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ОСНОВНАЯ ПАНЕЛЬ (ПОСЛЕ ВХОДА)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-fuchsia-500/20 p-2 rounded-lg border border-fuchsia-500/50">
              <LayoutDashboard className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-wide">TowerRush <span className="text-slate-500 font-normal">| Admin</span></h1>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-xs text-slate-500 font-mono hidden sm:block">USER: {username.toUpperCase()}</span>
            <button onClick={fetchData} disabled={loading} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <RefreshCw className={`w-5 h-5 text-slate-400 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={() => setIsLoggedIn(false)} className="text-xs text-slate-400 hover:text-white underline">Выйти</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-2">
              <MousePointerClick className="w-5 h-5 text-cyan-400" />
              <h3 className="text-slate-400 font-medium">Всего переходов</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.totalClicks.toLocaleString()}</p>
            <div className="mt-2 text-sm text-green-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> <span>+12.5%</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-green-400" />
              <h3 className="text-slate-400 font-medium">Live Users</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.liveUsers}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-slate-400 font-medium">Конверсия (CR)</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.conversionRate}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-yellow-400" />
              <h3 className="text-slate-400 font-medium">Депозиты (₩)</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.deposits}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold text-white mb-8">Трафик за неделю</h2>
            <div className="flex-1 flex items-end justify-between gap-2 h-48 border-b border-slate-800 relative">
              {MOCK_CHART_DATA.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full group relative z-10">
                  <div className="w-full max-w-[40px] bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm transition-all" style={{ height: `${(item.clicks/4000)*100}%` }} />
                  <span className="mt-4 text-xs text-slate-400">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Источники</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-slate-400">Mobile</span><span className="text-white">85%</span></div>
                <div className="w-full bg-slate-950 rounded-full h-2"><div className="bg-fuchsia-500 h-2 rounded-full" style={{ width: '85%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-slate-400">Desktop</span><span className="text-white">15%</span></div>
                <div className="w-full bg-slate-950 rounded-full h-2"><div className="bg-cyan-500 h-2 rounded-full" style={{ width: '15%' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 bg-slate-900/50">
            <h2 className="text-xl font-bold text-white">Live лента кликов</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <tbody className="divide-y divide-slate-800/50">
                {clicks.map((click, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30">
                    <td className="px-6 py-4"><div className="text-slate-300 font-medium">{click.id}</div><div className="text-xs text-slate-500">{click.time}</div></td>
                    <td className="px-6 py-4 font-mono text-xs">{click.ip}</td>
                    <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-slate-800 border border-slate-700">{click.geo}</span></td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${click.status === 'Converted' ? 'text-green-400 border-green-500/20' : 'text-cyan-400 border-cyan-500/20'}`}>
                        {click.status === 'Converted' ? 'Регистрация' : 'Переход'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}