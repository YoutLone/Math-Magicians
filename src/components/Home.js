import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { TiSocialLinkedin } from 'react-icons/ti';
import { VscTwitter } from 'react-icons/vsc';
import './Home.css';

const Home = () => (
  <div className="page">
    <h3 className="welcome">Welcome to our page!</h3>
    <p className="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
      quidem? Doloribus doloremque id, magni unde quibusdam omnis provident
      debitis. Incidunt deserunt consequatur, numquam placeat asperiores id

      ipsum? Labore atque velit error distinctio nam iusto
      voluptatem! At, hic. Temporibus consectetur, debitis eum vero,
      reiciendis corporis, sapiente iusto magnam ullam voluptates ea! ipsum?
      Labore atque velit error distinctio
    </p>
    <span className="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      vero recusandae ratione magni corporis odio consequatur eos. Illum, ut
      perferendis. ipsum? Labore atque velit error distinctio nam iusto
      voluptatem! At, hic. Temporibus consectetur, debitis eum vero,
      reiciendis corporis, sapiente iusto magnam ullam voluptates ea!
    </span>
    <div className="middle">
      <ul className="social">
        <li>
          <a
            href="https://github.com/YoutLone"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/than-myo-htet-618b2524b"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <TiSocialLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ThanMyoHte64860"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <VscTwitter />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
