import React from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';
import skillsData from '../assets/data/skills';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  justify-content: center;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .skills_contenct_wrapper {
    display: flex;
    padding: 20px;
    gap: 20px;
  }
  .innercontent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .textcls {
    display: inline-block;
    font-size: 19px;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    // padding: 5px 10px;
    border-bottom: 2px solid grey;
  }
  .prgressbr {
    padding: 50px 0px 0px 0px;
    p {
      font-size: 1.6rem;
      margin: 0 0 10px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
  @media only screen and (max-width: 768px) {
    .skills_contenct_wrapper {
      flex-direction: column;
    }
  }
`;

export default function Skills() {
  return (
    <>
      <AboutPageStyles>
        <div className="top-section">
          <div className="skills_contenct_wrapper">
            {skillsData.map((item, i) => (
              <div key={i} className="innercontent">
                <h3 className="textcls">{item.label}</h3>
                <div>
                  {item.data.map((skillItem, j) => (
                    <div className="prgressbr" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="grey"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
