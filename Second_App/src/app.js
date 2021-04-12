import React from "react";
import Header from "./components/header/header";
import BorderHeader from "./components/header/border_hedra";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/Footer/footer";

const App = () =>{
    return(
        <div className="generalDiv">
            <Header />
            <BorderHeader />
            <MainContent />
            <Footer  />
        </div>
    )
}

export default App