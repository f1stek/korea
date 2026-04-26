"use client";

import React, { useState } from "react";

export default function TowerRushPage() {
  const [copied, setCopied] = useState("");
  // Твоя основная реферальная ссылка
  const partnerLink = "https://ptgateway.com/v1/process/376?landing=/signup&token1=youtube";

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div style={{
      backgroundColor: "#0b0d17",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Noto Sans KR', sans-serif",
      position: "relative",
      overflowX: "hidden",
      padding: "40px 20px"
    }}>
      {/* Сетка на фоне */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        zIndex: 0
      }}></div>

      {/* Неоновые свечения на фоне */}
      <div style={{ position: "absolute", top: "10%", left: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)", zIndex: 0 }}></div>
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)", zIndex: 0 }}></div>

      {/* ШАПКА САЙТА (Измененный текст) */}
      <header style={{ textAlign: "center", marginBottom: "40px", zIndex: 1 }}>
        <h1 style={{ 
          fontSize: "clamp(2.5rem, 8vw, 5rem)", 
          fontWeight: "900", 
          letterSpacing: "0.1em",
          background: "linear-gradient(to right, #b388ff, #8c9eff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px"
        }}>SECRET BONUS ZONE</h1>
        <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>가입 즉시 쏟아지는 특별한 혜택을 놓치지 마세요!</p>
      </header>

      <main style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "30px", 
        width: "100%", 
        maxWidth: "1000px", 
        zIndex: 1 
      }}>
        
        {/* ================= КАРТОЧКА 1: TOWER RUSH ================= */}
        <div className="game-card" style={cardStyle}>
          <div style={glowGold}></div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#60a5fa", boxShadow: "0 0 8px #60a5fa" }}></div>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>요즘 많이 하는 그 게임</span>
          </div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>타워 러쉬 <span style={{ fontSize: "16px", color: "#9ca3af", fontWeight: "normal" }}>TOWER RUSH</span></h2>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>여기서 바로 시작</h3>
          <p style={{ fontSize: "14px", color: "#d1d5db", marginBottom: "25px" }}>그냥 바로 하면 됨 👇<br />코드만 넣으면 끝.</p>
          
          <a href={partnerLink} target="_blank" rel="noopener noreferrer" style={btnStyle}>지금 바로 하기</a>
          
          <div style={promoBoxStyle}>
            <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>혜택 받으려면 코드만 입력</p>
            <div style={codeRowStyle}>
              <span style={{ color: "#eab308", fontWeight: "bold" }}>CODE: TOWERS</span>
              <button onClick={() => copyToClipboard("TOWERS", "towers")} style={copyBtnStyle}>
                {copied === "towers" ? "복사 완료!" : "코드 복사"}
              </button>
            </div>
          </div>
        </div>

        {/* ================= КАРТОЧКА 2: JUMPER ================= */}
        <div className="game-card" style={cardStyle}>
          <div style={glowBlue}></div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#c084fc", boxShadow: "0 0 8px #c084fc" }}></div>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>최고의 아케이드 액션</span>
          </div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>점퍼 <span style={{ fontSize: "16px", color: "#9ca3af", fontWeight: "normal" }}>JUMPER</span></h2>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>하늘을 향해 뛰어오르세요</h3>
          <p style={{ fontSize: "14px", color: "#d1d5db", marginBottom: "25px" }}>최고 기록에 도전하세요 👇<br />보너스 받고 시작하기.</p>
          
          <a href={partnerLink} target="_blank" rel="noopener noreferrer" style={btnStyle}>지금 바로 하기</a>
          
          <div style={promoBoxStyle}>
            <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>보너스 아이템 코드</p>
            <div style={codeRowStyle}>
              <span style={{ color: "#c084fc", fontWeight: "bold" }}>CODE: JUMP24</span>
              <button onClick={() => copyToClipboard("JUMP24", "jump")} style={copyBtnStyle}>
                {copied === "jump" ? "복사 완료!" : "코드 복사"}
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* ПОДВАЛ (Footer) */}
      <footer style={{ marginTop: "60px", color: "#4b5563", fontSize: "12px", zIndex: 1 }}>
        © 2026 korea-2caa.com Official Partner.
      </footer>
    </div>
  );
}

// === СТИЛИ КОМПОНЕНТОВ ===
const cardStyle: React.CSSProperties = {
  background: "rgba(22, 24, 35, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "30px",
  border: "1px solid rgba(255,255,255,0.1)",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

const btnStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #FACC15 0%, #38BDF8 100%)",
  padding: "15px",
  borderRadius: "12px",
  color: "black",
  fontWeight: "bold",
  textAlign: "center",
  textDecoration: "none",
  marginBottom: "20px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  transition: "all 0.2s ease"
};

const promoBoxStyle: React.CSSProperties = {
  background: "rgba(30, 32, 44, 0.8)",
  padding: "15px",
  borderRadius: "12px",
  marginTop: "auto",
  border: "1px solid rgba(255, 255, 255, 0.05)"
};

const codeRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(0,0,0,0.3)",
  padding: "8px 12px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.05)"
};

const copyBtnStyle: React.CSSProperties = {
  background: "#3b82f6",
  color: "white",
  border: "none",
  padding: "6px 14px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.2s"
};

const glowGold: React.CSSProperties = { 
  position: "absolute", top: "-10%", right: "-10%", width: "120px", height: "120px", 
  background: "radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" 
};
const glowBlue: React.CSSProperties = { 
  position: "absolute", top: "-10%", right: "-10%", width: "120px", height: "120px", 
  background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" 
};