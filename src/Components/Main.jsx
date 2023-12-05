import {React, useState} from "react";
import Header from "./Header";
import Picture from "./Picture";
import Article from "./Article";
import MobileMenu from "./MobileMenu";

const Main = () => {
    const [toggle, setToggle] = useState(false);
    const toggleOn = () => {
        setToggle(!toggle);
    }
    return (<>
        <main className="card">
            <Header
                open ={toggleOn}
            />
            <div className="main-section">
                <Picture/>
                <Article/>
            </div>
            {toggle && <MobileMenu  close= {toggleOn}/>}
        </main>
    </>)
}

export default Main;