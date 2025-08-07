import * as THREE from "three"
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from "three/examples/jsm/Addons.js";
import CameraControls from "./node_modules/camera-controls/dist/camera-controls.module.js"
CameraControls.install( { THREE: THREE } );
// import { EffectComposer } from "./node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
// import { RenderPass } from "./node_modules/three/examples/jsm/postprocessing/RenderPass.js";
// import { SAOPass } from "./node_modules/three/examples/jsm/postprocessing/SAOPass.js";
// import { ShaderPass } from "./node_modules/three/examples/jsm/postprocessing/ShaderPass.js";
// import { SSAOShader } from "./node_modules/three/examples/jsm/shaders/SSAOShader.js";
// import { GTAOShader } from "./node_modules/three/examples/jsm/shaders/GTAOShader.js";
// import { BrightnessContrastShader } from "./node_modules/three/examples/jsm/shaders/BrightnessContrastShader.js";
// import { VignetteShader } from "./node_modules/three/examples/jsm/shaders/VignetteShader.js";
 
// canvas
//const jsCanvas = document.getElementById("webgl")

// scene
const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x808080, 40, 100);

var width = window.innerWidth;
var height = window.innerHeight;

// camera
const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
var xMin = 4; var xMax = 8
var yMin = 0.1; var yMax = 1.5
var zMin = -1; var zMax = 18
var xCam = Math.random() * (xMax - xMin + 1) + xMin
var yCam = Math.random() * (yMax - yMin + 1) + yMin
var zCam = Math.random() * (zMax - zMin + 1) + zMin
camera.position.set(xCam, yCam, zCam);
//camera.position.set(2, 0.5, 15);

//  renderer
const renderer = new THREE.WebGLRenderer({antialias : true})
renderer.setSize(width, height)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.25
document.body.appendChild(renderer.domElement)

window.addEventListener("resize", () =>{
	width = window.innerWidth
	height = window.innerHeight
	camera.aspect = width / height
	camera.updateProjectionMatrix()
	renderer.setSize(width, height)
	renderer.setPixelRatio(window.devicePixelRatio)
})

// lights
// const hlUp = 0xFFFFFF
// const hlDw = 0x969696
// const hemiLight = new THREE.HemisphereLight(hlUp, hlDw, 0.5)
// scene.add(hemiLight)

const dirLight = new THREE.DirectionalLight(0xffffff,1)
dirLight.position.set(40,35,40)
dirLight.target.position.set(0,0,0)
dirLight.shadow.bias = -0.001
dirLight.castShadow = true
dirLight.shadow.intensity = 0.9
dirLight.shadow.mapSize.width = 5000
dirLight.shadow.mapSize.height = 5000
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = - 50;
dirLight.shadow.camera.left = - 50;
dirLight.shadow.camera.right = 50;
scene.add(dirLight)
scene.add(dirLight.target)
//dirLight.visible = false

const dirLightCentro = new THREE.DirectionalLight(0xffffff,2.0)
dirLightCentro.position.set(5,3,0)
dirLightCentro.target.position.set(5,20,0)
dirLightCentro.shadow.bias = -0.001
dirLightCentro.castShadow = false
dirLightCentro.shadow.intensity = 0.7
dirLightCentro.shadow.mapSize.width = 64
dirLightCentro.shadow.mapSize.height = 64
dirLightCentro.shadow.camera.top = 50;
dirLightCentro.shadow.camera.bottom = - 50;
dirLightCentro.shadow.camera.left = - 50;
dirLightCentro.shadow.camera.right = 50;
// scene.add(dirLightCentro)
// scene.add(dirLightCentro.target)

const dirLightAtras = new THREE.DirectionalLight(0xffffff,0.2)
dirLightAtras.position.set(-2,2,-7)
dirLightAtras.target.position.set(1,3,0)
dirLightAtras.shadow.bias = -0.001
dirLightAtras.castShadow = false
dirLightAtras.shadow.intensity = 0.9
dirLightAtras.shadow.mapSize.width = 64
dirLightAtras.shadow.mapSize.height = 64
dirLightAtras.shadow.camera.top = 50;
dirLightAtras.shadow.camera.bottom = - 50;
dirLightAtras.shadow.camera.left = - 50;
dirLightAtras.shadow.camera.right = 50;
// scene.add(dirLightAtras)
// scene.add(dirLightAtras.target)

// const spotLight = new THREE.SpotLight(0xffffff)
// spotLight.position.set(9,5,0)
// spotLight.target.position.set(0,12,0)
// spotLight.intensity = 10
// spotLight.castShadow = true
// spotLight.angle = 45
// spotLight.penumbra = 1
// spotLight.decay = .75
// spotLight.shadow.mapSize.width = 1000
// spotLight.shadow.mapSize.height = 1000
// spotLight.shadow.camera.near = 2
// spotLight.shadow.camera.far = 3
// spotLight.shadow.camera.fov = 35
// spotLight.shadow.focus = 0.5
// scene.add(spotLight)

// const spLightHelp = new THREE.SpotLightHelper(spotLight)
// scene.add(spLightHelp)

// const rectLight = new THREE.RectAreaLight(0xffffff, 1, 6, 6)
// rectLight.position.set(7,8,0)
// rectLight.rotateX(Math.PI/2)
// scene.add(rectLight)

// materials
const rgbeLoader = new RGBELoader()

const fondoURL = new URL("./textures/fondo_Cielo3.hdr", import.meta.url)
rgbeLoader.load(fondoURL,function (loadedT) {
	loadedT.mapping = THREE.EquirectangularReflectionMapping
	scene.background = loadedT
	scene.environment = loadedT
})

const textureLoader = new THREE.TextureLoader()

const baseMat = new THREE.MeshStandardMaterial()
const baseDifuso = textureLoader.load("./models/concretoD.png")
baseDifuso.wrapS = THREE.RepeatWrapping
baseDifuso.wrapT = THREE.RepeatWrapping
baseDifuso.repeat.set(3,6)
const concretoB = textureLoader.load("./models/concretoB.png")
concretoB.wrapS = THREE.RepeatWrapping
concretoB.wrapT = THREE.RepeatWrapping
concretoB.repeat.set(3,6)
const concretoR = textureLoader.load("./models/concretoR.png")
concretoR.wrapS = THREE.RepeatWrapping
concretoR.wrapT = THREE.RepeatWrapping
concretoR.repeat.set(3,6)
baseMat.map = baseDifuso
baseMat.bumpMap = concretoB
baseMat.bumpScale = 0.8
baseMat.roughnessMap = concretoR
baseMat.roughness = 0.97

const pisoAcabMat = baseMat.clone()  //new THREE.MeshStandardMaterial()
pisoAcabMat.color = new THREE.Color(0xf3e3dc)
pisoAcabMat.bumpScale = 2

const vBordeMat = new THREE.MeshStandardMaterial()
const dirt1 = textureLoader.load("./models/Dirt1.png")
dirt1.wrapS = THREE.RepeatWrapping
dirt1.wrapT = THREE.RepeatWrapping
dirt1.repeat.set(100,10)
vBordeMat.color = new THREE.Color(0xfafafa)
vBordeMat.envMapIntensity = 0.2
vBordeMat.roughnessMap = dirt1
vBordeMat.roughness = 0.6
vBordeMat.metalness = 0.8

const vigasMat = vBordeMat.clone()//new THREE.MeshStandardMaterial()
// const vigasD = textureLoader.load("./textures/vigasD.jpg")
// const vigasB = textureLoader.load("./textures/vigasB.jpg")
// const vigasR = textureLoader.load("./textures/vigasR.jpg")
// vigasD.wrapS = THREE.RepeatWrapping
// vigasD.wrapT = THREE.RepeatWrapping
// vigasD.repeat.set(5,5)
// vigasMat.map = vigasD
// vigasMat.bumpMap = vigasB
// vigasMat.roughnessMap = vigasR
// vigasMat.roughness = 0.9
// vigasMat.metalness = 0


const cubiertaMat = new THREE.MeshStandardMaterial()
cubiertaMat.color = new THREE.Color(0x93ccef)
cubiertaMat.side = THREE.DoubleSide
cubiertaMat.roughnessMap = dirt1
cubiertaMat.bumpMap = dirt1
cubiertaMat.roughness = 0.4
cubiertaMat.metalness = 0.2
cubiertaMat.bumpScale = 1

const canalMat = new THREE.MeshStandardMaterial()
canalMat.color = new THREE.Color(0xE2b2b2b)
canalMat.side = THREE.DoubleSide
canalMat.roughnessMap = dirt1
canalMat.bumpMap = dirt1
canalMat.transparent = true
canalMat.opacity = 0.4
canalMat.roughness = 0.8
canalMat.metalness = 0.2
canalMat.bumpScale = 2

const terrenoTex =textureLoader.load("./models/grass.jpg")
const terrenoAlphaM =textureLoader.load("./models/alphaMap.png")
// terrenoTex.wrapS = THREE.RepeatWrapping
// terrenoTex.wrapT = THREE.RepeatWrapping
// terrenoTex.repeat.set(50,50)
const terrenoDispT =textureLoader.load("./models/dispMap.png")
const terrenoMat = new THREE.MeshStandardMaterial({
	//color: "red",
	map: terrenoTex,
	displacementMap: terrenoDispT,
	displacementScale: 3.2,
	alphaMap : terrenoAlphaM,
	transparent: true
})

const basicMat = new THREE.MeshBasicMaterial({color: 0xff0000})

// objects
const glftLoader = new GLTFLoader()

glftLoader.load("./models/columna.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = baseMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/vigaBorde.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = vBordeMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/vigas.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = vigasMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/nudos.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = vBordeMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/cubierta.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = cubiertaMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/canal.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = canalMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/pisoAcabado.gltf",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = pisoAcabMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
	})
	scene.add(loadedGLTF.scene)
})

const planoBaseGeo = new THREE.PlaneGeometry(80,80,300,300)
planoBaseGeo.rotateX(-Math.PI/2)
planoBaseGeo.translate(0,-0.18,0)
const planoBase = new THREE.Mesh(planoBaseGeo,terrenoMat)
planoBase.receiveShadow = true
planoBase.castShadow = true
scene.add(planoBase)

glftLoader.load("./models/hikerW.glb",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = canalMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
		nMesh.scale.set(0.23,0.23,0.23)
		nMesh.position.set(5.5,0,-3.3)
		nMesh.rotateY(-Math.PI * 1.3)
	})
		scene.add(loadedGLTF.scene)
})

glftLoader.load("./models/boy.glb",(loadedGLTF) => {
	loadedGLTF.scene.traverse((nMesh) => {
		nMesh.material = canalMat
		nMesh.castShadow = true
		nMesh.receiveShadow = true
		nMesh.scale.set(1.2,1.2,1.2)
		nMesh.position.set(-0.1,0,-2)
		nMesh.rotateY(-Math.PI * 0.3)
	})
		scene.add(loadedGLTF.scene)
})


// post processing
// const composer = new EffectComposer(renderer)
// composer.antialias = true
// composer.addPass(new RenderPass(scene, camera))

// const brCn = new ShaderPass(BrightnessContrastShader)
// // brCn.uniforms["brightness"].value = 1
// // brCn.uniforms["contrast"].value = 0.5
// //brCn.renderToScreen = true
// composer.addPass(brCn)

// const vignettePass = new ShaderPass(VignetteShader);
// vignettePass.uniforms["offset"].value = 0.6;
// vignettePass.uniforms["darkness"].value = 1.1;
//composer.addPass(vignettePass);

//const ssaoShader = new ShaderPass(SSAOShader)
//composer.addPass(ssaoShader) SAOShader

// const gtsaoShaPass = new ShaderPass(GTAOShader)
// gtsaoShaPass.uniforms["thickness"].value = 0.5
// gtsaoShaPass.uniforms["sceneBoxMax"].value = new Vector3(10,10,10)
// composer.addPass(gtsaoShaPass)

// const saoPass = new SAOPass(scene, camera, new THREE.Vector2(4000,4000))
// saoPass.enabled = true
// saoPass.resolution.set(8*1024, 8*1024)
// saoPass.params.saoBias = 0.2
// saoPass.params.saoIntensity = 20
// saoPass.params.saoScale = 5
// saoPass.params.saoKernelRadius = 40
// saoPass.params.saoMinResolution = 4000
// saoPass.params.saoBlur = false
// composer.addPass(saoPass)


// animation
const clock = new THREE.Clock();
const cameraControls = new CameraControls( camera, renderer.domElement );
//cameraControls.mouseButtons.right = CameraControls.ACTION.ROTATE
cameraControls.dollySpeed = 0.15
//cameraControls.minPolarAngle = Math.PI * 0.33
//cameraControls.maxPolarAngle = Math.PI * 0.75
cameraControls.minDistance = 0
cameraControls.maxDistance = 38
//cameraControls.setTarget(6,1.5,0,true)

//renderer.render(scene, camera)
//composer.render()

// ejemplo autoRotate
// Exclusive control for user dragging
let userDragging = false;
let disableAutoRotate = false;

const onRest = () => {
	cameraControls.removeEventListener( 'rest', onRest );
	userDragging = false;
	disableAutoRotate = false;
}

cameraControls.addEventListener( 'controlstart', () => {
	cameraControls.removeEventListener( 'rest', onRest );
	userDragging = true;
	disableAutoRotate = true;
} );

cameraControls.addEventListener( 'controlend', () => {
	if ( cameraControls.active ) {
		cameraControls.addEventListener( 'rest', onRest );
	} else {
		onRest();
	}
} );

//
cameraControls.addEventListener( 'transitionstart', () => {
	if ( userDragging ) return;
	disableAutoRotate = true;
	cameraControls.addEventListener( 'rest', onRest );
} );

( function anim () {

	const delta = clock.getDelta();
	const elapsed = clock.getElapsedTime();
	const updated = cameraControls.update( delta );

    const cDist = cameraControls.distance

	if ( ! disableAutoRotate ) {
		const fRot = cDist * 1.3
		var factorRotar = 1 + (cDist - 0) * (10 - 1) / (38 - 0)
        cameraControls.azimuthAngle += (0.5 * factorRotar) * delta * THREE.MathUtils.DEG2RAD;
	}

    if ( elapsed > 3000 ) { return; }

	requestAnimationFrame( anim );

	if ( updated ) {
		
		//low2 + (value - low1) * (high2 - low2) / (high1 - low1)
		var minPolar = 0 + (cDist - 0) * (1.2 - 0) / (38 - 0)
        cameraControls.minPolarAngle = minPolar
		var maxPolar = 3.14 + (cDist - 0) * (1.55 - 3.14) / (38 - 0)
		cameraControls.maxPolarAngle = maxPolar
        
        // const iniTarget = new THREE.Vector3(5,2.5,0)
		// const distCamera = 0.15
		// var tarX = distCamera * Math.sin( delta * 0.001 )
		// var tarZ = distCamera * Math.cos( delta * 0.001 )
		// cameraControls.setTarget(tarX,2.5,tarZ,true)
		cameraControls.setTarget(4.6,3.2,0,true)
                
        //console.log(cDist);
		//console.log(cameraControls.polarAngle)
		//console.log(factorRotar)
        
        renderer.render( scene, camera );
		//composer.render()
	}

    

} )();

// renderer.setAnimationLoop(animate)
// const distCamera = 3
// const target = new THREE.Vector3()
// function animate (time) {
//     target.x = distCamera * Math.sin( time * 0.0005 )
//     target.z = distCamera * Math.cos( time * 0.0005 )

//     // render
//     camera.position.set(target.x, 2.25, target.z)
//     camera.lookAt(0,0,0)
//     renderer.render(scene, camera)
// }






// npm run dev
