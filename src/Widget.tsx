import { h, Component } from 'preact';

export type WidgetProps = {
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
      <div style={{ fontSize: '3em' }}>
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
    );
  }
}
