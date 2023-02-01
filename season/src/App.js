import React from "react";
import { SeasonDisplay } from "./SeasonDisplay";
// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return (
//     <div>
//       <h2>Hello there</h2>
//     </div>
//   );
// }

// export default App;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: "" };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }
  render() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errMsg) return <div>Error: {this.state.errMsg}</div>;
    else {
      <div>Loading...</div>;
    }
  }
}
export default App;
