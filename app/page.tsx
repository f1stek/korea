"use client";

import React, { useEffect, useState } from 'react';
import { Flame, Clock, ShieldCheck, Coins, ArrowRight, BellRing, Trophy } from 'lucide-react';
import { supabase } from './supabase'; // Убедись, что файл supabase.ts лежит рядом

export default function App() {
  const [isClicking, setIsClicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  
  const GA_MEASUREMENT_ID = 'G-74J0QQRZRV';
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

  // ФУНКЦИЯ КЛИКА С ОТЛАДКОЙ
  const handleTowerRushClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(">>> Кнопка нажата!");
    setIsClicking(true);

    try {
      // 1. Пытаемся записать в Supabase
      console.log(">>> Отправка данных в Supabase...");
      const { data, error } = await supabase
        .from('clicks')
        .insert([
          { 
            ip: 'user_click', 
            device: window.navigator.userAgent.slice(0, 50), 
            geo: 'KR', 
            status: 'active' 
          }
        ]);

      if (error) {
        console.error(">>> Ошибка базы данных:", error.message);
      } else {
        console.log(">>> Данные успешно записаны!", data);
      }

      // 2. Отправка в Google Analytics (если подключен)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'send_to': `${GA_MEASUREMENT_ID}/tower_rush_click`,
        });
      }
    } catch (err) {
      console.error(">>> Критическая ошибка в коде:", err);
    } finally {
      // 3. Редирект в любом случае через паузу
      setTimeout(() => {
        console.log(">>> Редирект на оффер...");
        window.location.href = AFFILIATE_LINK;
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden relative flex flex-col items-center justify-center py-12 px-4">
      
      {/* Фон с градиентом */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* Хедер */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wide uppercase">VIP 초대장</span>
          </div>
          <h1 className="text-6xl font-black italic tracking-tighter mb-2">
            TOWER <span className="text-cyan-400">TEST 1</span>
          </h1>
        </div>

        {/* Карточка с таймером */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">남은 시간</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-3xl font-mono font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">보너스</span>
              <div className="text-2xl font-bold text-green-400">+200%</div>
            </div>
          </div>

          {/* ГЛАВНАЯ КНОПКА */}
          <button
            onClick={handleTowerRushClick}
            disabled={isClicking}
            className={`w-full group relative flex items-center justify-center gap-3 py-6 rounded-2xl font-black text-xl transition-all duration-300 ${
              isClicking 
              ? 'bg-slate-800 scale-95 opacity-50' 
              : 'bg-white text-black hover:bg-cyan-400 hover:scale-[1.02] active:scale-95'
            }`}
          >
            {isClicking ? "연결 중..." : "지금 바로 시작하기"}
            {!isClicking && <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>

        {/* Футер */}
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