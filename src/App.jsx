import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tabs from "./components/Tabs";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import TabbedContent from "./components/TabbedContent";

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
              <TabbedContent
                activeTab={activeTab}
                projects={<Projects activeTab={activeTab} />}
                resume={<Resume activeTab={activeTab} />}
                contact={<Contact activeTab={activeTab} />}
              />
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
