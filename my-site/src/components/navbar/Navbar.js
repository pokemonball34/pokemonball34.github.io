import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './navbar.css';
import { images } from '../../constants';

const Navbar = () => {
    
    const [toggle, setToggle] = useState(false);
    
    return (
        <nav className="App__navbar">
            <div className="App__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
        
            <ul className="App__navbar-dir">
                {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                 <li className="App__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                 </li>
                ))}
            </ul>

            <div className="App__navbar-menu">
                <HiMenuAlt4 onclick={() => setToggle(true)} />
                    
                {toggle && (
                    <motion.div
                      whileInView={{ x: [300, 0]}}
                      transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                         <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                         </li>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;