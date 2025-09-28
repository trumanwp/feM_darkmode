import IconUp from "../images/icon-up.svg"
import IconDown from "../images/icon-down.svg"


export default function MainCard(props) {


    const image = props.direction === "up" ? IconUp : IconDown
    const indication = props.direction === "up" ? "Upwards pointing icon" : "Downwards pointing icon"

    const borderStyles = {
        facebook: "border-t-4 border-t-[hsl(208,92%,53%)]",
        twitter: "border-t-4 border-t-[hsl(203,89%,53%)]",
        youtube: "border-t-4 border-t-[hsl(348,97%,39%)]",
        instagram: {
            style: {
                borderTop: "4px solid",
                borderImage: "linear-gradient(90deg, hsl(37,97%,70%), hsl(5,77%,71%), hsl(329,70%,58%)) 1",
            },
        },
    };

// Determine top border
    const borderClass = borderStyles[props.platform]?.className || borderStyles[props.platform] || "";
    const borderStyle = borderStyles[props.platform]?.style || {};

    return(
        <div
            className={`dark:bg-[hsl(228,28%,20%)] bg-[hsl(227,47%,96%)] rounded flex flex-col justify-center items-center h-[200px] w-[260px] mt-10 ${borderClass}`}
            style={borderStyle}
        >
            <div className="flex flex-row gap-2 items-center">
                <img className="size-5" src={props.img} alt={props.alt}/>
                <p className="text-xs text-gray-400">@{props.handle}</p>
            </div>

            <h1 className="mt-4 text-4xl font-bold text-black dark:text-white">{props.followers}</h1>
            <p className="font-light tracking-widest text-xs text-gray-400">FOLLOWERS</p>

            <div className="flex flex-row items-center gap-2 mt-4">
                <img className="size-2" src={image} alt={indication}/>
                <p className={`text-xs ${props.direction === "up" ? "text-green-500" : "text-red-500"}`}>{props.today} Today</p>
            </div>
        </div>
    )
}