import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { DiPython } from 'react-icons/di';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './Servicesectionitem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Servicesection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<DiPython />}
            title="python"
            desc="I am a machine learner. I also create some projects regarding on this. "
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
