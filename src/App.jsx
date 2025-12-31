// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Hello CI/CD 🚀</h1>
//       <p>This app is deployed using Github</p>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          🚀 CI/CD Deployment Successful
        </h1>

        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          This React + Vite application is automatically built and deployed
          using <strong>GitHub Actions</strong> and{" "}
          <strong>GitHub Pages</strong>.
        </p>

        <p style={{ opacity: 0.9 }}>
          Every push to the <strong>main</strong> branch triggers a pipeline:
          <br />
          Build → Test → Deploy ✨
        </p>

        <p style={{ marginTop: "30px", fontSize: "0.95rem", opacity: 0.8 }}>
          Built with ❤️ for CI/CD learning & automation
        </p>
      </div>
    </div>
  );
}

export default App;
