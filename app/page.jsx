import Image from 'next/image';
import Link from 'next/link';
import homeStyles from './page.module.scss';
import heroImg from '../public/images/0_2.png';
// image created by me using Midjourney
import AnimatedText from './components/ui/AnimatedText';

export const metadata = {
  title: 'Portfolio Home Page',
  description: 'Portfolio Home Page',
};

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
        <div className={homeStyles.fade}></div>
      </div>

      {/* text container */}
      <div className={homeStyles.textContainer}>
        <AnimatedText text='Transforming Vision into Digital Reality.' />
        <p className={homeStyles.textContainer__paragraph}>
          Welcome! I&apos;m here to bridge the gap between your dreams and the
          digital realm. With a passion for frontend development, I have the
          skills and creativity to turn your vision into an engaging online
          experience. By meticulously crafting intuitive user interfaces and
          leveraging the latest web technologies, I ensure your digital reality
          exceeds expectations. Join me on this transformative journey and
          let&apos;s bring your ideas to life.
        </p>
        <div className={homeStyles.textContainer__cta}>
          <Link href='/CV_RH.pdf' target={'_blank'}>
            Resume
          </Link>
          <Link href='mailto:rune.husa78@gmail.com' target={'_blank'}>
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
