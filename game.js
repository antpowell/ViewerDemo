import GIFExporter from 'babylonjs-gifexporter';

const captureBtn = document.getElementById('captureBtn');

BabylonViewer.viewerManager.onViewerAddedObservable.add(function (viewer) {

    viewer.onEngineInitObservable.add(function (engine) {

        const recorder = new GIFExporter(engine, {
            delay: 50,
            duration: 4000
        });

        captureBtn.addEventListener('click', function () {
            captureBtn.disabled = true;
            recorder.download('babylonjs.gif');
            captureBtn.disabled = false;

        })
    });

});