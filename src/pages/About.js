import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/dia2.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
const Button = styled.button`
  font-size: 20px;
  padding: 25px 60px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  color: black;
  .button {
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};

    display: inline-block;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Shemonti Barua</span>
              </p>
              {/* <h2 className="about__heading">A Web developer</h2> */}
              <div className="about__info">
                <PText>
                  I am deeply passionate about Machine Learning, Deep Learning,
                  and Artificial Intelligence. I aspire to pursue advanced
                  studies in this field to expand my knowledge and make
                  meaningful contributions to society and the global community.
                  <br />
                  <br />
                  Furthermore, I started coding since I entered into
                  university.Coding is also an art for me. I love it and now I
                  have the opportunity to design along with the coding. I find
                  it really interesting and I enjoyed the process a lot.
                </PText>
              </div>
              <a href="https://drive.google.com/file/d/1XZE736MXsTQ_oV-25KM25TQhCucl-9Cb/view?usp=drive_link">
                <Button btnText="Download CV">Download CV</Button>
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Holy Cross School, Dhaka']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Holy Cross College ,Dhaka']}
              />
              <AboutInfoItem
                title="University"
                items={['Chittagong University of Engineering and Technology']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
