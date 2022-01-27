import React from 'react';
import pattFile from './pattern-2359.patt';

function App() {
  return (
    <>
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
        <a-assets>
          <a-asset-item
            id="animated-asset"
            src="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"></a-asset-item>
        </a-assets>

        <a-marker id="animated-marker" type="pattern" url={pattFile}>
          <a-entity gltf-model="#animated-asset" scale="2"></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
