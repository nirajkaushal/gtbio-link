import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { SettingsDropdown } from "./settings-dropdown"

export function BioContainer() {
  return (
    <div
      className={cn(
        "relative h-full flex flex-col w-full max-w-lg p-4 xl:p-16 pb-4"
        // "bg-main border-2 border-border shadow-light rounded-base"
      )}
    >
      <div className="absolute right-4 top-4">
        <SettingsDropdown />
      </div>
      <div className="flex-grow h-full flex flex-col justify-start items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>NK</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start items-center">
          <h1 className="font-bold text-2xl text-center">Niraj Kaushal</h1>
          <p className="text-center ">Frontend Developer</p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <Button size="icon">F</Button>
          <Button size="icon">I</Button>
          <Button size="icon">Y</Button>
          <Button size="icon">W</Button>
        </div>
        <div className="w-full flex flex-col gap-4 mt-8">
          <Button size="full">
            <div className="flex justify-start items-center gap-4 w-full">
              <span>A</span>
              <span>View My Work</span>
            </div>
          </Button>
          <Button size="full">
            <div className="flex justify-start items-center gap-4 w-full">
              <span>A</span>
              <span>View My Work</span>
            </div>
          </Button>
          <Button size="full">
            <div className="flex justify-start items-center gap-4 w-full">
              <span>A</span>
              <span>View My Work</span>
            </div>
          </Button>
          <Button size="full">
            <div className="flex justify-start items-center gap-4 w-full">
              <span>A</span>
              <span>View My Work</span>
            </div>
          </Button>
        </div>
      </div>
      <p className="text-center text-sm">Made with 💖 in Nepal</p>
    </div>
  )
}
