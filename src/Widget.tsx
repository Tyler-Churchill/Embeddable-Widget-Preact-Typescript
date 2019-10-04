/** @jsx jsx */
// pragma needed for emotion "css" prop addition for components

import { jsx } from '@emotion/core';
import { Component } from 'preact';
import resetStyles from './helpers/Reset';
import Header from './components/Header';
import styled from '@emotion/styled';

const WidgetWrapper = styled.div`
  ${resetStyles}
  background-color: #30638e;
  color: #ebebd3;
`;

export type WidgetProps = {
  parentElement?: Element;
  displayText: string;
};

const initialState = {
  clickCount: 0
};

type WidgetState = Readonly<typeof initialState>;

/**
  The widget root component
*/
export default class Widget extends Component<WidgetProps, WidgetState> {
  readonly state: WidgetState = initialState;

  render() {
    return (
      <div>
        {/* Clear all host page defined styles before rendering the widget */}
        <WidgetWrapper>
          <Header />
          <div>
            <div>Total clicks: {this.state.clickCount}</div>
            <button
              onClick={() => {
                this.setState({ clickCount: this.state.clickCount + 1 });
              }}
            >
              Click me!
            </button>
          </div>
        </WidgetWrapper>
      </div>
    );
  }
}
