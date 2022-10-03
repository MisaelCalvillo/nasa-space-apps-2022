import './style.css';
import * as THREE from 'three';

// Renderer - Es como la hoja de papel en la que todo se renderiza
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Camera - La vista o persepectiva del renderizado
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Scene - Escena de la vista
const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3(-10, 0, 0));
points.push( new THREE.Vector3(0, 10, 0));
points.push( new THREE.Vector3(10, 0, 0 ));

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render(scene, camera);

