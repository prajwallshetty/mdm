import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import './CarouselComponent.css';
import { Link } from 'react-router-dom';

function useTilt(animationDuration = '150ms') {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleEnterEvent = () => {
      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMoveEvent = (e) => {
      e.preventDefault();

      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = unify(e).clientX;
      state.mouseY = unify(e).clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px.toFixed(2));
      el.style.setProperty('--py', py.toFixed(2));
    };

    const handleEndEvent = () => {
      el.style.setProperty('--px', 0.5);
      el.style.setProperty('--py', 0.5);
      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener('mouseenter', handleEnterEvent);
    el.addEventListener('mousemove', handleMoveEvent);
    el.addEventListener('mouseleave', handleEndEvent);
    el.addEventListener('touchstart', handleEnterEvent);
    el.addEventListener('touchmove', handleMoveEvent);
    el.addEventListener('touchend', handleEndEvent);

    return () => {
      el.removeEventListener('mouseenter', handleEnterEvent);
      el.removeEventListener('mousemove', handleMoveEvent);
      el.removeEventListener('mouseleave', handleEndEvent);
      el.removeEventListener('touchstart', handleEnterEvent);
      el.removeEventListener('touchmove', handleMoveEvent);
      el.removeEventListener('touchend', handleEndEvent);
    };
  }, [animationDuration]);

  return ref;
}

const Slide = ({ image, title, subtitle, description, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <Link to='/events'>
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="slideContentInner">
          {title && (
            <h2 className="slideTitle" dir="auto">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="slideSubtitle" dir="auto">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="slideDescription" dir="auto">
              {description}
            </p>
          )}
        </div>
      </div>
      </Link>
      
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  offset: PropTypes.number.isRequired,
  isPageBackground: PropTypes.bool,
};

const Carousel = ({ slides, isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handlePrevSlide();
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [handlePrevSlide]);

  return (
    <div className="slide-div">
      <h2>FEATURED EVENTS</h2>
      <section className="slidesWrapper">
        <div className="slides">
        <button className="prevSlideBtn" onClick={handleNextSlide}>
          <i className="fas fa-chevron-left" />
        </button>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (slideIndex - i);

            if (typeof slide === 'string') {
              return (
                <Slide image={slide} offset={offset} isPageBackground={isPageBackground} key={i} />
              );
            } else {
              return (
                <Slide
                  image={slide.image}
                  title={slide.title}
                  subtitle={slide.subtitle}
                  description={slide.description}
                  offset={offset}
                  isPageBackground={isPageBackground}
                  key={i}
                />
              );
            }
          })}
          
          <button className="nextSlideBtn" onClick={handlePrevSlide}>
          <i className="fas fa-chevron-right" />
        </button>
        </div>
      </section>
    </div>




  );
};

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  isPageBackground: PropTypes.bool,
};

const slides = [
  {
    id: 1,
    title: 'Tactical Takeover',
    subtitle: '(BGMI)',
    image: '(BGMI).jpg',
  },
  {
    id: 2,
    title: 'Run Riot',
    subtitle: '(Gully Cricket)',
    image: '(Gully Cricket).jpg',
  },
  {
    id: 3,
    title: 'Sakura Square',
    subtitle: '(Ludo)',
    image: '(Ludo).jpg',
  },
  {
    id: 4,
    title: 'Yaksha Vismaya',
    subtitle: '(Yakshagana)',
    image: '(Yakshagana).jpg',
  },
  {
    id: 5,
    title: 'Hikari Matsuri',
    subtitle: '(Anime Quiz)',
    image: '(Anime Quiz).jpg',
  },
  {
    id: 6,
    title: 'Glow Hunt',
    subtitle: '(Treasure Hunt)',
    image: '(Treasure Hunt).jpg',
  },
  {
    id: 7,
    title: 'Eyes Of, Code On!',
    subtitle: '(Blind Coding)',
    image: '(Blind Coding).jpg',
  },
  {
    id: 8,
    title: 'Flaunt And Flow',
    subtitle: '(Fashion Walk)',
    image: '(Fashion Walk).jpg',
  },
];



const CarouselComponent = () => <Carousel slides={slides} isPageBackground />;

export default CarouselComponent;