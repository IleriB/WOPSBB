import * as THREE from "three"; // this takes the package i instals npm, and lets me refere to everthing that three.js proves as three; three just means get this from the three js library. 
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x151923); // hypothtically chances the color 

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
); 
camera.position.z = 5; // this moves the camera five units backwards

const geometry = new THREE.BoxGeometry(1,1,1); // this creates a box that is one unit wide tall and deep

const material= new THREE.MeshBasicMaterial({color: 0x44aaff});// this gives it a color

const cube = new THREE.Mesh(geometry, material); // this combines the shape and apreance into an object

scene.add(cube); // this adds the object into the world of the box

//Making the floors shape
const floorGeometry = new THREE.PlaneGeometry(20,20); //plane is a flat surface 20, 20 wide and tall
// we have to rotate and postion the cube...
const floorMaterial = new THREE.MeshBasicMaterial({color: 0x303643});

const floor = new THREE.Mesh(floorGeometry, floorMaterial); // combines the featuews

floor.rotation.x = -Math.PI/2; // this makes it horizantal by: rotating the plane by negative 90 degrees around the x axis, turing it inoto a horizontal flooe

floor.position.y = -1; // this puts it below the cube just a little

scene.add(floor);





// 75 means the feild of view; width/height is the aspect ratio; 0.1 nearest visable distance; 1000l fathest visable distance 
const renderer = new THREE.WebGLRenderer(); //this is what takes the scean and the camera and makes it into an image on the screen
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);// this puts the canvas onto the webpage
// the rendere creates the canvas 
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x +=0.1;
    cube.rotation.y += 0.1;

    renderer.render (scene, camera);
}
animate();



