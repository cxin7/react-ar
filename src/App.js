import React from 'react';

function App() {
  return (
    <>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
        <a-assets>
          <a-asset-item
            id="robot"
            src="https://cdn.statically.io/gh/cxin7/react-ar/master/src/robot.glb"></a-asset-item>
        </a-assets>

        <a-marker type="barcode" value="59">
          <a-entity gltf-model="#robot" animation-mixer></a-entity>
        </a-marker>

        <a-marker type="barcode" value="2">
          <a-box position="0 0.5 0" color="yellow"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
