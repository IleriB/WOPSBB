import * as THREE from "three"; // this takes the package i instals npm, and lets me refere to everthing that three.js proves as three; three just means get this from the three js library. 
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x151923); // hypothtically chances the color 

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
); 
// 75 means the feild of view; width/height is the aspect ratio; 0.1 nearest visable distance; 1000l fathest visable distance 
const renderer = new THREE.WebGLRenderer(); //this is what takes the scean and the camera and makes it into an image on the screen
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);// this puts the canvas onto the webpage
// the rendere creates the canvas 
renderer.render(scene,camera);// looks through the camera and draws what the camera s



