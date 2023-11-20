import React from 'react';
import styled from 'styled-components';
import Button from '../pages/Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    flex: 2;
    display: inline-block;
  }
  .section-title {
    text-align: centre;
  }
  .para {
    margin-top: 2rem;
    // margin-left: 0;
    text-align: centre;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 2rem;
    flex-direction: column;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            Highly motivated and skilled in Machine Learning algorithms and Data
            Analysis.My goal is to work collaboratively within a dynamic team,
            leveraging my knowledge and creativity to develop cutting-edge
            Machine Learning models and applications that have a meaningful
            impact on industries and society as a whole.Moreover, proficient in
            various programming languages such as HTML,CSS,Javascript, and React
            Js, Node Js. Committed to delivering high-quality results with
            little supervision.
          </PText>
          <div className="aboutSection__buttons">
            {/* <Button btnText="Works" btnLink="/projects" /> */}
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        {/* <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div> */}
      </div>
    </AboutSectionStyles>
  );
}
