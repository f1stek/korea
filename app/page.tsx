"use client";

import React, { useEffect, useState } from 'react';
import { Flame, Clock, ShieldCheck, ArrowRight, Trophy } from 'lucide-react';
import { supabase } from './supabase';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(900);
  
  // ТВОЯ ПРАВИЛЬНАЯ ССЫЛКА
  const AFFILIATE_LINK = 'https://ptgateway.com/v1/process/376?landing=true';

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTowerRushClick = async () => {
    try {
      // Записываем клик в базу
      await supabase.from('clicks').insert([
        { ip: 'user', device: 'mobile/pc', geo: 'KR', status: 'clicked' }
      ]);
    } catch (e) {
      console.error(e);
    }
    // Перенаправляем на оффер
    window.location.href = AFFILIATE_LINK;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-12 px-4 font-sans">
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wide">VIP 초대장</span>
          </div>
          <h1 className="text-6xl font-black italic tracking-tighter mb-2">
            TOWER <span className="text-cyan-400">RUSH</span>
          </h1>
        </div>

        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs font-bold mb-1 uppercase">남은 시간</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-3xl font-mono font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-slate-400 text-xs font-bold mb-1 uppercase">보너스</span>
              <div className="text-2xl font-bold text-green-400">+200%</div>
            </div>
          </div>

          <button
            onClick={handleTowerRushClick}
            className="w-full group flex items-center justify-center gap-3 py-6 rounded-2xl font-black text-xl bg-white text-black hover:bg-cyan-400 transition-all active:scale-95"
          >
            지금 바로 시작하기
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-medium text-slate-300">안전한 보증</span>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-xs font-medium text-slate-300">최고의 당첨 확률</span>
          </div>
        </div>
      </div>
    </div>
  );
}