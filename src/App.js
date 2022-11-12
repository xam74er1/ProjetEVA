import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import {Timer} from "./Header/Header";
import {useState} from "react";
import Potion from "./Potion/Potion";
import Page404 from "./404/404";
import PageTetris from "./tetris/pageTertis";
import Path from "./path/path";
import Quatre from "./quatre/quatre";
import Charade from "./charade/charade";
import End from "./end/end";

function App() {

    const [data, setData] = useState('start');

    function passData  (childdata) {
        childdata = childdata.toLowerCase()
        let allCode = ["potion","tetris","start","path","équilatéral","charade","end"]

        if(!allCode.includes(childdata)){
            setData("404")
        }else{
            setData(childdata);
        }


    }


    return (
        <div className="App">

            <div className="App-header">
                <Header/>
            </div>
            <div className="centerBox">
                {data === "start"&&(
                    <Main passData={passData}/>
                )
                }
                {data === "Potion"&&(
                    <Potion passData={passData}></Potion>
                )
                }

                {data=="tetris"&&(
                    <PageTetris passData={passData}/>
                )

                }

                {data === "404"&&(
                    <Page404 passData={passData}></Page404>
                )

                }
                {
                    data==="path"&&(
                        <Path passData={passData}/>
                    )
                }

                {
                    data==="équilatéral"&&(
                        <Quatre passData={passData}/>
                    )
                }

                {
                    data==="charade"&&(
                        <Charade passData={passData}/>
                    )
                }

                {
                    data==="end"&&(
                        <End passData={passData}/>
                    )
                }


            </div>

        </div>
    );
}

export default App;
