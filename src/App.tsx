import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-neutral-700 text-neutral-100">
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
