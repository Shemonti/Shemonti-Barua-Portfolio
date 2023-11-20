import React from 'react';

import Herosection from '../pages/Herosection';
import Aboutsection from './Aboutsection';
import Servicesection from './Servicesection';
import Projectsection from './Projectsection';
import Skillsection from './Skillsection';

export default function Center() {
  return (
    <div>
      <Herosection />
      <Aboutsection />
      <Servicesection />
      <Projectsection />
      <Skillsection />
    </div>
  );
}
