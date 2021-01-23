import React, { useEffect, useRef } from 'react';
import './App.css';
// @ts-ignore
import { Widget } from 'rasa-webchat';

function CustomWidget () {
    const webchatRef = useRef(null);
    useEffect(() => {
        console.log(webchatRef)
    }, []);

  return (
      <Widget
          ref={webchatRef}
          embedded={true}
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
      <>
          <div id="angled-one" className="nice-background center"></div>
          <div id="angled-two" className="nice-background center"></div>
          <div id="widget-container" className="center">
              <CustomWidget></CustomWidget>
          </div>
      </>
  );
}

export default App;
