import React from 'react';
import Image from 'next/image'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main>
          
       
        
          Hello,
       
          I am Jitesh.
          &nbsp; &nbsp;
          <Image  
        
        src='/images/circle-cropped(1).png'
        width={200}
        height={200}
        border-radius ={500}

        />
        </SectionTitle>

        <SectionText>
        A Guy, who love's to write code but he is more passionate to join Army!😉
        </SectionText>
        <a href="#about"><Button> <font color="white">Learn More</font></Button></a> 
      </LeftSection>
    </Section>
  </>
);

export default Hero;