import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Basabo,Dhaka,Bangladesh</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/%E0%A6%B9%E0%A6%95+%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A6%BF%E0%A6%A1%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2+%E0%A6%B8%E0%A7%8B%E0%A6%B8%E0%A6%BE%E0%A6%87%E0%A6%9F%E0%A6%BF/@23.7347745,90.4382843,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b83c5ae1d5df:0xdb27444271469558!8m2!3d23.7347745!4d90.4382844!16s%2Fg%2F11cly4sw2r?authuser=0&hl=bn"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
