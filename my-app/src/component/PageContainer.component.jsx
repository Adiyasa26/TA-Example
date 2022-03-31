import React from 'react';
import CardWrapper from './CardWrapper.component';

import './PageContainer.style.css';

import Img1 from '../image/peace-citizen-people-svgrepo-com.svg';
import Img2 from '../image/peace-cooperate-together-svgrepo-com.svg';
import Img3 from '../image/peace-political-politicians-svgrepo-com.svg';
import Img4 from '../image/peace-thinking-mindset-svgrepo-com.svg';

function PageContainer() {
  return (
    <div>
      <h1>Welcome to Ilyas' Website</h1>
      <h4>BUILD BY HTML CSS ONLY</h4>
      <div class="container__wrapper--flex flex-column">
        <div class="container__wrapper--flex flex-row">
          <CardWrapper
            className="card-wrapper"
            title="Internship"
            img={Img1}
            alt="Internship"
            description="Front-End Web Developen in Vidio.com"
          />
          <CardWrapper
            className="card-wrapper"
            title="Telecommunication Engineer's Student"
            img={Img2}
            alt="Student"
            description="Eighth semesters of Telecommunication Engineer's Student"
          />
        </div>
        <div class="container__wrapper--flex flex-row">
          <CardWrapper
            className="card-wrapper"
            title="Member of ITS Research"
            img={Img3}
            alt="Member of ITS Research"
            description="Web Developer in ITS Research"
          />
          <CardWrapper
            className="card-wrapper"
            title="Coordinator Assitant of MBC Laboratory"
            img={Img4}
            alt="CORDAS MBC"
            description="Coordinator Assitant at MBC Laboratory"
          />
        </div>
      </div>
    </div>
  );
}

export default PageContainer;
