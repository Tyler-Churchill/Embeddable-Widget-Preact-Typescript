import { h, Component } from 'preact';

/**
    The widget root component
*/
export default class Widget extends Component {
    render() {
        return (
            <div style={{fontSize: "3em"}}>
                I am the rendered widget! Sweeeeet!
            </div>
        )
    }
}