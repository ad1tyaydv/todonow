import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


export default function TodoArea() {

    return (
        <div className="w-[600px] h-[300px] border rounded-2xl flex items-col items-start p-4">
            <div className="relative w-full max-w-md">
                <input 
                type="text"
                placeholder="Enter you task"
                className="broder rounded-3xl px-4 py-4 border-2 w-full pr-20"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-sm">
                Add
            </button>
            </div>
        </div>
    )
}