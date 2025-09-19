import React from "react";

function Header() {
    return (
        <header style={{
            background: "#f5f5f5",
            padding: "1rem 0",
            borderBottom: "1px solid #ddd",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <h1 style={{
                margin: 0,
                textAlign: "center",
                fontSize: "2rem"
            }}>
                Hide &amp; Seek Utility
            </h1>
            <nav style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "1rem",
                fontSize: "1rem"
            }}>
                <a href="#hiders" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Hiders</a>
                <a href="#seekers" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Seekers</a>
                <a href="#settings" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Settings</a>
            </nav>
        </header>
    );
}

export default Header;