import styles from './About.module.scss';
const About = () => {
  return (
    <section id="About" className={styles.app}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgSlide}>
              <img
                className="rounded-xl max-w-[410px] max-h-[350px]"
                src="https://appleinsider.ru/wp-content/uploads/2022/01/apple_macbook_alps_2022-750x548.jpg"
                alt="mac"
              />
              <img
                className={styles.emoji}
                src="https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png"
                alt=""
              />
              <span>
                <img
                  src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                  alt="text-circle"
                />
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <h4>About</h4>
            <h3>Fhont-end разработчик</h3>
            <p>
              Будучи младшим фронтенд-разработчиком, я обладаю внушительным арсеналом навыков в
              области HTML, CSS, JavaScript, React, Tailwind и SCSS. Я преуспеваю в разработке и
              поддержке адаптивных веб-сайтов, которые обеспечивают удобство работы пользователей.
              Мой опыт заключается в создании динамичных, привлекательных интерфейсов путем
              написания чистого и оптимизированного кода и использования передовых инструментов и
              методов разработки. Я также являюсь командным игроком, который преуспевает в
              сотрудничестве с кросс-функциональными командами для создания выдающихся
              веб-приложений.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
