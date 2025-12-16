import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const GlobePoints = (props) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(1500), { radius: 1.2 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.y += delta / 10;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Globe3D = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) return null;

    return (
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 2.5] }} dpr={[1, 1.5]}>
                <GlobePoints />
            </Canvas>
        </div>
    );
};

export default Globe3D;
