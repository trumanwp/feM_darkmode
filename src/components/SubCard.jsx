import IconUp from "../images/icon-up.svg"
import IconDown from "../images/icon-down.svg"


export default function SubCard(props){

    const image = props.direction === "up" ? IconUp : IconDown
    const indication = props.direction === "up" ? "Upwards pointing icon" : "Downwards pointing icon"

    return(

        <div className="dark:bg-[hsl(228,28%,20%)] bg-[hsl(227,47%,96%)] w-60 h-30 flex flex-col px-4 pt-2 justify-between rounded">
            <div className="mt-4 flex flex-row justify-between px-2">
                <h3 className="text-gray-400  dark:text-gray-400 text-xs font-bold">{props.metric}</h3>
                <img className="size-5" src={props.img} alt={props.alt}/>
            </div>

            <div className="flex flex-row justify-between mr-2 mb-2">
                <h1 className="text-2xl p-2 text-black dark:text-white">{props.count}</h1>

                <div className="flex flex-row items-center gap-1">
                    <img className="size-1" src={image} alt={indication}/>
                    <p className={`text-xs ${props.direction === "up" ? "text-green-500" : "text-red-500"}`}>{props.percentage}%</p>
                </div>
            </div>

        </div>
    )
}