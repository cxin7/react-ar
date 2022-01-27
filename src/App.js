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
            src="https://github.com/nicolocarpignoli/nicolocarpignoli.github.io/blob/master/ar-playground/models/CesiumMan.gltf"></a-asset-item>
        </a-assets>

        <a-marker id="animated-marker" type="pattern" url="./pattern-2359.patt">
          <a-entity gltf-model="#animated-asset" scale="2"></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
