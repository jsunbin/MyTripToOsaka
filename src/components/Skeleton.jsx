import React from "react";
import styled, { keyframes } from "styled-components";

export default function Skeleton() {
  return (
    <Section>
      <ImgDiv></ImgDiv>
      <TitleDiv></TitleDiv>
      <DescriptionDiv />
    </Section>
  );
}

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

const Section = styled.section`
  width: 264px;
  height: 278px;
  border-radius: 8px;
  border: 1px solid #2b5183;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 203px;
  border-radius: 8px;
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const TitleDiv = styled.div`
  width: 80%;
  height: 23px;
  margin: 6px 4px;
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const DescriptionDiv = styled.div`
  width: 65%;
  height: 23px;
  margin: 6px 4px;
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;
