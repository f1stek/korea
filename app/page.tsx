"use client";

import React from "react";

export default function TowerRushPage() {
  const handleAction = () => {
    // ПРАВИЛЬНАЯ ССЫЛКА
    const partnerLink = "https://ptgateway.com/v1/process/376?landing=/signup&token1=youtube";
    window.location.href = partnerLink;
  };

  return (
    <div style={{
      backgroundColor: "#000000",
      color: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', sans-serif",
      textAlign: "center",
      margin: 0,
      padding: "20px"
    }}>
      <h1 style={{ 
        fontSize: "clamp(3rem, 10vw, 5rem)", 
        fontWeight: "900",
        marginBottom: "10px", 
        color: "#FFD700",
        textShadow: "0 0 30px rgba(255, 215, 0, 0.3)"
      }}>
        TOWER RUSH
      </h1>
      
      <p style={{ 
        fontSize: "clamp(1rem, 4vw, 1.5rem)", 
        marginBottom: "40px", 
        opacity: 0.9,
        letterSpacing: "1px"
      }}>
        타워 러시 - 지금 플레이하고 승리하세요!
      </p>

      <button
        onClick={handleAction}
        style={{
          backgroundColor: "#FFD700",
          color: "#000000",
          border: "none",
          padding: "20px 60px",
          fontSize: "1.5rem",
          fontWeight: "800",
          borderRadius: "100px",
          cursor: "pointer",
          boxShadow: "0 10px 40px rgba(255, 215, 0, 0.4)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.backgroundColor = "#fff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#FFD700";
        }}
      >
        게임 시작
      </button>

      <div style={{ 
        position: "absolute", 
        bottom: "30px", 
        fontSize: "0.8rem", 
        opacity: 0.4 
      }}>
        © 2026 TOWER RUSH KOREA. All rights reserved.
      </div>
    </div>
  );
}