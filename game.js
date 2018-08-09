import GIFExporter from 'babylonjs-gifexporter';

const captureBtn = document.getElementById('captureBtn');

BabylonViewer.viewerManager.onViewerAddedObservable.add(function (viewer) {
    console.log('config', viewer.configuration);
    viewer.onEngineInitObservable.add(function (engine) {
        console.log('engine', engine)

        const recorder = new GIFExporter(engine, {
            delay: 50,
            duration: 3000
        });

        captureBtn.addEventListener('click', function () {

            recorder.download('babylonjs.gif');

        })
    })
});