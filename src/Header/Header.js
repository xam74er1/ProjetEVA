import React from 'react'
import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    //choose a random ellement in the list this.spans.
      let ellem = this.spans[Math.floor(Math.random() * this.spans.length)]
      ellem.classList.add('active');
  }



  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 5_000);

        this.spans = document.querySelectorAll('.word span');

this.spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});

	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
return (
        <div className="Header">
            <header className="App-header">
                <h1 class="tracking-in-expand-fwd-top">

                    <div className="word">
                        <span className="space">Bienvenue </span>
                        <span className="space">dans</span>
                        <span>l'eni</span>
                        <span className="space">gme</span>
                        <span>E.V.A</span>
                        <span></span>
                    </div>

                </h1>
            </header>
        </div>
    );
  }
}

