"use client";

import React from "react";

export default function TowerRushPage() {
  const handleAction = () => {
    // Твоя партнерская ссылка
    const partnerLink = "https://ptgateway.com/v1/process/376?landing=/signup&token1=youtube";
    
    // Перенаправляем пользователя напрямую
    window.location.href = partnerLink;
  };

  return (
    <div style={{
      backgroundColor: "#050505",
      color: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#ffcc00" }}>
        TOWER RUSH
      </h1>
      
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.8 }}>
        타워 러시 - 지금 플레이하고 승리하세요!
      </p>

      <button
        onClick={handleAction}
        style={{
          backgroundColor: "#ffcc00",
          color: "#000",
          border: "none",
          padding: "15px 40px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(255, 204, 0, 0.5)",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        게임 시작
      </button>

      <div style={{ marginTop: "40px", fontSize: "0.8rem", opacity: 0.5 }}>
        © 2026 TOWER RUSH KOREA. All rights reserved.
      </div>
    </div>
  );
}