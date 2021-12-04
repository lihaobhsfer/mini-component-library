/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, showValue }) => {
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {showValue && <span>{value}%</span>}
      <Wrapper size={size}>
        <Progress value={value} />
      </Wrapper>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background: rgba(128, 128, 128, 0.15);

  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          height: 24px;
          border-radius: 8px;
          padding: 4px;
        `;
      case "medium":
        return css`
          height: 12px;
          border-radius: 4px;
        `;
      case "small":
        return css`
          height: 8px;
          border-radius: 4px;
        `;
      default:
        return css`
          height: 16px;
        `;
    }
  }};
`;

const Progress = styled.div`
  width: ${(props) => props.value + "%"};
  background: #4747eb;
  height: 100%;
  overflow: hidden;
`;

export default ProgressBar;
