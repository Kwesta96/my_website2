import React from 'react'
import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export const Intro = () => {

    const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['Web Developer', 'Web Designer', 'UX Designer'],
      //typeSpeed:  100,
      backDelay:  1500,
      backSpeed: 60,
    });
  }, []);

    return (
        <div className="intro">
            <div className="introContent">
                <div className="left">
                    <div className="imgContainer">
                        <img src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='img' />
                    </div>
                </div>
                <div className="right">
                    <div className="textContainer">
                        <h1>~ PK OWUSU-ANSAH ~<br /><span ref={textRef}></span></h1>
                        <p>I'm a web developer & designer focused on crafting clean & user‑friendly experiences, I love building excellent software that solves real-world problems.</p>
                        <h3 className="button">CHECK OUT MY WORK</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
