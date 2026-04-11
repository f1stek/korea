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
      // ГЛУБОКИЙ ГРАДИЕНТНЫЙ ФОН (Корейский стиль: темный + неоновые акценты)
      background: "radial-gradient(circle at 50% 50%, #1a1a2e 0%, #16213e 40%, #0f172a 100%)",
      color: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif",
      textAlign: "center",
      margin: 0,
      padding: "20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* ЭФФЕКТЫ СВЕЧЕНИЯ НА ФОНЕ */}
      <div style={{
        position: "absolute",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(110, 231, 183, 0.1) 0%, rgba(0,0,0,0) 70%)",
        top: "-150px", left: "-150px", borderRadius: "50%", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 70%)",
        bottom: "-100px", right: "-100px", borderRadius: "50%", pointerEvents: "none"
      }} />

      {/* ЛОГОТИП / НАЗВАНИЕ */}
      <h1 style={{ 
        fontSize: "clamp(3.5rem, 12vw, 6rem)", 
        fontWeight: "900",
        marginBottom: "15px", 
        color: "#ffffff",
        textTransform: "uppercase",
        letterSpacing: "2px",
        background: "linear-gradient(180deg, #ffffff 30%, #a5b4fc 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))"
      }}>
        TOWER RUSH
      </h1>
      
      {/* КОРЕЙСКИЙ ПОДЗАГОЛОВОК */}
      <p style={{ 
        fontSize: "clamp(1.1rem, 4vw, 1.4rem)", 
        marginBottom: "50px", 
        color: "#a5b4fc",
        opacity: 0.9,
        fontWeight: "500",
        letterSpacing: "0.5px"
      }}>
        타워 러시 - 지금 플레이하고 전설적인 승리를 쟁취하세요!
      </p>

      {/* КНОПКА (Яркий, притягивающий акцент) */}
      <button
        onClick={handleAction}
        style={{
          // Яркий неоновый градиент для кнопки
          background: "linear-gradient(90deg, #10b981 0%, #3b82f6 100%)",
          color: "#ffffff",
          border: "none",
          padding: "20px 70px",
          fontSize: "1.6rem",
          fontWeight: "800",
          borderRadius: "100px",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          textTransform: "uppercase",
          letterSpacing: "1px"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.08) translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(59, 130, 246, 0.8)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.6)";
        }}
      >
        게임 시작하기
      </button>

      {/* ФУТЕР */}
      <div style={{ 
        position: "absolute", 
        bottom: "30px", 
        fontSize: "0.85rem", 
        color: "#64748b",
        opacity: 0.8 
      }}>
        © 2026 TOWER RUSH KOREA. Официальный партнер.
      </div>
    </div>
  );
}