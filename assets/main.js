 var sceneEL = document.getElementById('scene'); 

sceneEL.addEventListener('onefingermove', handleRotation); 

sceneEL.addEventListener('twofingermove', handleScale); 

sceneEL.addEventListener('markerFound', (e) => {
    isMarkerVisible = true; 
})

sceneEL.addEventListener('markerLost', (e) => {
    isMarkerVisible = false; 
}

