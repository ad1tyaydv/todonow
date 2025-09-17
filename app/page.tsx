
import { ModeToggle } from "./components/ModeToggle"
export default function HomePage() {

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <section>
        <ModeToggle />
      </section>
      <h1>Welcome to my TodoNow app</h1>
      <button className="border-2 cursor-pointer">click me</button>
    </div>
  )
}