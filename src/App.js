import React from 'react';

function App() {
  return (
    <>
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-assets>
          <a-asset-item
            id="robot"
            src="https://cdn.statically.io/gh/cxin7/react-ar/blob/master/src/robot.glb"></a-asset-item>
        </a-assets>

        <a-marker
          id="animated-marker"
          preset="custom"
          type="pattern"
          url="https://cdn.statically.io/gh/cxin7/react-ar/blob/master/src/pattern-2359.patt">
          <a-entity gltf-model="#robot" animation-mixer></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
