import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews";
import Nabvar from "../components/Nabvar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
            <LatestNews/>
        </section>
        <nav className="w-11/12 mx-auto my-3">
            <Nabvar/>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">

        <aside className="col-span-3">
          <LeftAside/>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
       <aside className="col-span-3"> 
        <RightAside/>
       </aside>
      </main>
    </div>
  );
};

export default MainLayout;
