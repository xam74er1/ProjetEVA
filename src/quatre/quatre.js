import '../Main/Main.css';
import './quatre.css'
import {useState} from "react";

function Quatre(passFct) {
    const [solution, setSolution] = useState(false);
    function validateCode(){

        let text = document.getElementById("code").value;
        if(text=="4"){
            setSolution(true);

        }else{
            alert("Code incorrect")
        }
    }

    function backStart(){
        passFct.passData("start")
    }

    return (
        <div className="Main">

            <div className={"code"}>

                <p> Entre le nombre corespondant </p>

                <div className={"input-name"}>

                    <label htmlFor="search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your
                        Email</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="code"
                               className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Entre le code" required></input>
                        <button type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                                onClick={()=>validateCode()}>Valider
                        </button>

                    </div>


                </div>
            </div>
            {solution&&(
                <div className={"solution"}>
                    <p> Bravo tu as trouve !</p>
                    <p> Le code est 982 </p>

                    <button type="submit"
                            className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                            onClick={()=>backStart()}>Retour a la page principal
                    </button>
                </div>
            )

            }
        </div>

    );
}

export default Quatre;
