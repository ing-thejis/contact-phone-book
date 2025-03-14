import { FlyOutAction } from "./components/FlyOutAction"

function App() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-neutral-700 text-neutral-100">
      <section className="relative w-full max-w-md p-4 bg-neutral-600 rounded-lg shadow-lg">
        <h3>title</h3>
        <p>description</p>
        <FlyOutAction />
      </section>
    </main>
  )
}

export default App
