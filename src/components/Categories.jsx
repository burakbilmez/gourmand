import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GiCook } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
function Categories() {
  return (


 

    <Splide options={{
      gap: "0.5rem",
      pagination: false,
      arrows: false,
      drag: "free",
    autoHeight: true,
    autoWidth: true,
    direction: 'ltr',
      wheelSleep: 75,
    wheel: true,
    }}
    >

      <SplideSlide
      >
        <Categoryitem to={'/'}>
          <GiCook color="#FF7200" />
          <h4>Explore</h4>
        </Categoryitem>
      </SplideSlide>



      <SplideSlide>
        <Categoryitem to={'/cuisine/French'}>
          <ReactCountryFlag countryCode="FR" />
          <h4>French</h4>
        </Categoryitem>
      </SplideSlide>






      <SplideSlide>
        <Categoryitem to={'/cuisine/Italian'}>
          <ReactCountryFlag countryCode="IT" />
          <h4>Italian</h4>
        </Categoryitem>
      </SplideSlide>



      <SplideSlide>
        <Categoryitem to={'/cuisine/Spanish'}>
          <ReactCountryFlag countryCode="ES" />
          <h4>Spanish</h4>
        </Categoryitem>
      </SplideSlide>

      <SplideSlide>
        <Categoryitem to={'/cuisine/Greek'}>
          <ReactCountryFlag countryCode="GR" />
          <h4>Greek</h4>
        </Categoryitem>
      </SplideSlide>








      <SplideSlide>
        <Categoryitem to={'/cuisine/Japanese'}>
          <ReactCountryFlag countryCode="JP" />
          <h4>Japanese</h4>
        </Categoryitem>
      </SplideSlide>

      <SplideSlide>
        <Categoryitem to={'/cuisine/Chinese'}>
          <ReactCountryFlag countryCode="CN" />
          <h4>Chinese</h4>
        </Categoryitem>
      </SplideSlide>

      <SplideSlide>
        <Categoryitem to={'/cuisine/Thai'}>
          <ReactCountryFlag countryCode="TH" />
          <h4>Thai</h4>
        </Categoryitem>
      </SplideSlide>





      <SplideSlide>
        <Categoryitem to={'/cuisine/Indian'}>
          <ReactCountryFlag countryCode="IN" />
          <h4>Indian</h4>
        </Categoryitem>
      </SplideSlide>





      <SplideSlide>
        <Categoryitem to={'/cuisine/Mexican'}>
          <ReactCountryFlag countryCode="MX" />
          <h4>Mexican</h4>
        </Categoryitem>
      </SplideSlide>

      <SplideSlide>
        <Categoryitem to={'/cuisine/Irish'}>
          <ReactCountryFlag countryCode="IE" />
          <h4>Irish</h4>
        </Categoryitem>
      </SplideSlide>

      <SplideSlide>
        <Categoryitem to={'/cuisine/German'}>
          <ReactCountryFlag countryCode="DE" />
          <h4>German</h4>
        </Categoryitem>
      </SplideSlide>

      <SplideSlide>
        <Categoryitem to={'/cuisine/British'}>
          <ReactCountryFlag countryCode="GB" />
          <h4>British</h4>
        </Categoryitem>
      </SplideSlide>

 
    
      <SplideSlide>
        <Categoryitem to={'/cuisine/American'}>
          <ReactCountryFlag countryCode="US" />
          <h4>American</h4>
        </Categoryitem>
      </SplideSlide>








      </Splide>



    );
}

const Categoryitem = styled(NavLink)`
  position: relative;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 0.2rem;
  width: 10rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  background-color: #e2e2e2;

  
  h4 {
    font-family: "Oswald", "sans-serif";
    text-align: end;
    color: #4A6163;
  }

  &:hover {
    background-color: #4A6163;

    h4 {
      font-family: "Oswald", "sans-serif";
      text-align: end;
      color: #F9FAF4;
    }

  }

  &.active {
    background-color: #4A6163;

    h4 {
      font-family: "Oswald", "sans-serif";
      text-align: end;
      color: #F9FAF4;
    }



`;





export default Categories;

