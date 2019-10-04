/** @jsx jsx */
// pragma needed for emotion "css" prop addition for components
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

const Wrapper = styled.header`
  color: #f95738;
`;

export default function Header() {
  return (
    <div>
      <Wrapper>Widget Header</Wrapper>
    </div>
  );
}
