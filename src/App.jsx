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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-fuchsia-950 px-6">
      <div className="max-w-5xl w-full text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-indigo-300">
          Next-Gen Online Shopping Experience
        </div>

        {/* Gradient Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
          Smart E-Commerce Platform
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
          Discover a beautifully crafted e-commerce platform built for speed,
          security, and scalability. Shop smarter with seamless navigation,
          secure payments, and lightning-fast performance.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-slate-200 shadow-xl">
            <p className="text-3xl mb-2">⚡</p>
            <h3 className="font-semibold text-lg mb-1">Fast Performance</h3>
            <p className="text-sm text-slate-400">
              Optimized for speed and smooth browsing.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-slate-200 shadow-xl">
            <p className="text-3xl mb-2">🔐</p>
            <h3 className="font-semibold text-lg mb-1">Secure Payments</h3>
            <p className="text-sm text-slate-400">
              Safe, encrypted, and reliable checkout.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-slate-200 shadow-xl">
            <p className="text-3xl mb-2">📦</p>
            <h3 className="font-semibold text-lg mb-1">Smart Orders</h3>
            <p className="text-sm text-slate-400">
              Track and manage orders effortlessly.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg hover:scale-105 transition">
            Explore Products
          </button>

          <button className="px-10 py-4 rounded-xl font-semibold text-indigo-300 border border-indigo-400/40 hover:bg-white/5 transition">
            Start Shopping
          </button>
        </div>

        {/* Footer */}
        <p className="mt-14 text-sm text-slate-400">
          Powering modern online stores with style & performance 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
