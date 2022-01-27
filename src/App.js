import React from 'react';
import pattFile from './pattern-2359.patt';
import robot from './robot.glb';

function App() {
  return (
    <>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-assets>
          <a-asset-item id="robot" src={robot}></a-asset-item>
        </a-assets>

        <a-marker
          id="animated-marker"
          preset="custom"
          type="pattern"
          url={pattFile}>
          <a-entity gltf-model="#robot" animation-mixer></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
