import './Main.css';

function Main(passFct) {

    return (
        <div className="Main">
            <div className="text">
                Ce site te permtra de resoudre diversse enigmet ,
                il vas te demende de resoudre diffrenet problmet , parfois tu aurais besoin d'une code qui ce trouve dans la boite .
                Et parfois ce site te permtra davence en te donnanst la suite des enigume de la boite
            </div>

                <button className="btn" onClick={
                    ()=>  passFct.passData("Potion")
                }>start</button>


        </div>

    );
}

export default Main;
