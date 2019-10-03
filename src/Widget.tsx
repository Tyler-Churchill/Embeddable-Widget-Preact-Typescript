/** @jsx jsx */
// pragma needed for emotion "css" prop addition for components

import { Global, css, jsx } from '@emotion/core';
import { Component } from 'preact';
import resetStyles from './helpers/Reset';
import Header from './components/Header';

export type WidgetProps = {
  parentElement?: Element;
  displayText: string;
};

const initialState = {
  clickCount: 0
};

type WidgetState = Readonly<typeof initialState>;

const titleStyle = css({
  color: 'red'
});

/**
  The widget root component
*/
export default class Widget extends Component<WidgetProps, WidgetState> {
  readonly state: WidgetState = initialState;

  render() {
    return (
      <div>
        {/* Clear all host page defined styles before rendering the widget */}
        <Global
          styles={css`
            ${resetStyles}
          `}
        />
        <Header />
        <div style={{ fontSize: '3em' }}>
          <div css={titleStyle}>test</div>
          <div>Display Text {this.props.displayText}</div>I am the rendered
          widget! Sweeeeet!
          <div>Total clicks: {this.state.clickCount}</div>
          <button
            onClick={() => {
              this.setState({ clickCount: this.state.clickCount + 1 });
            }}
          >
            Click me!
          </button>
        </div>
      </div>
    );
  }
}
