import Image from 'next/image';
import homeStyles from './page.module.scss';
import heroImg from '../public/images/2017-01-14 22.33.46.jpg';
import AnimatedText from './components/ui/AnimatedText';

const HomePage = () => {
  return (
    <section className={homeStyles.section}>
      {/* image container */}
      <div className={homeStyles.imgContainer}>
        <Image
          src={heroImg}
          alt='heroImage on homepage'
          className={homeStyles.imgContainer__img}
        />
      </div>
      {/* text container */}
      <div className={homeStyles.textContainer}>
        <AnimatedText text='Turning Vision into Reality with Code and Design' />
        <p className={homeStyles.textContainer__paragraph}>
          As a skilled fronend developer, I'm dedicated to help turning great
          ideas into innwative and functional web applications for the modern
          web.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
