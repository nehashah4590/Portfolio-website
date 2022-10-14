import React from 'react'
import img1 from './images/img1.jpg';
import './Home.css';
function Home() {
    return (
        <>
            <div className="main">
                <div className='item1'> </div>
                <div className='item2'>
                    <img src={img1} alt="" /></div>
                <div className='item3'>
                    <div className='intro'>
                        <h1>Neha </h1>
                        <h1> Shah</h1>
                        <p>Frontend Developer / Graphic Designer</p>
                        <p>ns457989@gmail.com</p>
                        <p>Dharan,Nepal</p>
                    </div></div>
            </div>


            <div className='resume'>
                <h2 className='center'>Resume</h2>
                <p>I am a Frontend Developer with a good grasp in HTML, CSS, javaScript and React. I can provide high impact web solution for diverse industry organizations . Skilled in designing, developing and testing multiple web-based applications.
                </p>
            </div>
            <div className='education'>
                <h2>EDUCATION</h2>

                <div> 
                    <p className='heading'>Bachelor of Engineering (B.E), Computer Science & Engineering</p>
                <p> Purwanchal Engineering Campus</p>
                <p> 2019 – 2024</p>
                </div>
               
               <div>
               <p  className='heading'>High School, Science</p>
                 <p>Vishwa Adarsha College , Itahari.
                    Year of completion: 2019</p>
                   <p> CGPA: 3.48/4</p>
               </div>

               <div >
               <p  className='heading'>     Secondary (X)</p>
                <p>    Namuna Samudiyik English Boarding School (NEB board)</p>
                  <p>  Year of completion: 2017
                    CGPA: 3.5/4       </p>
               </div>
             
            </div>

            <div className='quote'>
                <p className='bold'>If You Say You Can Or You Can't You Are Right Either Way.
                </p>
                <p>- Henry Ford</p>
            </div>


        </>
    )
}

export default Home;
