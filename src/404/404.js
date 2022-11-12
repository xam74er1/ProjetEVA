import "./404.css"

function Page404(passFct) {
    console.log("error in the 404")
    return (
        <div className={"Main"}>

            <h1 className={"text-focus-in"}> Ce que tu cherches ne se trouve pas ICI !!<br/> Domage ! </h1>

            <img src={"bacor.jpg"} className={"puff-in-center"}/>

            <button className="btn" onClick={
                ()=>  passFct.passData("start")
            }>

                Retour</button>

        </div>
    )
}

export default Page404;

