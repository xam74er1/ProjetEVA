import "./path.css"
import {useEffect, useRef, useState} from "react";



function Path(passFct) {

    var dead = false;
    var start = false;
    var finish = false;
    //use state for display
    var [display, setDisplay] = useState(false);
    var [win, setWin] = useState(false);


    useEffect(() => {

//When the mouse move
        document.addEventListener("mousemove", (e) => {
            //get the class of the div for the ellement under the mouse
            let className = e.target.className

            //if className contain container
            if (className.includes("container")) {
                if(!dead&&start){
                    console.log("dead")
                    displayError()
                    dead = true
                    start = false
                }
            }else if(className.includes("finish")){
                if(start && !dead){
                    console.log("FINISH",win)
                    finish = true
                    setWin(true)
                }
            }else if(className.includes("start")){
                if(!start){
                    console.log("start")
                    start = true
                    dead = false
                }

            }
        });
    }, []);

    function displayError(){
        setDisplay(true)
        var audio = new Audio('Warden_emerge.ogg');
        audio.play();
    }

    function genereateImage(){
        //generte random number
        let rdm = Math.ceil(Math.random() * 3)
        let name = "monster"+rdm+".png"
        //return image with name
        return <img src={name} alt="monster" className="monster"/>
    }

    function hide(){
        setDisplay(false)

    }

    return (
        <div>
            <p>Pour revenir ici tu peux utiliser le code "path" </p>
            Tu dois suivre le chemin avec ta souris jusqu'à la ligne d'arrivé , mais sans depasser bonne chance !!

            {win&&(
                <div className={"fullSize scale-in-center"}>
                    <p> Bravo tu as trouve<br/> le code est 538 </p>
                    <button className="btn" onClick={
                        ()=>  passFct.passData("start")
                    }>Continuer</button>
                </div>
            )

            }
            {!win&&(
                <div className="container rotate-center">
                    <div className="path ok"></div>
                    <div className="path1 ok"></div>
                    <div className="path2 ok"></div>
                    <div className="path3 ok"></div>
                    <div className="path4 ok"></div>
                    <div className="yellowbg ok start"></div>
                    <div className="yellowbg2 ok start"></div>
                    <div className="yellowbg3 ok start"></div>
                    <div className="bleubg ok"></div>
                    <div className="bleubg1 ok"></div>
                    <div className="bleubg2 ok"></div>
                    <div className="bleubg3 ok"></div>
                    <div className="redbg ok"></div>
                    <div className="redbg1 ok"></div>
                    <div className="redbg2 ok"></div>
                    <div className="greenbg ok"></div>
                    <div className="greenbg1 ok"></div>
                    <div className="greenbg2 ok"></div>
                    <div className="greenbg3 ok"></div>
                    <div className="bleubg4 ok"></div>
                    <div className="bleubg5 ok"></div>
                    <div className="bleubg6 ok"></div>
                    <div className="bleubg7 ok"></div>
                    <div className="redbg4 ok"></div>
                    <div className="redbg5 ok"></div>
                    <div className="finish ok"></div>
                </div>
            )}
            {display && (
                <div className={"fullSize scale-in-center"}>
                    <h1> Tu as depasse !!! </h1>
                    {genereateImage()}
                    <div className={"btnBox"}>
                        <button onClick={() => hide()} className={"btn"}>Retenter</button>
                    </div>

                </div>
            )
            }





        </div>
    )
}
export default Path;