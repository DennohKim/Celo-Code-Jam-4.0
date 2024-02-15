import React from "react";
import SideBar from "../components/sideBar";
import HomeNavbar from "../components/HomeNavbar";
import MyFreelancerCard from "../components/myfreelancerCard";
import Navbar from "../components/navBar";

const MyFreeLancers = () => {
    return (
        <div className="min-h-full h-screen w-full overflow-y-auto">
            <div className="h-20 w-full">
                <Navbar />
            </div>

            {/* <SideBar /> */}
            <div className="flex    w-3/4 justify-center justify-self-center ml-10 ">
                <MyFreelancerCard />
            </div>
        </div>
    );
}

export default MyFreeLancers;
