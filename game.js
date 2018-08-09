import GIFExporter from 'babylonjs-gifexporter';

const captureBtn = document.getElementById('captureBtn');

const canvas = document.getElementById('viewerCanvas');

// BabylonViewer.disableInit = true;

// const configs = {
//     extends: 'extended',
//     engine: {
//         antialiasing: false,
//         engineOptions: {
//             preserveDrawableBuffer: true
//         }
//     },
//     model: {
//         url: "https://playground.babylonjs.com/scenes/Rabbit.babylon",
//         animation: {
//             autoStart: true
//         }
//     },
//     camera: {
//         behaviors: {
//             autoRotate: 0
//         }
//     },
//     scene: {
//         debug: false,
//         renderInBackground: true
//     }
// };

// // url: 'https://encoding.assets.remix3d.com/003/059f2766c027458787256ebb47a4094e/004/08586686162851047564894176372cu61/325fa597405e4cabbf2296b12545f1a8.fbx.gltf',

// const bbViewer = new BabylonViewer.DefaultViewer(canvas, configs);

// bbViewer.onInitDoneObservable.add(() => {
//     console.log('rendered')
//     bbViewer.canvas.width = "1200";
//     bbViewer.canvas.height = "600";

//     bbViewer.viewerManager.onViewerAddedObservable.add(function (viewer) {
//         console.log('config', viewer.configuration);
//         viewer.onEngineInitObservable.add(function (engine) {
//             console.log('engine', engine)

//             const recorder = new GIFExporter(engine, {
//                 delay: 50,
//                 duration: 3000
//             });

//             captureBtn.addEventListener('click', function () {

//                 recorder.download('babylonjs.gif');

//             })
//         })
//     });
// })




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