import './App.css'
import MainCard from "./components/MainCard.jsx";
import FaceBook from "./images/icon-facebook.svg";
import Twitter from "./images/icon-twitter.svg";
import Instagram from "./images/icon-instagram.svg";
import Youtube from "./images/icon-youtube.svg";
import SubCard from "./components/SubCard.jsx";
import {useState} from "react";

function App() {

    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

  return (
    <main className="h-screen w-full dark:bg-[linear-gradient(to_bottom,_#202334_25%,_#1e202a_25%)] bg-white flex flex-col items-center">
        <section className="flex flex-col justify-center w-3/4 mt-8">

            <nav className="flex flex-row content-between justify-between">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-black dark:text-white">Social Media Dashboard</h1>
                    <h3 className="text-xs text-gray-400 ">Total Followers: 23,004</h3>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <h3 className="text-xs text-gray-400 ">Dark Mode</h3>
                    <input onClick={toggleTheme} type="checkbox" defaultChecked className="toggle bg-gray-300 checked:bg-[linear-gradient(to_right,hsl(210,79%,56%),hsl(146,68%,55%))] checked:border-0"/>
                </div>
            </nav>

            <section className="flex flex-row gap-6 items-center justify-between">
                <MainCard
                    platform = "facebook"
                    img = {FaceBook}
                    alt = "Facebook Icon"
                    handle = "nathanf"
                    followers = "1987"
                    direction = "up"
                    today = "12"
                />

                <MainCard
                    platform = "twitter"
                    img = {Twitter}
                    alt = "Twitter Icon"
                    handle = "nathanf"
                    followers = "1044"
                    direction = "up"
                    today = "99"
                />

                <MainCard
                    platform = "instagram"
                    img = {Instagram}
                    alt = "Instagram Icon"
                    handle = "realnathanf"
                    followers = "11k"
                    direction = "up"
                    today = "1809"
                />

                <MainCard
                    platform = "youtube"
                    img = {Youtube}
                    alt = "Youtube Icon"
                    handle = "nathanf"
                    followers = "8239"
                    direction = "down"
                    today = "144"
                />
            </section>

            <h1 className="pt-8 pb-4 font-bold text-gray-950 dark:text-gray-400">Overview - Today</h1>

            <section className="flex flex-row gap-6 items-center justify-between">
                <SubCard
                    metric = "Page Views"
                    img = {FaceBook}
                    alt = "facebook icon"
                    count = "87"
                    percentage ="3"
                    direction = "up"
                />

                <SubCard
                    metric = "Likes"
                    img = {FaceBook}
                    alt = "facebook icon"
                    count = "52"
                    percentage ="2"
                    direction = "down"
                />

                <SubCard
                    metric = "Likes"
                    img = {Instagram}
                    alt = "Instagram icon"
                    count = "5462"
                    percentage ="2257"
                    direction = "up"
                />

                <SubCard
                    metric = "Profile Views"
                    img = {Instagram}
                    alt = "facebook icon"
                    count = "52k"
                    percentage ="1375"
                    direction = "up"
                />
            </section>

            <section className="flex flex-row gap-6 items-center justify-between mt-6">
                <SubCard
                    metric = "Retweets"
                    img = {Twitter}
                    alt = "Twitter icon"
                    count = "117"
                    percentage ="303"
                    direction = "up"
                />

                <SubCard
                    metric = "Likes"
                    img = {Twitter}
                    alt = "Twitter icon"
                    count = "507"
                    percentage ="553"
                    direction = "up"
                />

                <SubCard
                    metric = "Likes"
                    img = {Youtube}
                    alt = "Youtube icon"
                    count = "107"
                    percentage ="19"
                    direction = "down"
                />

                <SubCard
                    metric = "Total Views"
                    img = {Youtube}
                    alt = "Youtube icon"
                    count = "1407"
                    percentage ="12"
                    direction = "down"
                />
            </section>
        </section>
    </main>
  )
}

export default App
