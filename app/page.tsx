"use client";

import React, { useEffect, useState } from 'react';
import { Flame, Clock, ShieldCheck, ArrowRight, Trophy, Target, Gem } from 'lucide-react';
import { supabase } from './supabase';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 минут в секундах
  
  // ТВОЯ ПРАВИЛЬНАЯ ПАРТНЕРСКАЯ ССЫЛКА
  const AFFILIATE_LINK = 'https://ptgateway.com/v1/process/376?landing=true';

  // Таймер обратного отсчета
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // ФУНКЦИЯ КЛИКА ПО КНОПКЕ
  const handleTowerRushClick = async () => {
    try {
      // 1. Пытаемся записать клик в Supabase
      const { error } = await supabase
        .from('clicks')
        .insert([
          { ip: 'user_click', device: 'mobile/pc', geo: 'KR', status: 'clicked' }
        ]);

      if (error) {
        console.error("Ошибка записи в базу:", error.message);
      } else {
        console.log("Клик успешно записан в Supabase!");
      }
    } catch (err) {
      console.error("Системная ошибка:", err);
    } finally {
      // 2. В любом случае перенаправляем на оффер
      window.location.href = AFFILIATE_LINK;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-12 px-4 font-sans overflow-x-hidden relative">
      
      {/* Мягкий фоновый градиент для атмосферы */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* КРАСИВЫЙ ЗАГОЛОВОК С ОГНЕМ И НЕОНОМ */}
        <div className="text-center mb-10 group">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/50 border border-red-700 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <Flame className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-red-100">공식 VIP 초대장</span>
          </div>
          
          <div className="relative">
            {/* Эффект свечения сзади */}
            <div className="absolute -inset-1 bg-red-600 rounded-lg blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            
            <h1 className="relative text-6xl md:text-7xl font-black italic tracking-tighter leading-none mb-2">
              <span className="text-white">TOWER </span>
              <span className="text-red-500 shadow-red-500 [text-shadow:0_0_20px_#dc2626]">RUSH</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 text-2xl font-bold uppercase tracking-widest text-slate-300">
              <div className="h-px w-8 bg-slate-700"></div>
              <Target className="w-5 h-5 text-red-400" />
              <span>&</span>
              <Gem className="w-5 h-5 text-red-400" />
              <span>MINESLOT</span>
              <div className="h-px w-8 bg-slate-700"></div>
            </div>
          </div>
        </div>

        {/* КАРТОЧКА С ТАЙМЕРОМ */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden group">
          {/* Тонкий неоновый контур при наведении */}
          <div className="absolute -inset-px bg-gradient-to-r from-red-600 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0"></div>
          <div className="absolute inset-0 bg-[#111] rounded-3xl z-0"></div>

          <div className="relative z-10 flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs font-bold mb-1 uppercase tracking-widest">남은 시간</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-3xl font-mono font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-slate-400 text-xs font-bold mb-1 uppercase tracking-widest">보너스</span>
              <div className="text-2xl font-bold text-green-400">+200%</div>
            </div>
          </div>

          {/* ГЛАВНАЯ КНОПКА (СИНИЙ АКЦЕНТ) */}
          <button
            onClick={handleTowerRushClick}
            className="relative z-10 w-full group flex items-center justify-center gap-3 py-6 rounded-2xl font-black text-xl bg-cyan-500 text-black hover:bg-white hover:scale-[1.03] transition-all active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            지금 바로 시작하기
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* ПРЕИМУЩЕСТВА (СНИЗУ) */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-red-400" />
            <span className="text-xs font-medium text-slate-300">100% 안전 보증</span>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3 backdrop-blur-sm">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-xs font-medium text-slate-300">최고의 당첨 확률</span>
          </div>
        </div>
      </div>
    </div>
  );
}