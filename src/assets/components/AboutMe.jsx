import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import './AboutMe.css';
import FarizCardImage from '../images/FarizCardPortfolio.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutText = "Fresh Software Engineering graduate with experience in full-stack, AI, and AR application development. Skilled in Swift, React.js, Node.js, and cloud platforms (AWS, Supabase, Firebase). Built Veritas AI, a serverless analytics platform integrating Google Gemini for automated insights. Developed ARpeggio, an AR piano learning app, and Lensa Kita, a mobile-first photo web app launched live to 100+ guests. Internship at Bike Bear delivering production websites for clients like Sunway College and Vitagen SG, demonstrating strong problem-solving and end-to-end delivery skills";
  
  const imageRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const image = imageRef.current;
    const section = sectionRef.current;
    const rightColumn = section.querySelector('.about-me-right');

    if (!image || !section || !rightColumn) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === section) {
        trigger.kill();
      }
    });

    // Start image below viewport and animate it up as scroll reveal completes
    gsap.set(image, { y: 200, opacity: 0 });

    // Image slide up animation
    const imageAnimation = gsap.to(image, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "center center",
        scrub: 1,
        id: "image-slide",
      }
    });

    // Wait for image to load and then set up sticky effect
    const setupStickyEffect = () => {
      // Refresh ScrollTrigger to get updated dimensions
      ScrollTrigger.refresh();
      
      // Sticky scroll effect for right column (text content)
      gsap.to(rightColumn, {
        y: () => {
          const imageHeight = image.offsetHeight;
          const rightHeight = rightColumn.offsetHeight;
          const maxMovement = Math.max(0, imageHeight - rightHeight);
          return maxMovement;
        },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top+=100 center",
          end: "bottom-=100 center",
          scrub: 1,
          pin: false,
          id: "sticky-text",
          onUpdate: self => {
            // Ensure we don't move beyond reasonable bounds
            const progress = self.progress;
            const imageHeight = image.offsetHeight;
            const rightHeight = rightColumn.offsetHeight;
            const maxMovement = Math.max(0, imageHeight - rightHeight);
            gsap.set(rightColumn, { y: progress * maxMovement });
          }
        }
      });
    };

    // Set up sticky effect after a small delay to ensure dimensions are calculated
    const timer = setTimeout(setupStickyEffect, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-me">
      <div className="about-me-container">
        <div className="about-me-left">
          <div ref={imageRef} className="about-me-image">
            <img src={FarizCardImage} alt="Fariz Aliff Naufal" />
          </div>
        </div>
        
        <div className="about-me-right">
          <h2 className="about-me-title">About Me</h2>
          <div className="about-me-content">
            <ScrollReveal
              containerClassName="about-scroll-reveal"
              textClassName="about-text"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={2}
              blurStrength={3}
              rotationEnd="center center"
              wordAnimationEnd="center+=200 center"
            >
              {aboutText}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 