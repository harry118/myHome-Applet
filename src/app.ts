import { Component } from 'react';
import './app.less';

class App extends Component<any, any> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return this.props.children;
  }
}
export default App;
