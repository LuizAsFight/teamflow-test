import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Makes root div take screen's 100%
const ExpandedWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const ExpandedApp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const Expanded: FunctionComponent = ({ children }) => {
  return (
    <ExpandedWrapper>
      <ExpandedApp>{children}</ExpandedApp>
    </ExpandedWrapper>
  );
};

export default Expanded;
