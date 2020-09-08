import React, { Component } from 'react';

import img from '../../assets/img/satellite.png'

import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: "rotate"
      },
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0.75,
        property: "opacity"
      },
      {
        startValue: 0,
        endValue: 100,
        property: "translateY"
      }
    ]
  },
];

document.addEventListener('DOMContentLoaded', ()=>{
  const cursos = document.querySelector('.cursos');
  let startAnimation = cursos.offsetTop;
  let endAnimation = cursos.clientHeight;

  parallaxData[0].start = startAnimation;
  parallaxData[0].end = startAnimation + endAnimation;
});

class Satellite extends Component {
  render() {
    return (
      <Plx
        className='test'
        parallaxData={ parallaxData }
      >
        <img src={img} alt="Satellite" />
      </Plx>
    );
  }
}

export default Satellite;
