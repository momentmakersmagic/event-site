function App() {
  return (
    <div style={{
      background: "#0a0a0a",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>
      
      <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
        We Make Every Event 
        <span style={{ color: "#FFD700" }}> Unforgettable</span>
        <span style={{ color: "#ff4da6" }}> & Magical ✨</span>
      </h1>

      <p style={{ marginTop: "15px", color: "#aaa" }}>
        From weddings to birthdays — we bring your vision to life.
      </p>

      <div style={{ marginTop: "25px" }}>
        <button style={{
          background: "#ff4da6",
          border: "none",
          padding: "12px 25px",
          borderRadius: "30px",
          color: "white",
          marginRight: "10px"
        }}>
          Plan My Event
        </button>

        <button style={{
          border: "1px solid white",
          padding: "12px 25px",
          borderRadius: "30px",
          background: "transparent",
          color: "white"
        }}>
          View Our Work
        </button>
      </div>

    </div>
  );
}

export default App;