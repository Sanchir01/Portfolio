import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="Projects" className={styles.app}>
      <div className="container">
        <div className={styles.all}>
          <p>Portfolio</p>
          <h3>Каждый проект — это уникальная разработка 🧩</h3>
          <div className={styles.grid}>
            <div className={styles.block}>
              <div className={styles.img}>
                <a href="https://pizzas-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    width={530}
                    src="https://i.ibb.co/8NqRTQ5/pizzas-2-vercel-1.webp "
                    alt="pizza"
                  />
                </a>
              </div>
              <div className={styles.text}>
                <h2>Pizzas</h2>
                <p>
                  Сайт пиццерии - это веб приложение которое позволяет выбрать пиццу по цене размеру
                  и виду пицц
                </p>
                <div className={styles.stack}>
                  <p>react</p>
                  <p>SCSS</p>
                </div>
                <div className="flex gap-8 items-center">
                  <a
                    href="https://github.com/Sanchir01/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-3 items-center">
                      Code
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
                    </div>
                  </a>
                  <a href="https://pizzas-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-3 items-center">
                      Live Demo
                      <svg
                        height="42"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h48v48h-48z" fill="none" />
                        <path d="M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8v-3.8h-8c-5.52 0-10 4.48-10 10s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4h-16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8v3.8h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.text}>
                <h2>Pizzas</h2>
                <p>
                  Веб-сайт тренажерного зала — это исчерпывающий источник информации о фитнесе,
                  расписания занятий, вариантов членства и инструментов, помогающих пользователям
                  достигать своих целей в фитнесе.
                </p>
                <div className={styles.stack}>
                  <p>react</p>
                  <p>tailwind</p>
                </div>
                <div className="flex gap-8 items-center">
                  <a
                    href="https://github.com/Sanchir01/DangenMaster_Gym"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-3 items-center">
                      Code
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
                    </div>
                  </a>
                  <a
                    href="https://dangen-master-gym.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-3 items-center">
                      Live Demo
                      <svg
                        height="42"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h48v48h-48z" fill="none" />
                        <path d="M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8v-3.8h-8c-5.52 0-10 4.48-10 10s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4h-16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8v3.8h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.img}>
                <a href="https://dangen-master-gym.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    width={530}
                    src="https://stefantopalovicdev.vercel.app/static/media/gymate-home.52d00d03c15713c601c4.webp "
                    alt="pizza"
                  />
                </a>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.img}>
                <a href="https://super-magaz.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    width={530}
                    src="https://stefantopalovicdev.vercel.app/static/media/ecom.f10b3cdd799be85c19da.webp"
                    alt="pizza"
                  />
                </a>
              </div>
              <div className={styles.text}>
                <h2>Raof ecommerce</h2>
                <p>
                  Акцентируя внимание на простоте и чистоте дизайна, этот магазин уделяет
                  первостепенное внимание пользовательскому опыту, облегчая покупателям поиск и
                  покупку нужных товаров.
                </p>
                <div className={styles.stack}>
                  <p>react</p>
                  <p>SCSS</p>
                </div>
                <div className="flex gap-8 items-center">
                  <a
                    href="https://github.com/Sanchir01/SuperMagaz"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-3 items-center">
                      Code
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
                    </div>
                  </a>
                  <a href="https://super-magaz.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-3 items-center">
                      Live Demo
                      <svg
                        height="42"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h48v48h-48z" fill="none" />
                        <path d="M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8v-3.8h-8c-5.52 0-10 4.48-10 10s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4h-16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8v3.8h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
