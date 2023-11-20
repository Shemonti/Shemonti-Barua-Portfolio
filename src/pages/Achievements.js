import React from 'react';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import achievements from '../assets/data/achievements';

const AchievementsStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .timeline {
    display: flex;
    width: '100%';
    padding: 20px;
  }
  .conference {
    width: '50%';
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .confheading {
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0.5px;
    position: relative;
    text-transform: uppercase;
    padding: 5px 10px;
    border-bottom: 2px solid grey;
  }
  .confportion {
    padding: 0px 0px 30px 0px;
  }
  .confcomponents {
    // display: flex;
    align-items: center;
  }
  .conftitle {
    font-size: 16px;
  }
  .confdesc {
    font-size: 14px;
  }
  .projectButton {
    disply: inline-block;
    font-size: 1.5rem;
    text-decoration: underline;
    margin: 2rem 0;
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    .timeline {
      flex-direction: column;
    }

    .conference {
      width: '100%';
      gap: 2rem;
    }
  }
`;
export default function Achievements() {
  return (
    <AchievementsStyles>
      <div className="container">
        <div className="top-section">
          <div className="timeline">
            <div className="conference">
              <h3 className="confheading">Conferences and Trainings</h3>
              <VerticalTimeline layout="1-column" lineColor="grey">
                {achievements.Conferences_and_Training.map((item, i) => (
                  <VerticalTimelineElement
                    key={i}
                    className="confportion"
                    contentStyle={{
                      background: 'none',
                      color: 'grey',
                      border: '1.5px solid grey',
                    }}
                  >
                    <div className="confcomponents">
                      <h3 className="conftitle">{item.title}</h3>
                      <h4 className="confdesc">{item.desc}</h4>
                      <h3 className="dte">{item.date}</h3>
                      <a className="projectButton" href={item.link}>
                        Certification
                      </a>
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
            <div className="conference">
              <h3 className="confheading">Online Courses</h3>
              <VerticalTimeline layout="1-column" lineColor="grey">
                {achievements.Courses.map((item, i) => (
                  <VerticalTimelineElement
                    key={i}
                    className="confportion"
                    contentStyle={{
                      background: 'none',
                      color: 'grey',
                      border: '1.5px solid grey',
                    }}
                  >
                    <div className="confcomponents">
                      <h3 className="conftitle">{item.title}</h3>
                      <h4 className="confdesc">{item.desc}</h4>
                      <h3 className="dte">{item.date}</h3>
                      <a className="projectButton" href={item.link}>
                        Certification
                      </a>
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </AchievementsStyles>
  );
}
