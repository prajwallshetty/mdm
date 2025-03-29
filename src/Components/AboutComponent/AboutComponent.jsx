import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import "./AboutComponent.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img7 from "./images/7.jpg"
import collage from "./images/collage.jpg"
import canteen from "./images/canteen.jpg"
import sambhram from "./images/sambhram.jpg"

const AboutComponent = () => {
  const prevEventImages = [
    { src: img1, alt: "Previous Event Highlights" },
    { src: img2, alt: "Previous Event Highlights" },
    { src: img3, alt: "Previous Event Highlights" },
    { src: img4, alt: "Previous Event Highlights" },
    { src: img5, alt: "Previous Event Highlights" },
    { src: img7, alt: "Previous Event Highlights" },
  ];

  const isMobile = window.innerWidth <= 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Changed to true so animation only happens once
    threshold: 0.1
  });

  React.useEffect(() => {
    // Start animation immediately on component mount
    controls.start("visible");
  }, [controls]);

  // Use a ref to store the animation frame
  const animationFrame = React.useRef(null);

  // Throttle the mouse move handler
  const handleMouseMove = (e, card) => {
    if (animationFrame.current) return;

    animationFrame.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      animationFrame.current = null;
    });
  };

  // Clear transform on mouse leave
  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div className="about-component">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={ref}
      >
        <motion.h1 variants={itemVariants}>
          About Our Institute
        </motion.h1>

        <motion.div
          className="about-card"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="card-content">
            <div className="card-text">
              <h2>Shree Devi Institute of Technology</h2>
              <p>Established in 2006, Kenjar, Mangaluru</p>
              <p>Affiliated to Visvesvaraya Technological University, Belagavi</p>
              <p>Recognized by All India Council for Technical Education (AICTE), New Delhi</p>
            </div>
            <motion.div
              className="card-image"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src={collage} alt="College Building" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about-description"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="description-content">
            <motion.div
              className="description-image"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src={canteen} alt="Campus Life" />
            </motion.div>
            <div className="description-text">
              <p>Our institution stands as a beacon of academic brilliance in the field of Engineering, Management and Computer applications. Established with a vision to nurture future innovators and problem solvers, the institute has consistently upheld its commitment to excellence since its inception.</p>

              <p>The meticulously designed curriculum integrates theoretical learning with hands-on experiences ensuring that graduates can apply their knowledge to real world challenges. The institute takes pride in its modern infrastructure with state-of-the-art laboratories.</p>

              <p>Shree Devi Institute of Technology is more than an academic institution, it is a dynamic ecosystem where passion meets purpose, and where the young minds are nurtured to lead, innovate and make a lasting impact on the world.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="sambhram-section"
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <h2>About Shree Devi Sambhram</h2>
          <div className="event-details">
            <span className="event-date">December 6th - 7th, 2024</span>
            <span className="venue">Shree Devi Institute of Technology, Airport Road, Kenjar, Mangaluru</span>
          </div>
          <div className="sambhram-content">
            <div className="sambhram-text">
              <div className="sambhram-description">
                <p>SHREE DEVI SAMBHRAM, A National Level Technical & Cultural Fest organized by Shree Devi Institute of Technology. This technical and cultural extravaganza gives an opportunity to collect and rekindle the strength, creativity, skills and all that will lead you to the zenith.</p>

                <p>The two days fest is meant to usher fresh ideas and redefine the dimensions of knowledge. Shree Devi Sambhram hosts a galaxy of events aimed at boosting the technical skills inherited in youth.</p>

                <p>With a plethora of technical and cultural events waiting to be explored and unravelled, this is the ultimate place to rediscover oneself. This forms the heart and soul of the festival and seeks to provide a common platform for the best brains to interact and nurture their ideas and transforming them into reality.</p>

                <p className="highlight">Our aim is simple - Explore and Exhibit the talents. We aim to help students to come out as pioneers with the social and professional values which are vital for technical excellence.</p>
              </div>
            </div>
            <motion.div
              className="sambhram-image"
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src={sambhram} alt="Sambhram Event" />
            </motion.div>
          </div>
          <motion.div
            className="previous-events"
            variants={itemVariants}
          >
            <h3>Previous Event Highlights</h3>
            <div className="event-gallery">
              {prevEventImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                  <div className="gallery-image-wrapper">
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className="image-overlay">
                      <h4>{image.alt}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutComponent