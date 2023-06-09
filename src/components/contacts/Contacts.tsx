import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section id="Contacts" className={styles.app}>
      <div className="container">
        <div className={styles.title}>
          <h4>Contact</h4>
          <p>Напиши мне! 👇</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.box}>
            <span>
              <a
                title="vk"
                href="https://vk.com/id142407579"
                target="_blank"
                rel="noopener noreferrer">
                <svg
                  className="w-[25px]"
                  data-name="Layer 1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  fill="#147efb"
                  xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM392.363,342.9H359.878a23.41,23.41,0,0,1-18.318-8.8c-9.742-12.231-28.934-33.918-49.085-43.233a7.666,7.666,0,0,0-10.916,6.928v32.128A12.974,12.974,0,0,1,268.585,342.9H253.564c-19.534,0-61.6-11.891-95.119-60.719-28.56-41.6-41.291-73.84-48.715-99.98a10.3,10.3,0,0,1,9.922-13.093h32.862a15.226,15.226,0,0,1,14.6,10.861c6.111,20.439,21.939,64.53,49.917,86.486a5.788,5.788,0,0,0,9.371-4.54V210.449c0-10.171-4.408-20.347-11.288-28.3a7.878,7.878,0,0,1,5.946-13.046h50.666a9.838,9.838,0,0,1,9.838,9.837v69.325a5.468,5.468,0,0,0,8.636,4.456c9.3-6.62,17.265-16.4,24.591-27.393,9.22-13.828,20.471-36.686,26.115-48.549A13.457,13.457,0,0,1,353.06,169.1H388.9a8.788,8.788,0,0,1,7.873,12.7c-9.044,18.14-26.659,51.418-43.235,70.942a13.877,13.877,0,0,0,1.623,19.54c10.805,9.232,27.673,26.3,45.859,54.729A10.305,10.305,0,0,1,392.363,342.9Z" />
                </svg>
              </a>
            </span>
            <div className={styles.info}>
              <a href="https://vk.com/id142407579" target="_blank" rel="noopener noreferrer">
                {' '}
                <h5>ВК</h5>
                <p>Емгушов Санчир</p>
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <span>
              <a title="vk" href="https://t.me/Sanchir01" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-[29px]"
                  data-name="Layer 1"
                  id="Layer_1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <path
                    d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"
                    fill="#6563ff"
                  />
                </svg>
              </a>
            </span>
            <div className={styles.info}>
              <h5>Телеграм</h5>
              <a title="telega" href="https://t.me/Sanchir01" target="_blank" rel="noopener noreferrer">
                <p>Емгушов Санчир</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
