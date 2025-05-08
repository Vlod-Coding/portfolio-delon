import React, { useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tabs from "./components/Tabs/Tabs";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <TopBar />
      <main>
        <article>
          <Hero />
          <div className="article">
            <About />
            <div>
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <Loader />
      <Analytics />
    </>
  );
}

export default App;
