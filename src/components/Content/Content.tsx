import React from 'react';
import styles from './Contact.module.scss';

const Content = () => {
  const img:string[] = [
    'https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg',
    'https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg',
    'https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg',
    'https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg',
    'https://stefantopalovicdev.vercel.app/static/media/tailwind.79614a5f61617ba49a0891494521226b.svg',
    'https://stefantopalovicdev.vercel.app/static/media/scss.67cd0525916c4cdea4eb3abd8ae11137.svg',
  ];
  return (
    <section id="Home" className={styles.app}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.left}>
              <div className="">
                <h1>Frontend React Developer</h1>
                <img
                  width={70}
                  height={90}
                  src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png"
                  alt="hand"
                />
              </div>
              <p className="text-">
                Привет, Я Емгушов Санчир. Фронтенд разработчик со стажем работы 2 года
              </p>
              <span className="flex gap-2">
                <a
                  className="hover:"
                  aria-label="github"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sanchir01">
                  <svg
                    height="30px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg">
                    <style type="text/css"></style>
                    <g>
                      <path d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z" />
                    </g>
                  </svg>
                </a>
                <a
                  aria-label="github"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://vk.com/id142407579">
                  <svg
                    className="w-[30px]"
                    data-name="Layer 1"
                    id="Layer_1"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM392.363,342.9H359.878a23.41,23.41,0,0,1-18.318-8.8c-9.742-12.231-28.934-33.918-49.085-43.233a7.666,7.666,0,0,0-10.916,6.928v32.128A12.974,12.974,0,0,1,268.585,342.9H253.564c-19.534,0-61.6-11.891-95.119-60.719-28.56-41.6-41.291-73.84-48.715-99.98a10.3,10.3,0,0,1,9.922-13.093h32.862a15.226,15.226,0,0,1,14.6,10.861c6.111,20.439,21.939,64.53,49.917,86.486a5.788,5.788,0,0,0,9.371-4.54V210.449c0-10.171-4.408-20.347-11.288-28.3a7.878,7.878,0,0,1,5.946-13.046h50.666a9.838,9.838,0,0,1,9.838,9.837v69.325a5.468,5.468,0,0,0,8.636,4.456c9.3-6.62,17.265-16.4,24.591-27.393,9.22-13.828,20.471-36.686,26.115-48.549A13.457,13.457,0,0,1,353.06,169.1H388.9a8.788,8.788,0,0,1,7.873,12.7c-9.044,18.14-26.659,51.418-43.235,70.942a13.877,13.877,0,0,0,1.623,19.54c10.805,9.232,27.673,26.3,45.859,54.729A10.305,10.305,0,0,1,392.363,342.9Z" />
                  </svg>
                </a>
              </span>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.skills}>
            <p>Стак технолигий</p>
            <div className={styles.logos}>
              <ul>
                {
                  img.map(logos => (
                    <li><img src={logos} alt={logos} /></li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
