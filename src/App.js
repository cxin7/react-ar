import React from 'react';

function App() {
  return (
    <>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
        <a-assets>
          <a-asset-item
            id="animated-asset"
            src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
        </a-assets>

        <a-marker type="barcode" value="7">
          <a-box position="0 0.5 0" color="blue"></a-box>
        </a-marker>

        <a-marker id="animated-marker" type="barcode" value="6">
          <a-entity gltf-model="#animated-asset" scale="2"></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
