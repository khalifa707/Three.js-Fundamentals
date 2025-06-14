import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Object
const group = new THREE.Group();
group.position.y=1;
group.scale.y=2;
group.rotation.y=1;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
);
cube2.position.x=2;
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
);
cube3.position.x=-2;
group.add(cube1);
group.add(cube2);
group.add(cube3);



//Scale


//Rotation


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