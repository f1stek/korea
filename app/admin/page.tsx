"use client"
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  MousePointerClick, 
  TrendingUp, 
  Activity, 
  Globe, 
  Monitor, 
  Clock,
  RefreshCw,
  BarChart3
} from 'lucide-react';

// === МОКОВЫЕ ДАННЫЕ ДЛЯ ДЕМОНСТРАЦИИ ===
const MOCK_STATS = {
  totalClicks: 12458,
  liveUsers: 342, // Данные из GA
  conversionRate: '8.4%',
  deposits: '₩ 45,200,000'
};

const MOCK_RECENT_CLICKS = [
  { id: 'clk_001', time: 'Только что', ip: '121.1**.***.***', geo: 'KR', device: 'Mobile', browser: 'Safari', status: 'Converted' },
  { id: 'clk_002', time: '2 мин назад', ip: '14.3**.***.***', geo: 'KR', device: 'Desktop', browser: 'Chrome', status: 'Clicked' },
  { id: 'clk_003', time: '5 мин назад', ip: '211.2**.***.***', geo: 'KR', device: 'Mobile', browser: 'Samsung Net', status: 'Clicked' },
  { id: 'clk_004', time: '12 мин назад', ip: '118.4**.***.***', geo: 'KR', device: 'Mobile', browser: 'Chrome', status: 'Converted' },
  { id: 'clk_005', time: '15 мин назад', ip: '175.2**.***.***', geo: 'KR', device: 'Tablet', browser: 'Safari', status: 'Clicked' },
];

const MOCK_CHART_DATA = [
  { day: 'Пн', clicks: 1200 },
  { day: 'Вт', clicks: 1900 },
  { day: 'Ср', clicks: 1500 },
  { day: 'Чт', clicks: 2200 },
  { day: 'Пт', clicks: 2800 },
  { day: 'Сб', clicks: 3500 },
  { day: 'Вс', clicks: 3100 },
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(MOCK_STATS);
  const [clicks, setClicks] = useState(MOCK_RECENT_CLICKS);

  // Имитация загрузки данных с NestJS API и Google Analytics API
  const fetchData = async () => {
    setLoading(true);
    try {
      // Имитация задержки сети
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setStats(MOCK_STATS);
      setClicks(MOCK_RECENT_CLICKS);
    } catch (error) {
      console.error('Ошибка загрузки данных', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Автообновление каждую минуту
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* HEADER */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-fuchsia-500/20 p-2 rounded-lg border border-fuchsia-500/50">
              <LayoutDashboard className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-wide">TowerRush <span className="text-slate-500 font-normal">| Admin</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-slate-300">API Connected</span>
            </div>
            <button 
              onClick={fetchData}
              disabled={loading}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 text-slate-400 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* STATS WIDGETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Clicks Card (NestJS) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MousePointerClick className="w-24 h-24 text-cyan-500 -mt-6 -mr-6 transform rotate-12" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <MousePointerClick className="w-5 h-5 text-cyan-400" />
              <h3 className="text-slate-400 font-medium">Всего переходов</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.totalClicks.toLocaleString()}</p>
            <div className="mt-2 text-sm text-green-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% за сегодня</span>
            </div>
          </div>

          {/* GA Live Users Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity className="w-24 h-24 text-green-500 -mt-6 -mr-6" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-green-400" />
              <h3 className="text-slate-400 font-medium flex items-center gap-2">
                Live (Google Analytics)
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.liveUsers}</p>
            <div className="mt-2 text-sm text-slate-500">Активных юзеров сейчас</div>
          </div>

          {/* Conversion Rate Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <BarChart3 className="w-24 h-24 text-fuchsia-500 -mt-6 -mr-6 transform -rotate-12" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-slate-400 font-medium">Конверсия (CR)</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.conversionRate}</p>
            <div className="mt-2 text-sm text-green-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>+1.2% с прошлой недели</span>
            </div>
          </div>

          {/* Revenue/Deposits Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe className="w-24 h-24 text-yellow-500 -mt-6 -mr-6" />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-yellow-400" />
              <h3 className="text-slate-400 font-medium">Сумма депозитов (Пример)</h3>
            </div>
            <p className="text-3xl font-black text-white">{stats.deposits}</p>
            <div className="mt-2 text-sm text-slate-500">По данным партнерки</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* CHART SECTION (Left) */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Трафик за неделю</h2>
              <select className="bg-slate-950 border border-slate-800 text-sm rounded-lg px-3 py-1.5 text-slate-300 focus:outline-none focus:border-cyan-500">
                <option>Последние 7 дней</option>
                <option>Этот месяц</option>
              </select>
            </div>
            
            {/* Simple CSS Bar Chart Representation */}
            <div className="flex-1 flex items-end justify-between gap-2 h-48 mt-auto pb-4 border-b border-slate-800 relative">
              {/* Горизонтальные линии сетки */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-px bg-slate-800/50"></div>
                <div className="w-full h-px bg-slate-800/50"></div>
                <div className="w-full h-px bg-slate-800/50"></div>
                <div className="w-full h-px bg-slate-800/50"></div>
              </div>

              {MOCK_CHART_DATA.map((item, index) => {
                const heightPercentage = (item.clicks / 4000) * 100; // max value ~4000
                return (
                  <div key={index} className="flex flex-col items-center w-full group relative z-10">
                    {/* Tooltip */}
                    <div className="absolute -top-10 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.clicks} кликов
                    </div>
                    {/* Bar */}
                    <div 
                      className="w-full max-w-[40px] bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm transition-all duration-500 hover:from-cyan-500 hover:to-cyan-300"
                      style={{ height: `${heightPercentage}%` }}
                    />
                    <span className="mt-4 text-xs text-slate-400">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GEO & DEVICE STATS (Right) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Источники трафика</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 flex items-center gap-2"><Monitor className="w-4 h-4"/> Mobile</span>
                  <span className="text-white font-medium">85%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <div className="bg-fuchsia-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 flex items-center gap-2"><Monitor className="w-4 h-4"/> Desktop</span>
                  <span className="text-white font-medium">10%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <div className="bg-fuchsia-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400 flex items-center gap-2"><Globe className="w-4 h-4"/> Южная Корея (KR)</span>
                  <span className="text-white font-medium">98%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECENT CLICKS TABLE */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h2 className="text-xl font-bold text-white">Лайв лента кликов (Из NestJS)</h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium">Смотреть все</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-950/50 text-xs uppercase text-slate-500 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">ID / Время</th>
                  <th className="px-6 py-4 font-semibold">IP Адрес</th>
                  <th className="px-6 py-4 font-semibold">Гео</th>
                  <th className="px-6 py-4 font-semibold">Устройство / Браузер</th>
                  <th className="px-6 py-4 font-semibold text-right">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {clicks.map((click, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-slate-300 font-medium">{click.id}</div>
                      <div className="text-xs flex items-center gap-1 mt-1 text-slate-500">
                        <Clock className="w-3 h-3" /> {click.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs">{click.ip}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        {click.geo}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-300">{click.device}</div>
                      <div className="text-xs text-slate-500">{click.browser}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border
                        ${click.status === 'Converted' 
                          ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                          : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}`}>
                        {click.status === 'Converted' ? 'Регистрация' : 'Переход'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {loading && (
            <div className="w-full p-4 flex justify-center bg-slate-900">
               <RefreshCw className="w-6 h-6 text-slate-500 animate-spin" />
            </div>
          )}
        </div>

      </main>
    </div>
  );
}