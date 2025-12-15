import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = ({ count = 2000, ...props }) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius: 1.5 }), [count]);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const ServerBlock = ({ position, color = "#00f0ff" }) => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh} position={position}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
            </mesh>
            <mesh position={position}>
                <boxGeometry args={[0.18, 0.18, 0.18]} />
                <meshBasicMaterial color={color} transparent opacity={0.1} />
            </mesh>
        </Float>
    );
};

const DataStream = () => {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 20; i++) {
            p.push([
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4
            ]);
        }
        return p;
    }, []);

    return (
        <group>
            {points.map((pos, i) => (
                <ServerBlock key={i} position={pos} color={i % 2 === 0 ? "#00f0ff" : "#7000ff"} />
            ))}
        </group>
    );
};

const Scene3D = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 2] }} dpr={[1, 2]} performance={{ min: 0.5 }}>
                <fog attach="fog" args={['#050505', 1.8, 3]} />
                <ParticleField count={2000} />
                <DataStream />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
