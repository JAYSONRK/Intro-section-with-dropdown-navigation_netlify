import React from "react";
import Databiz from '../images/client-databiz.svg';
import Audiopile from '../images/client-audiophile.svg';
import Meet from '../images/client-meet.svg';
import Maker from '../images/client-maker.svg';

const  Article = () => {
    return (<>
        <article className="info">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            <footer>
                <img src={Databiz}  alt="representaion"/>
                <img src={Audiopile}  alt="representaion"/>
                <img src={Meet}  alt="representaion"/>
                <img src={Maker}  alt="representaion"/>
            </footer>
        </article>
    </>)
}

export default Article;