import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectRecommed } from '../features/movie/movieSlice'

const Recommeds = (props) => {

  const movies = useSelector(selectRecommed);

  return (
    <Container>
    <h4>Recommended for You</h4>
    <Content>
    {/* {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))} */}
          <Wrap>
            <Link to="/">
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt="" />
            </Link>
          </Wrap>
          <Wrap>
            <Link to="/">
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
              alt="" />
            </Link>
          </Wrap>
          <Wrap>
            <Link to="/">
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg"
              alt="" />
            </Link>
          </Wrap>
          <Wrap>
            <Link to="/">
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg"
              alt="" />
            </Link>
          </Wrap>
    </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));

 @media (max-width: 768px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
 }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommeds