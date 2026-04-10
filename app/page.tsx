"use client";
import React, { useEffect, useState } from 'react';
import { Flame, Clock, ShieldCheck, Coins, ArrowRight, BellRing, Trophy } from 'lucide-react';
import { supabase } from './supabase';
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const RECENT_WINNERS = [
  { name: 'Kim**', amount: '₩ 4,500,000' },
  { name: 'Lee**', amount: '₩ 12,800,000' },
  { name: 'Park**', amount: '₩ 1,200,000' },
  { name: 'Choi**', amount: '₩ 8,900,000' },
];

export default function App() {
  const [isClicking, setIsClicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const [winnerIndex, setWinnerIndex] = useState(0);

  const GA_MEASUREMENT_ID = 'G-74J0QQRZRV'; 
  const AFFILIATE_LINK = 'https://ptgateway.com/v1/process/376?landing=/signup';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const winnerTimer = setInterval(() => {
      setWinnerIndex((prev) => (prev + 1) % RECENT_WINNERS.length);
    }, 3000);
    return () => clearInterval(winnerTimer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleCtaClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicking(true);

    try {
      // --- НОВЫЙ БЛОК ДЛЯ SUPABASE ---
      await supabase.from('clicks').insert([
        { 
          geo: 'KR', 
          status: 'conversion',
          device: window.innerWidth < 768 ? 'Mobile' : 'Desktop'
        }
      ]);
      // -------------------------------

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: GA_MEASUREMENT_ID,
          event_category: 'gambling_offer',
          event_label: 'neon_tower_rush_click',
        });
      }
    } catch (error) {
      console.error('Tracking failed:', error);
    } finally {
      setTimeout(() => {
        window.location.href = AFFILIATE_LINK;
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050505]/90 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 flex items-center justify-between shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-slate-300">실시간 출금:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">{RECENT_WINNERS[winnerIndex].name}</span>
            <span className="text-sm font-black text-cyan-400">{RECENT_WINNERS[winnerIndex].amount}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg px-4 flex flex-col items-center pt-20 pb-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest">
            <Flame className="w-4 h-4" />
            VIP 초대장
          </div>
          <h1 className="text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500">
            TOWER RUSH
          </h1>
        </div>

        <div className="w-full relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 rounded-3xl blur opacity-40"></div>
          <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-slate-400 text-sm mb-2">남은 시간:</span>
              <div className="flex items-center gap-2 text-3xl font-mono font-black text-white bg-white/5 py-2 px-6 rounded-lg border border-white/5">
                <Clock className="w-6 h-6 text-fuchsia-500 animate-pulse" />
                {formatTime(timeLeft)}
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2 leading-tight">
              첫 입금 시 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">200%</span> 보너스
            </h2>
            <p className="text-slate-400 font-medium mb-8">
              + 매일 무료 스핀 50회 증정!
            </p>
            <button onClick={handleCtaClick} disabled={isClicking} className="relative w-full flex justify-center items-center gap-3 py-5 px-6 rounded-2xl font-black text-2xl overflow-hidden transition-all hover:scale-[1.02] bg-gradient-to-r from-fuchsia-600 to-cyan-600">
              <span className="relative z-10 text-white">{isClicking ? '이동 중...' : '지금 바로 시작하기'}</span>
              <ArrowRight className="w-7 h-7 relative z-10 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}