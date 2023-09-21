import styled from "@emotion/styled";

export const QuestionSection = styled.div`
  width: 60%;
  margin: 0 auto;
  background: transparent;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
`;

export const QuestionAlign = styled.div`
  align-items: center;
  display: flex;
  min-height: 10px;
  text-align: left;

  h4 {
    margin-left: 8px;
    font-size: 17px;
    width: 100%;
  }
`;

export const Answer: any = styled.div<{ isActive?: boolean }>`
  margin-left: 8px;
  margin-right: 8px;
  max-height: ${(props) => (props.isActive === true ? window.scrollY : 0)};
  overflow: hidden;
  transition: max-height 0.6s ease;
  text-align: left;
`;
