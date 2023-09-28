import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './App.css';

function App() {
  const {
    unityProvider,
    isLoaded,
    loadingProgression
  } = useUnityContext({
    loaderUrl: "./unityBuild/Build.loader.js",
    dataUrl: "./unityBuild/Build.data",
    frameworkUrl: "./unityBuild/Build.framework.js",
    codeUrl: "./unityBuild/Build.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  return (
    <div className="App">
    {!isLoaded && (
      <div className="LoadingBar">
        <div
          className="LoadingBarFill"
          style={{ width: loadingProgression * 440 }}
        />
      </div>
    )}
    <Unity
        unityProvider={unityProvider}
        style={{
          display: isLoaded ? "block" : "none",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: 0 }}
    />
    </div>
  );
}

export default App;
