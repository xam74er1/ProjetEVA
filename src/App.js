import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import {Timer} from "./Header/Header";
import {useState} from "react";
import Potion from "./Potion/Potion";

function App() {

    const [data, setData] = useState('start');

    function passData  (childdata) {
        setData(childdata);
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
                <Potion></Potion>
                )
                }

            </div>

        </div>
    );
}

export default App;
