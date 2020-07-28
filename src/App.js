import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './homepage/homepage.component';

const Hatspage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <h1>TopicDetail PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = (props) => (
//   <div>
//     <h1>Topic List PAGE</h1>
//     {/* <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
//     <Link to={`${props.match.url}/13`}>TO TOPIC 17</Link>
//     <Link to={`${props.match.url}/13`}>TO TOPIC 21</Link> */}
//   </div>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hatspage} />
        {/* <Route exact path="/topics" component={TopicsList} />
        <Route exact path="/Topics/:topicId" component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
