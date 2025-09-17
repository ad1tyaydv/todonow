import { Calendar } from "@/components/ui/calendar"
import Navbar from "./components/Navbar"
import TodoArea from "./components/TodoArea"


export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col lg:flex-row flex-1 ">
        <div className="flex-1 flex justify-center items-center p-4">
          <TodoArea />
        </div>

        <div className="flex justify-center p-4">
          <Calendar fixedWeeks/>
        </div>
      </div>
    </div>
  )
}