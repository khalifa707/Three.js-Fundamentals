import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

//Scale
mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 2;

//Rotation
mesh.rotation.reorder('YXZ');
mesh.rotation.y = Math.PI;

//Axes Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);


//Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer
const canvas = document.querySelector('canvas.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);