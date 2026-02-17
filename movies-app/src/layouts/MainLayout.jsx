import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

export default function MainLayout() {
    const [searchQuery, setSearchQuery] = useState("")
    const isHome = useLocation().pathname=== "/"

    return (
        <div id={'main-layout'} className="min-h-screen bg-black flex flex-col">
            <MainHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} className={isHome ? "absolute top-0 left-0 w-full z-50": ""}/>
            <div className="flex-1">
              <Outlet context={{searchQuery, setSearchQuery}} />
            </div>
            <Footer />
        </div>
    )
}