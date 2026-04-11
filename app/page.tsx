"use client";

import React from "react";

export default function TowerRushPage() {
  const handleAction = () => {
    // Твоя партнерская ссылка
    const partnerLink = "https://ptgateway.com/v1/process/376?landing=/signup&token1=youtube";
    window.location.href = partnerLink;
  };

  return (
    <div style={{
      // Темный фиолетово-синий фон
      background: "linear-gradient(135deg, #090912 0%, #1a0b2e 50%, #0c1b33 100%)",
      color: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
      textAlign: "center",
      margin: 0,
      padding: "20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Неоновые свечения на фоне (Фиолетовое и Синее) */}
      <div style={{
        position: "absolute",
        width: "60vw", height: "60vw", minWidth: "400px", minHeight: "400px",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(0,0,0,0) 70%)",
        top: "-10%", left: "-10%", borderRadius: "50%", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        width: "60vw", height: "60vw", minWidth: "400px", minHeight: "400px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)",
        bottom: "-10%", right: "-10%", borderRadius: "50%", pointerEvents: "none"
      }} />

      {/* Заголовок с неоновым градиентом */}
      <h1 style={{ 
        fontSize: "clamp(3rem, 12vw, 6rem)", 
        fontWeight: "900",
        marginBottom: "15px", 
        background: "linear-gradient(to right, #c084fc, #60a5fa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))",
        textTransform: "uppercase",
        letterSpacing: "2px",
        zIndex: 1
      }}>
        TOWER RUSH
      </h1>
      
      {/* Корейский текст */}
      <p style={{ 
        fontSize: "clamp(1.1rem, 4vw, 1.4rem)", 
        marginBottom: "50px", 
        color: "#e2e8f0",
        opacity: 0.9,
        fontWeight: "500",
        letterSpacing: "0.5px",
        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        zIndex: 1
      }}>
        타워 러시 - 지금 플레이하고 전설적인 승리를 쟁취하세요!
      </p>

      {/* Неоновая кнопка */}
      <button
        onClick={handleAction}
        style={{
          background: "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)",
          color: "#ffffff",
          border: "none",
          padding: "20px 70px",
          fontSize: "1.6rem",
          fontWeight: "800",
          borderRadius: "100px",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 10px rgba(255,255,255,0.2)",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          letterSpacing: "1px",
          zIndex: 1
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05) translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(139, 92, 246, 0.8), inset 0 0 15px rgba(255,255,255,0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 10px rgba(255,255,255,0.2)";
        }}
      >
        게임 시작하기
      </button>

      {/* Футер */}
      <div style={{ 
        position: "absolute", 
        bottom: "30px", 
        fontSize: "0.85rem", 
        color: "#94a3b8",
        opacity: 0.6,
        zIndex: 1
      }}>
        © 2026 TOWER RUSH KOREA. Official Partner.
      </div>
    </div>
  );
}