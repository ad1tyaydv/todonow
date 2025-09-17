import { Calendar } from "@/components/ui/calendar"
import Navbar from "./components/Navbar"


export default function HomePage() {

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-end pr-4 mt-50">
        <Calendar fixedWeeks/>
      </div>
    </div>
  )
}