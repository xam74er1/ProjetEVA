
import {useEffect} from "react";

function End(passFct) {

  // helper functions
  const PI2 = Math.PI * 2
  const random = (min, max) => Math.random() * (max - min + 1) + min | 0
  const timestamp = _ => new Date().getTime()

// container
  class Birthday {
    constructor() {
      this.resize()

      // create a lovely place to store the firework
      this.fireworks = []
      this.counter = 0

    }

    resize() {
      this.width = canvas.width = window.innerWidth
      let center = this.width / 2 | 0
      this.spawnA = center - center / 4 | 0
      this.spawnB = center + center / 4 | 0

      this.height = canvas.height = window.innerHeight
      this.spawnC = this.height * .1
      this.spawnD = this.height * .5

    }

    onClick(evt) {
      let x = evt.clientX || evt.touches && evt.touches[0].pageX
      let y = evt.clientY || evt.touches && evt.touches[0].pageY

      let count = random(3,5)
      for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
          random(this.spawnA, this.spawnB),
          this.height,
          x,
          y,
          random(0, 260),
          random(30, 110)))

      this.counter = -1

    }

    update(delta) {
      ctx.globalCompositeOperation = 'hard-light'
      ctx.fillStyle = `rgba(40, 44, 52,${ 7 * delta })`
      ctx.fillRect(0, 0, this.width, this.height)

      ctx.globalCompositeOperation = 'lighter'
      for (let firework of this.fireworks) firework.update(delta)

      // if enough time passed... create new new firework
      this.counter += delta * 3 // each second
      if (this.counter >= 1) {
        this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            random(0, this.width),
            random(this.spawnC, this.spawnD),
            random(0, 360),
            random(30, 110)))
        this.counter = 0
      }

      // remove the dead fireworks
      if (this.fireworks.length > 30) this.fireworks = this.fireworks.filter(firework => !firework.dead)

    }
  }

  class Firework {
    constructor(x, y, targetX, targetY, shade, offsprings) {
      this.dead = false
      this.offsprings = offsprings

      this.x = x
      this.y = y
      this.targetX = targetX
      this.targetY = targetY

      this.shade = shade
      this.history = []
    }
    update(delta) {
      if (this.dead) return

      let xDiff = this.targetX - this.x
      let yDiff = this.targetY - this.y
      if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
        this.x += xDiff * 2 * delta
        this.y += yDiff * 2 * delta

        this.history.push({
          x: this.x,
          y: this.y
        })

        if (this.history.length > 20) this.history.shift()

      } else {
        if (this.offsprings && !this.madeChilds) {

          let babies = this.offsprings / 2
          for (let i = 0; i < babies; i++) {
            let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
            let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

            birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

          }

        }
        this.madeChilds = true
        this.history.shift()
      }

      if (this.history.length === 0) this.dead = true
      else if (this.offsprings) {
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        }
      } else {
        ctx.beginPath()
        ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
        ctx.arc(this.x, this.y, 1, 0, PI2, false)
        ctx.fill()
      }

    }
  }

  useEffect(() => {
    // code to run after render goes here
    onLoad();
    run();
  }, []);

  var then = timestamp()
  var birthday = null;
  var ctx = null
  var canvas = null;

  var credis = [
    {
      name:"Max",
      text:"En principe sa marche"
    },{
      name:" artHurE",
      text:"46° 11' 35.711\" N 6° 14' 2.969\" E ?"
    }
    ,{
      name:"Constance",
      text:"Félicitations Eva, en réussissant toutes ces énigmes, tu as prouvé que tu étais prête a passer a ta 23éme année. Joyeux anniversaire !! "
    },
    {
      name:"Cyrielle",
      text:"Après autant d'énigme résolu tu peux maintenant et officiellement ajouter 1 bougie pour atteindre 23 ans  et fêter ton anniversaire"
    },
    {
      name:"Nicolas",
      text:"Oui"
    },
    {
      name:"Maxence",
      text:"J'avais une super idee de serrure"
    },
    {
      name:"Mathis",
      text:"GUTen Tag mein führerin 🤚 , Vive la Rekpublik de douvaine ! "
    }
  ]

  function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }



  function onLoad() {
    import("./end.css")
    canvas = document.getElementById('birthday')
    ctx = canvas.getContext('2d')
    birthday = new Birthday
    then = timestamp()



    window.onresize = () => birthday.resize()
    document.onclick = evt => birthday.onClick(evt)
    document.ontouchstart = evt => birthday.onClick(evt)
  }

  function run() {
    ;(function loop() {
      requestAnimationFrame(loop)

      let now = timestamp()
      let delta = now - then

      then = now
      birthday.update(delta / 1000)


    })()
  }

  function makeCredits(){
    credis.sort( compare );
    let allCredit = []
    for(let i =0;i<credis.length;i++){
      allCredit.push(
          <div className={"credis"}>
            <div className={"textCredit"}>{credis[i].text}</div>
            <div className={"name"}>- {credis[i].name} -</div>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
          </div>

      )
    }

    return <div className={"allCredit"}>
      {allCredit}
    </div>
  }

  return (
      <div className="end">
        <div className={"movie"}>
        <div className={"text"}>

            <h1>Happy Birthday</h1>
            {makeCredits()}
          </div>
        </div>

        <canvas id="birthday"></canvas>


      </div>

  );
}

export default End;
