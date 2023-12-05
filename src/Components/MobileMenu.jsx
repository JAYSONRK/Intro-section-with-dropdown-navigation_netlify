import React, { useState } from 'react';
import Close from '../images/icon-close-menu.svg';
import Todo from '../images/icon-todo.svg';
import Calender from '../images/icon-calendar.svg';
import Reminders from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';
import ArrowDown from '../images/icon-arrow-down.svg';
import ArrowUp from '../images/icon-arrow-up.svg';

const MobileMenu = (prop)  => {
    const [feature, setfeature] = useState(false);
    const [calender, setCalender] = useState(false);
    return (<>
        <div className='mobile-menu'>
            <div className="close-tag">
                <img onClick={prop.close} src={Close} alt="close"/>
            </div>
            <ul className="list">
                <li onClick={() => setfeature(!feature) }>Features&nbsp;&nbsp;{feature ?<img src= {ArrowUp} alt="arrowup"/> : <img src={ArrowDown} alt="arrowdown"/>}</li>
                   {feature && <ul className="features">
                        <li><img src={Todo} alt="todo"/>&nbsp;&nbsp;Todo List</li>
                        <li><img src={Calender} alt="calender"/>&nbsp;&nbsp;Calender</li>
                        <li><img src={Reminders} alt="reminder"/>&nbsp;&nbsp;Reminders</li>
                        <li><img src={Planning} alt="planning"/>&nbsp;&nbsp;Planning</li>
                   </ul>}
                <li onClick={() => setCalender(!calender)}>Company&nbsp;&nbsp;{calender ?<img src= {ArrowUp} alt="arrowup"/> : <img src={ArrowDown} alt="arrowdown"/>}</li>
                    {calender && <ul className="company">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>}
                <li>Careers</li>
                <li>About</li>
                <div className="mobile-buttons">
                    <div>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </ul>
        </div>
    </>)
}

export default MobileMenu;