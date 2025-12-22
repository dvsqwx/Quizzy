window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF9FAFB, 0.04);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const objectGroup = new THREE.Group();

    const coreGeo = new THREE.OctahedronGeometry(1.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.3,
        metalness: 0.7,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    
    const wireGeo = new THREE.OctahedronGeometry(2.3, 0); 
    const wireMat = new THREE.MeshBasicMaterial({
        color: 0x8B5CF6,
        wireframe: true,
        transparent: true,
        opacity: 0.3 
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);

    const ringGeo = new THREE.TorusGeometry(3.2, 0.03, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ 
        color: 0xE5E7EB, // Светло-серый
        transparent: true, opacity: 0.6 
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;

    objectGroup.add(core);
    objectGroup.add(wire);
    objectGroup.add(ring);

    scene.add(objectGroup);

    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i=0; i<particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 25;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.04, color: 0xC4B5FD, transparent: true, opacity: 0.6
    });
    const starField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(starField);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.5);
    mainLight.position.set(10, 10, 10);
    scene.add(mainLight);

    const purpleLight = new THREE.PointLight(0x8B5CF6, 0.8, 100);
    purpleLight.position.set(-5, -10, 5);
    scene.add(purpleLight);
    
    const mintLight = new THREE.PointLight(0x34D399, 0.5, 100);
    mintLight.position.set(5, 5, -5);
    scene.add(mintLight);

    let mouseX = 0; let mouseY = 0;
    let targetX = 0; let targetY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    });

    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX = mouseX * 2;
        targetY = mouseY * 2;

        objectGroup.rotation.y += 0.004;
        objectGroup.rotation.z = Math.sin(elapsedTime * 0.4) * 0.15;

        objectGroup.rotation.x += 0.05 * (targetY - objectGroup.rotation.x);
        objectGroup.rotation.y += 0.05 * (targetX - objectGroup.rotation.y);
        
        ring.rotation.x = Math.sin(elapsedTime * 0.2) + Math.PI/2.2;
        ring.rotation.y += 0.015;

        const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
        objectGroup.scale.set(scale, scale, scale);

        starField.rotation.y -= 0.0005;

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
