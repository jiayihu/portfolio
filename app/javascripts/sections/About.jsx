import React from 'react';
import Waypoint from 'Waypoint';
import PubSub from 'pubsub-js';
import theaterJS from 'theaterjs';

function inViewHandler(direction, PubSub, theater) {
  PubSub.publish('bg-change', {
    direction,
    color: 'white',
  });
  // theater.play();
}

export default class About extends React.Component {
  componentDidMount() {
    const theater = theaterJS({
      autoplay: false,
    });

    theater
      .addActor('me', 1, '.me')
      .addScene(2000)
      .addScene('me:Student of Computer Science')
      .addScene(3000)
      .addScene('me:Addicted book reader')
      .addScene(3000)
      .addScene('me:Tardis traveller')
      .addScene(theater.replay);

    const waypoint = new Waypoint({
      element: this.section,
      handler: (direction) => inViewHandler(direction, PubSub, theater),
      offset: '50%',
    });
  }

  render() {
    return (
      <section
        className="about container"
        ref={ (c) => (this.section = c) }
      >
        <div className="about-general col-sm-4">
          <p className="greeting">CIAO,</p>
          <p>I’m Jiayi <small>[dʒʌɪ]</small>, 20y/o passionate <strong>front-end developer</strong>
          &nbsp;and <span className="me"></span> based in Padua, Italy.</p>
          <p>I’m currently eagerly looking for a project involving <em>web applications</em> to sharpen my skills.</p>
        </div>
        <div className="about-detailed col-sm-8">
          <div className="col-lg-6">
            <p>
            My love for web development started 2 years ago, when I signed a contract for endless
            late-night codes and coffees with the two notorious words: <em>“Hello World”</em>. But it took me
            some more time to understand why I enjoy Javascript so much.</p>
            <blockquote>
              The wand chooses the wizard, Mr. Potter.
            </blockquote>
            <p>
            <img className="icon icon--speed" src="/images/speed.svg" alt="Javascript speed" />
            Javascript ecosystem and its fast pace reflect my continous seek of innovation and
            improvement. It’s still young compared to other languages but it’s moving rapid with a
            great will to make the difference and I feel exactly the same.</p>
          </div>
          <div className="col-lg-6">
            <p>Despite my excitement for new and fancy technologies, I rationally and carefully choose the
            frameworks, techniques and tools for my Agile workflow, picking the best compromise in
            terms of stability, innovation and power.</p>
            <p>
            <img className="icon icon--ux" src="/images/ux.svg" alt="User Interface and Experience" />
            In addition to my fondness for web development, I keep a sincere interest for UI
            Design & User Experience since the ability to think like users do and build usable
            interfaces is the key to make products meet people needs.</p>
            <p>
            <img className="icon" src="/images/connect.svg" alt="Connect to developers and designers" />
            I’m currently aiming for projects involving web application built with vanilla JS or
            ReactJS. <strong>I would also be very glad to collaborate/connect</strong> with some professional
            developer/designer while completing my studies at the University.</p>
          </div>
        </div>
      </section>
    );
  }
}
