// https://medium.com/@fabiojcortes/manipulate-your-3d-content-with-gestures-in-ar-js-78da4c076607
// Number of fingers determines action
var sceneEL = document.getElementById('scene'); 

sceneEL.addEventListener('onefingermove', handleRotation); 

sceneEL.addEventListener('twofingermove', handleScale); 


// Makes scaling and moving only available when the camera is directed at the marker
sceneEL.addEventListener('markerFound', (e) => {
    isMarkerVisible = true; 
})

sceneEL.addEventListener('markerLost', (e) => {
    isMarkerVisible = false; 
})

handleRotation(event) {
    if (isMarkerVisible) {
      el.object3D.rotation.y +=
        event.detail.positionChange.x * rotationFactor;

      el.object3D.rotation.x +=
        event.detail.positionChange.y * rotationFactor;
    }
  }

  handleScale(event) {
    if (isMarkerVisible) {
      this.scaleFactor *=
        1 + event.detail.spreadChange / event.detail.startSpread;

      this.scaleFactor = Math.min(
        Math.max(this.scaleFactor, this.data.minScale),
        this.data.maxScale
      );

      el.object3D.scale.x = scaleFactor * initialScale.x;
      el.object3D.scale.y = scaleFactor * initialScale.y;
      el.object3D.scale.z = scaleFactor * initialScale.z;
    }
  }