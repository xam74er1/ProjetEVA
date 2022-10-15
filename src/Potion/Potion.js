import "./potion.css"
import {useState} from "react";

function Potion(passFct){

    const [display, setDisplay] = useState(true);
    const [displaySolution, setDisplaySolution] = useState(false);
    const [count, setCount] = useState(0);
    const [MAX_CLCK, setMAXCLCK] = useState(5);

    function clickPotion(i){

        if(i===4){
            setDisplaySolution(true)
        }else{
            setDisplay(false)
            setCount(0);
            setMAXCLCK(MAX_CLCK*2)
        }
    }


    function returnButton(){
        let potions =[]
        for(let i = 1; i <=7; i++){
            potions.push(

                <button className={"Potion-button"} onClick={()=>clickPotion(i)} key={i}>
                    <img className={"Potion-image"} src={"./potion"+i+".png"}  alt={"Potion"}/>
                </button>
            )
        }
        return (
            <div className={"potion"}>
                {potions}
            </div>
        )
    }


    function enoncer(){
        return (
            <div>
                <h2> Pour avancer tu devra cliquer sur la bonne potion qui te ferra passe a l'enigme . </h2>,
                {returnButton()}
                <div className={"Enoncer"}>

                    <h2 className={"Enonce"}>Enoncer</h2>
                    <ul className={"list-disc"}>
                        <li>Il y a trois fioles de poison, deux fioles de vin d’ortie, une fiole permettant d’avancer et une fiole permettant de reculer.</li>

                        <li>Immédiatement à gauche de chacune des deux fioles de vin se trouve une fiole de poison.</li>

                        <li>Les fioles 1 et 7 ont des contenus différents, ni l’une ni l’autre n’est la fiole qui permet d’avancer.</li>

                        <li>Ni la fiole la plus grande (fiole 6) ni la plus petite (fiole 3) ne contient du poison.</li>

                        <li>Les contenus des fioles 2 et 6 sont identiques.</li>
                    </ul>
                </div>
            </div>
        )
    }

    function clickCookier(){
        setCount(count+1)
        if(count>=MAX_CLCK-1){
            setDisplay(true)
        }
    }

    function clicker(){

        return(
            <div class={"Clicker"}>
                <h1> Mauvaise Potion ! </h1>
                <p> Pour retente il vas faloire manger des cookie ! </p>

                <button className={"clicker-button"} onClick={()=>clickCookier()}>
                    <img src={"cookie.png"}/>
                    Clique pour manger encore {MAX_CLCK-count} cookie !
                </button>
            </div>
        )

    }

    return (
        <div>
            <div className={"Enigme"}>

                <svg viewBox="0 0 100 20" className={"Enigme-svg"}>
                    <defs>
                        <linearGradient id="gradient">
                            <start color="#FFF"/>
                            <stop color="#0FF"/>
                        </linearGradient>
                        <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
                            <path id="wavePath"
                                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                                  mask="url(#mask)" fill="url(#gradient)">
                                <animateTransform
                                    attributeName="transform"
                                    begin="0s"
                                    dur="1.5s"
                                    type="translate"
                                    from="0,0"
                                    to="40,0"
                                    repeatCount="indefinite"/>
                            </path>
                        </pattern>
                    </defs>
                    <text text-anchor="middle" x="50" y="15" font-size="17" fill="red" fill-opacity="0.1">LES POTION
                    </text>
                    <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)" fill-opacity="1">LES POTION
                    </text>
                </svg>
                {display && !displaySolution &&(
                    enoncer()
                )}
                {!display && !displaySolution &&(
                    clicker()
                )}

                {displaySolution &&(
                    <div className={"Solution"}>
                        <h1> Bravos tu a trouve la bonne potion !! </h1>
                        <p>Le code est 123 </p>
                        <button className="btn" onClick={
                            ()=>  passFct.passData("start")
                        }>start</button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Potion;