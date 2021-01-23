import React from 'react';
import './App.css';
// @ts-ignore
import { Widget } from 'rasa-webchat';

function CustomWidget () {
  return (
      <Widget
          initPayload={"/get_started"}
          socketUrl={process.env.REACT_APP_SOCKET_URL}
          socketPath={"/socket.io/"}
          customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
          title={"Title"}
      />
  )
}

function App() {
  return (
    <CustomWidget></CustomWidget>
  );
}

export default App;
