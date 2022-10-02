import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import {Timer} from "./Header/Header";
import {useState} from "react";
import Potion from "./Potion/Potion";
import Page404 from "./404/404";
import PageTetris from "./tetris/pageTertis";

function App() {

    const [data, setData] = useState('start');

    function passData  (childdata) {

        let allCode = ["Potion","tetris","start"]

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


            </div>

        </div>
    );
}

export default App;
