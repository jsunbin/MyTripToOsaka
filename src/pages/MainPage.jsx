import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../components/Post";
import headerBG from "../images/headerbg.jpeg";
import images from "../data/imagesInfo.json";
import Skeleton from "../components/Skeleton";

export default function MainPage() {
  const { day1, day2, day3 } = images;
  const [dayOneImages, setDayOneImages] = useState(day1.images);
  const [dayTwoImages, setDayTwoImages] = useState(day2.images);
  const [dayThreeImages, setDayThreeeImages] = useState(day3.images);
  const [imageItems, setImageItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoToTopClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setImageItems(dayOneImages);

    setTimeout(() => {
      setIsLoading(true);
    }, 2500);
  }, [dayOneImages, dayTwoImages, dayThreeImages]);

  return (
    <>
      <Header>
        <H1>🇯🇵 오사카 ✈️</H1>
        <H3>2023.08.30 ~ 2023.09.03</H3>
      </Header>
      <main>
        <h1 className="a11y-hidden">2023년 08월 30일 ~ 09월 03일 3박4일 오사카 가족 여행</h1>
        <Div>
          <div>마지막 업데이트 날짜: 2023. 09. 09</div>
        </Div>
        {!isLoading ? (
          <Ul>
            <li>
              <Skeleton />
            </li>
            <li>
              <Skeleton />
            </li>
            <li>
              <Skeleton />
            </li>
          </Ul>
        ) : (
          <Ul>
            {imageItems.map((item) => (
              <li key={item.name}>
                <Post item={item} day={"Day1"} />
              </li>
            ))}
          </Ul>
        )}

        <TopButton type="button" onClick={handleGoToTopClick}>
          top
        </TopButton>
      </main>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  height: 176px;
  background: url(${headerBG}) 40% 44.5% no-repeat;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 60px 0;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 10px;
`;

const H3 = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

const Div = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2b5183;
  margin: 20px 0;
  div {
    width: 320px;
    margin: 0 auto;
  }
`;

const Ul = styled.ul`
  li {
    margin-bottom: 50px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      background: #2b5183;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 162px);
      top: 0;
    }
    &::after {
      content: "";
      display: block;
      width: 0px;
      height: 118%;
      border: 1px dashed #2b5183;
      position: absolute;
      left: calc(50% - 155px);
      top: 16px;
    }

    &:first-of-type {
      margin-top: 20px;
    }
    &:last-of-type {
      &::after {
        height: 95%;
      }
    }
  }
`;

const TopButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background: #2b5183;
  opacity: 0.85;
  position: fixed;
  bottom: 24px;
  right: 8px;
  z-index: 100;
`;
