import React, { BaseComponent } from 'react';
import ReactDOM from 'react-dom';
import { compose, withPropsOnChange } from 'recompose';
import { withTheme } from 'react-fela';

const deco = Wrapped =>
  class Xy extends BaseComponent {
    render() {
      console.log('Hi');
      return React.createElement(Wrapped, null);
    }
  };

const Container = compose(
  withTheme,
  withPropsOnChange('xy', () => ({}))
)(() => <div>Hia</div>);

ReactDOM.render(<Container />, document.getElementById('mountNode'));
