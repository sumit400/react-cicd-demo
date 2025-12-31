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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6">
      <div className="max-w-4xl w-full text-center text-white">
        {/* Hero Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          🛒 Smart E-Commerce Platform
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
          A modern, scalable e-commerce platform designed to deliver seamless
          shopping experiences. Discover products, manage orders, and enjoy
          fast, secure checkout — all in one place.
        </p>

        {/* Feature Card */}
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 mb-10 shadow-xl">
          <p className="text-lg font-medium">
            Built for modern businesses with:
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-semibold">
            <div className="bg-white/10 rounded-xl py-3">
              ⚡ Fast Performance
            </div>
            <div className="bg-white/10 rounded-xl py-3">
              🔐 Secure Payments
            </div>
            <div className="bg-white/10 rounded-xl py-3">
              📦 Smart Order Management
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/70 font-semibold hover:bg-white/10 transition">
            Start Shopping
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-white/80">
          Powering next-generation online stores 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
