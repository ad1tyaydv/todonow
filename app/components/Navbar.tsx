import { ModeToggle } from "../helpers/ModeToggle"
import { Calendar } from "@/components/ui/calendar"

export default function Navbar() {

    return (
        <div className="flex justify-between items-center bg-gray-600 px-4 py-2">
            <div className="text-2xl font-bold text-white">
                TodoNow
            </div>
            <div className="flex justify-end gap-10">
                <ModeToggle />
                <span className="border-2 rounded">Log In</span>
            </div>
        </div>
    )
}