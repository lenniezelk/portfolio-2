import { useRive } from "@rive-app/react-canvas"
import riveFile from '@/assets/portfolio.riv';

export default function RiveAnimation({ artboardName }: { artboardName: string }) {
    const { RiveComponent } = useRive({
        src: riveFile,
        autoplay: true,
        artboard: artboardName,
        stateMachines: "State Machine 1"
    })

    return (
        <div className="w-full h-full">
            <RiveComponent />
        </div>
    )
}