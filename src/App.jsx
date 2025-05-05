import React, { useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tabs from "./components/Tabs/Tabs";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

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
    </>
  );
}

export default App;
