import React, { useEffect, useRef } from 'react';
import './TeamComponent.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import abhishekImage from './images//abhishek.jpg';
import abdhullaImage from './images/shafaz.jpg';
import mukeshImage from './images/mukesh.jpg';
import adithyaImage from './images/adithya.jpg';
import fahizImage from './images/fahiz.jpg';
import shanifImage from './images/shanif.jpg';
import devdarshImage from './images/devdarsh.jpg';
import surajImage from './images/suraj.jpg';
import abhinImage from './images/ABHIN_M_4SH21CS007.jpg';
import rohanImage from './images/rohan.jpg';
import dhanyaImage from './images/dhanya.jpg';
import ishaImage from './images/isha.jpg';
import chiranjeeviImage from './images/chiranjeevi.jpg';
import suhanImage from './images/suhan.jpg';
import pareshImage from './images/paresh.jpg';
import appuImage from './images/appu.jpg';
import shreyasImage from './images/shreyas.jpg';
import sanjanaImage from './images/sanjana.jpg';
import yadukrishnaImage from './images/yadhukrishna.webp';

const teamMembers = {
  team: [
    {
      name: "Abhishek Kulal",
      role: "Website Lead",
      image: abhishekImage, // Updated image reference
      github: "https://github.com/Abhi15k",
      linkedin: "https://www.linkedin.com/in/abhishek-kulal-30b26a209/",
      isHead: true
    },
    {
      name: "Abdulla Shafaz K U",
      role: "Website Co-Lead",
      image: abdhullaImage, // Updated image reference
      github: "https://github.com/shafaz9539",
      linkedin: "https://www.linkedin.com/in/shafazabdulla/",
      isCoHead: true
    },
    {
      name: "Abhin M",
      role: "Frontend Lead",
      image: abhinImage,
      github: "https://github.com/abhinm7",
      linkedin: "https://www.linkedin.com/in/abhinm7/"
    },
    {
      name: "Dhanya Kamat",
      role: "Backend Developer",
      image: dhanyaImage,
      github: "",
      linkedin: "https://www.linkedin.com/in/dhanya-kamat-7739b122a/"
    },
    {
      name: "K Mukesh",
      role: "Frontend Developer",
      image: mukeshImage, // Updated image reference
      github: "https://github.com/kmukessh",
      linkedin: "https://www.linkedin.com/in/mukeshk25/"
    },
    {
      name: "Suraj M P",
      role: "UI/UX Developer",
      image: surajImage,
      github: "https://github.com/SURAJMP045",
      linkedin: "https://www.linkedin.com/in/surajmp045/"
    },
    {
      name: "Esha",
      role: "Frontend Developer",
      image: ishaImage,
      github: "",
      linkedin: "https://www.linkedin.com/in/esha-shetty-27b0a127a/"
    },
    {
      name: "Chiranjeevi",
      role: "Frontend Developer",
      image: chiranjeeviImage,
      github: "https://github.com/Chiru088",
      linkedin: "https://www.linkedin.com/in/chiranjeevi-s-a9209b27b/"
    },
    {
      name: "Appuraj",
      role: "Frontend Developer",
      image: appuImage,
      github: "https://github.com/Appuraj46",
      linkedin: "www.linkedin.com/in/appuraj-gs"
    },
    {
      name: "Shreyas",
      role: "UI/UX Developer",
      image: shreyasImage,
      github: "https://github.com/Shreyas445",
      linkedin: " https://in.linkedin.com/in/shreyas-k-s-39990a339 "
    }
  ]
};

const specialContributors = {
  team: [
    {
      name: "Mohammed Fahiz",
      role: "Media Team Lead & Design Consultant",
      image: fahizImage, // Updated image reference
      github: "https://github.com/fahiz508",
      linkedin: "https://www.linkedin.com/in/mohammed-fahiz-4033ba264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Adithya",
      role: "Graphic Designer & Creative Contributor",
      image: adithyaImage, // Updated image reference
      github: "https://github.com/adii-13",
      linkedin: "https://www.linkedin.com/in/h-s-adithya-chakravarthy-a33505144?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Shanif",
      role: "Development Support",
      image: shanifImage, // Updated image reference
      github: "",
      linkedin: "www.linkedin.com/in/shanif-nazeer"
    },
    {
      name: "Devadarsh",
      role: " Visual Designer",
      image: devdarshImage, // Updated image reference
      github: "",
      linkedin: ""
    },
    {
      name: "Yadhukrishna",
      role: " Visual Designer",
      image: yadukrishnaImage, // Updated image reference
      github: "",
      linkedin: ""
    },
    {
      name: "Sanjana",
      role: "Development Support",
      image: sanjanaImage,
      github: "",
      linkedin: ""
    },
    {
      name: "Paresh ",
      role: "Development Support",
      image: pareshImage,
      github: "",
      linkedin: ""
    },
    {
      name: "Suhan",
      role: "Development Support",
      image: suhanImage,
      github: "",
      linkedin: "https://www.linkedin.com/in/suhan-m-03a535339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    }
  ]
};

const HeadCard = () => {
  return (
    <div className="sambhram-head-card">
      <div className="sambhram-head-image">
        <img src={rohanImage} alt="Team Head" />
      </div>
      <div className="sambhram-head-info">
        <h2>Rohan Shetty</h2>
        <p className="sambhram-head-role">Sambhram Student Coordinator</p>
        <p className="sambhram-head-description">
          Leading our talented team with vision and expertise, driving innovation and excellence in every project.
        </p>
        <div className="sambhram-social-links sambhram-head-social">
          <a href="https://github.com/ROHAN-K-SHETTY" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rohan-k-shetty-4ba423258/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

const TeamErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Team Component Error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div className="error-container">Failed to load team section. Please refresh the page.</div>;
  }

  return children;
};

const useIntersectionObserver = (options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold || 0.2,
      rootMargin: options.rootMargin || '0px',
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return elementRef;
};


const TeamMemberCard = ({ member }) => {
  const cardRef = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px',
  });
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const cardClassName = `sambhram-team-member-card ${member.isHead ? 'head-member' : member.isCoHead ? 'co-head-member' : ''
    } ${imageLoaded ? 'loaded' : ''}`;

  return (
    <div className={cardClassName} ref={cardRef}>
      <div className="sambhram-image-container">
        <img
          src={member.image}
          alt={member.name}
          className="sambhram-member-image" // Updated className
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=Member';
            setImageLoaded(true);
          }}
          loading="lazy"
        />
        {!imageLoaded && <div className="image-placeholder" />}
      </div>
      <h3>{member.name}</h3>
      <p className="sambhram-member-role">{member.role}</p>
      {(member.isHead || member.isCoHead) && (
        <>
          <p className="leader-description">
            {member.isHead ?
              "Leading the team with technical excellence and innovation, driving our vision forward with expertise and dedication." :
              "Supporting the team's success through technical guidance and collaborative leadership, ensuring project excellence."
            }
          </p>
          {/* <div className="leader-stats">
              <span>Experience: {member.isHead ? "10+ years" : "8+ years"}</span>
              <span>Projects: {member.isHead ? "50+" : "40+"}</span>
            </div> */}
        </>
      )}
      <div className="sambhram-social-links">
        <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  const sectionRef = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <div className="sambhram-team-section" ref={sectionRef}>
      <h2 data-text={title}>{title}</h2>
      <div className="sambhram-team-members">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamComponent = () => {
  return (
    <TeamErrorBoundary>
      <div className="sambhram-team-container">
        <h1>Our Team</h1>
        <HeadCard />
        <TeamSection title="Website Team" members={teamMembers.team} />
        <TeamSection title="Special Contributors" members={specialContributors.team} />
      </div>
    </TeamErrorBoundary>
  );
};

export default React.memo(TeamComponent);