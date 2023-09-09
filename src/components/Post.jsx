import React from "react";
import styled from "styled-components";

export default function Post({ item, day }) {
  return (
    <Section>
      <Img src={item.path} alt={item.type} />
      <StringDiv>
        <Strong>{item.description}</Strong>
        <DescriptionDiv>
          <Svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
              <path
                d="M18 9.00024C13.4726 17.2498 14.5976 15.5623 9.00014 24C3.34756 15.5623 4.47257 17.2498 0 9.00024C0 4.02954 4.02944 0 9 0C13.9706 0 18 4.02954 18 9.00024Z"
                fill="#1E0F7D"
              />
              <ellipse cx="8.97269" cy="8.24957" rx="4.50004" ry="4.50012" fill="#FFFCF1" />
              <path
                d="M18 9.00024C13.4726 17.2498 14.5976 15.5623 9.00014 24C3.34756 15.5623 4.47257 17.2498 0 9.00024C0 4.02954 4.02944 0 9 0C13.9706 0 18 4.02954 18 9.00024Z"
                fill="#1E0F7D"
              />
              <ellipse cx="8.97269" cy="8.24957" rx="4.50004" ry="4.50012" fill="#FFFCF1" />
            </svg>
          </Svg>
          {item.place}
          <CircleSpan />
          <DaySpan>{day}</DaySpan>
        </DescriptionDiv>
      </StringDiv>
    </Section>
  );
}

const Section = styled.section`
  width: 264px;
  height: 278px;
  border-radius: 8px;
  border: 1px solid #2b5183;
  background: #fff;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 203px;
  object-fit: cover;
  border-radius: 8px;
  vertical-align: top;
`;

const StringDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 6px 4px;
`;

const Strong = styled.strong`
  display: block;
  height: 23px;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
`;

const DescriptionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Svg = styled.div`
  margin-right: 6px;
`;

const CircleSpan = styled.span`
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #6f6f6f;
  margin: 0 10px;
`;

const DaySpan = styled.span`
  color: #6f6f6f;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
