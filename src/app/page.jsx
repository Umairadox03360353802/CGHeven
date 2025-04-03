"use client";
import AboutUs from "./components/about-us/page";
import Assets from "./assets/page";
import ProductDetails from "./productDetails/page";
import CommunityRender from "./components/community-render/page";
import ContactUs from "./components/contact-us/page";
import HeroSection from "./components/heroSection/page";
import JoinCommunity from "./components/join-community/page";
import MiniProductsSection from "./components/mini-product-section/page";
import Navbar from "./components/navbar/page";
import PatreonName from "./components/patreon-name/page";
import SupportUs from "./components/support-us/page";
import Testimonials from "./components/testimonials/page";
import Categories from "./components/categories/page";
import Blogs from "./components/blogs/page";
import VideoHome from "./youTube/video-home/page";
import YoutubeVideo from "./youTube/video-home/youtube-video/page";
import PatrenVideo from "./youTube/video-home/patreon-video/page";



import { useThree } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Bounds, Center, Environment, useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls, PerspectiveCamera, MeshStandardMaterial } from "@react-three/drei";
import * as THREE from "three";
import TrendingSection from "./components/trendingSection/page";


const Scene = dynamic(() => import("./canvas/Scene"), { ssr: false });

function Duck(props) {
  const { scene } = useGLTF('/Frozen.gltf');
  const { camera } = useThree()
  camera.lookAt(0, 0, 0)

  // useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} scale={[1, 1, 1]} position={[0, -1, 0]} />;

}

export default function Home() {
  // const ref = useRef();
  // const { param, searchParams, ...rest } = props;

  // return (
  //   <div  className=" bg-gray-500" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>

  //   <Canvas className="w-[100vw] h-[100vh] "

  //   camera={{ position: [5, 5, 5] }}
  //   fov={50} 
  //   enablePan={true}
  //   zoomSpeed={0.5}

  //   rotateSpeed={0.5}
  //   makeDefault
  //     {...rest}
  //     onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
  //   >
  //     <ambientLight intensity={0.5} />
  //     <OrbitControls  makeDefault 
  //       enablePan={true}
  //       zoomSpeed={0.6}/>

  //      <Bounds fit clip observe margin={1.2} size={10}  >

  //      <Suspense fallback={null} >
  //     <Duck   />
  //      {/* <pointLight position={[10, 10, 10]} /> */}

  //     </Suspense>
  //      </Bounds>
  //     <Environment preset="apartment"/>
  //     <Preload all  />
  //   </Canvas>
  //   </div>

  // );

  return (
    <>
      <div>

        <HeroSection />
        <div className="my-[10vh] bg-black"></div>
        <MiniProductsSection />
        <div className="my-[10vh] bg-black"></div>
        <TrendingSection />

        <div className="mb-[10vh] bg-black"></div>
        <Categories />

        <div className="mb-[10vh] bg-black"></div>
        <SupportUs />

        <div className="mb-[10vh] bg-black"></div>
        <AboutUs />
        <div className="mb-[10vh] bg-black"></div>
        
        <JoinCommunity />
        {/* <div className="mb-[10vh] bg-black"></div> */}
        {/* <Blogs /> */}
        {/* <div className="mb-[2vh] bg-black"></div> */}
       
      </div>

      {/* <ContactUs/> */}
      {/* <Testimonials/> */}
      {/* <VideoHome/> */}
      {/* <YoutubeVideo/> */}
      {/* <PatrenVideo/> */}

      {/* <Assets/> */}
      {/* <ProductDetails/> */}


    </>

  );
}
