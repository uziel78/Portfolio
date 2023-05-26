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
      </div>
      {/* text container */}
      <div className={homeStyles.textContainer}>
        <AnimatedText text='Turning Vision into Reality with Code and Design.' />
        <p className={homeStyles.textContainer__paragraph}>
          As a skilled fronend developer, I'm dedicated to help turning great
          ideas into innowative and functional web applications for the modern
          web.
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
