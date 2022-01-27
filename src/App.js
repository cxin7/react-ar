import React from 'react';

function App() {
  return (
    <>
      <a-scene
        embedded
        arjs="sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        renderer="precision: medium;">
        <a-marker type="unknown">
          <a-box
            depth="1"
            height="1"
            width="1"
            position="0 0.5 0"
            material="opacity: 0.5; side:double; color:blue;"></a-box>
        </a-marker>

        <a-marker preset="hiro">
          <a-box
            position="0 0.5 0"
            material="opacity: 0.5; side: double;color:red;">
            <a-torus-knot
              radius="0.26"
              radius-tubular="0.05"
              animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"></a-torus-knot>
          </a-box>
        </a-marker>

        <a-marker type="barcode" value="2">
          <a-box
            position="0 0.5 0"
            material="opacity: 0.5; side: double;color:pink;">
            <a-torus-knot
              radius="0.26"
              radius-tubular="0.05"
              animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"></a-torus-knot>
          </a-box>
        </a-marker>
        <a-marker type="barcode" value="6">
          <a-box
            position="0 0.5 0"
            material="opacity: 0.5; side: double;color:pink;">
            <a-torus-knot
              radius="0.26"
              radius-tubular="0.05"
              animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"></a-torus-knot>
          </a-box>
        </a-marker>
        <a-marker type="barcode" value="7">
          <a-box
            position="0 0.5 0"
            material="opacity: 0.5; side: double;color:pink;">
            <a-torus-knot
              radius="0.26"
              radius-tubular="0.05"
              animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"></a-torus-knot>
          </a-box>
        </a-marker>

        <a-marker preset="kanji">
          <a-box
            position="0 0.5 0"
            material="opacity: 0.5; side: double;color:green;">
            <a-torus-knot
              radius="0.26"
              radius-tubular="0.05"
              animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"></a-torus-knot>
          </a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

export default App;
