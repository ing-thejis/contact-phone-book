import { CardContact } from "./components/CardContact"

function App() {
  const MOCK = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `name-${i}`,
    description: `description-${i}`,
  }))

  return (
    <main className="w-full h-screen  bg-neutral-400 text-neutral-100 overflow-hidden overflow-y-scroll">
      <section className="relative w-full h-full p-4 bg-neutral-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK.map((item) => (
          <CardContact
            key={item.id}
            {...item}
            onClick={() => console.log(item.title)}
          />
        ))}
      </section>
    </main>
  )
}

export default App
