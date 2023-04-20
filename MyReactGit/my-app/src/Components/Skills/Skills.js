import "./Skills.css"
import { useInView } from 'react-intersection-observer';
export default function Skills() {
    
    const { ref: skillMainRef, inView : sMainIsVisible } = useInView();
    return (
        
            <div  ref={skillMainRef} className={`skills-main ${sMainIsVisible ? 'skills-anim' : ''}`} id="skills-main">

                <div className="project-1">
                    <div className="p1">
                        <img className="image" alt="" src="https://images.unsplash.com/photo-1524602997322-c1900e093d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"></img>
                        <span>Project 1</span>
                    </div>
                </div>

                <div className="project-2">
                    <div className="p2">
                        <img className="image" alt="" src="https://images.unsplash.com/photo-1524602997322-c1900e093d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"></img>
                        <span>Project 2</span>
                    </div>
                </div>

                <div className="project-3">
                    <div className="p3">
                        <img className="image" alt="" src="https://images.unsplash.com/photo-1524602997322-c1900e093d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"></img>
                        <span>Project 3</span>
                    </div>
                </div>
            </div>
       
    )
}