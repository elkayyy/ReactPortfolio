import './Intro.css';
import { useState } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiFirebase } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { GiGiftOfKnowledge } from 'react-icons/gi'

export default function Intro() {
    const [photosVisible, setPhotosVisible] = useState(true);

    const togglePhotos = () => {
        setPhotosVisible(!photosVisible);
    
    };
    return (
        <>
        <div className='intro'>

            <div className='intro-box2'>
                <p>Hello and welcome! My name is, </p>
                <h1>Lazaros Kogioumtzidis </h1>
                <h3>As a computer scientist, I have a strong foundation in programming,
                    algorithms, and software design.
                    With a passion for creating visually
                    appealing and user-friendly web interfaces,
                    I have focused my efforts on frontend development.</h3>
            </div>

            <button className='photo-button' onClick={togglePhotos}> <BsArrowBarRight /></button>
            {photosVisible && (
                <div className='photos-container'>
                    <div className='intro-box1'></div>
                    <div className='intro-box1-1'></div>
                    <div className='intro-box1-2'></div>
                </div>
            )}

        </div>

        <div className='skills'> 
        <div className='skill-box'>
        <h1 className='Skill-title'>Skills</h1>
            <div className='item-1'><FaReact/> <span>React framework</span></div>
            <div className='item-2'><DiJavascript1/> <span>Javascript</span></div>
            <div className='item-3'><SiFirebase/> <span>Firebase database</span></div>
            <div className='item-4'><GrMysql/> <span>MySql database</span></div>
            <div className='item-5'><GiGiftOfKnowledge/> <span>Computer science concepts</span></div>
        </div>

        </div>

        </>

    )

}