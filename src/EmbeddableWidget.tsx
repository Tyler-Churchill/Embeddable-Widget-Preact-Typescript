import preact, { h, render } from 'preact';
import WidgetApp, {WidgetProps} from './Widget';
import widgetConfig from '../widget.config.json';

export type Renderable = preact.AnyComponent | JSX.Element | preact.JSX.Element;

/**
  Wrapper around Widget, responsible for passing config and other options during widget usage on the
  host page
 */
export default class EmbeddableWidget {
    el: Element;
    component: Renderable

    render = () => {
        if (this.el) {
          throw new Error(`${widgetConfig.widgetName} is already mounted, call unmount() first`);
        }
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
        render(this.component, document.body);
      }

    mount = (props: WidgetProps) => {
      this.component = <WidgetApp {...props} />;
      if (document.readyState === 'complete') {
        this.render();
      } else {
        window.addEventListener('load', () => {
          this.render();
        });
      }
    }
  
    unmount = () => {
      if (!this.el) {
        throw new Error(`${widgetConfig.widgetName} is not mounted, call mount() first`);
      }
      render(null, this.el);
      this.el.parentNode.removeChild(this.el);
      this.el = null;
    }
  }