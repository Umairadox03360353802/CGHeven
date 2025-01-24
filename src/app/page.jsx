"use client";
import AboutUs from "./components/about-us/page";
import CommunityRender from "./components/community-render/page";
import ContactUs from "./components/contact-us/page";
import FreeSection from "./components/free-section/page";
import HeroSection from "./components/heroSection/page";
import JoinCommunity from "./components/join-community/page";
import MiniProductsSection from "./components/mini-product-section/page";
import Navbar from "./components/navbar/page";
import PatreonName from "./components/patreon-name/page";
import SupportUs from "./components/support-us/page";
import Testimonials from "./components/testimonials/page";
import Categories from "./components/categories/page";
import Blogs from "./components/blogs/page";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const Scene = dynamic(() => import("./canvas/Scene"), { ssr: false });

function Duck(props) {
  const { scene } = useGLTF("/duck.glb");

  useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
}

export default function Home(props) {
  const ref = useRef();

  return (
    <Canvas
      {...props}
      onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
    >
      {/* @ts-ignore */}
      <Duck />
      <Preload all />
    </Canvas>
  );

  return (
    // <div>
    // <HeroSection/>
    // <div className="my-[10vh] bg-black"></div>

    // <MiniProductsSection/>
    // <div className="my-[10vh] bg-black"></div>
    // <Categories/>

    // <div className="mb-[10vh] bg-black"></div>

    // <SupportUs/>
    // <div className="mb-[10vh] bg-black"></div>
    // <FreeSection/>
    // <div className="mb-[10vh] bg-black"></div>
    // <AboutUs/>
    // <div className="mb-[10vh] bg-black"></div>
    // <CommunityRender/>
    // <div className="mb-[10vh] bg-black"></div>
    // <JoinCommunity/>
    // <div className="mb-[10vh] bg-black"></div>
    // <Blogs/>
    // <div className="mb-[10vh] bg-black"></div>
    // <PatreonName/>
    // <div className="border border-gray-700"></div>

    // {/* <ContactUs/> */}
    // {/* <Testimonials/> */}

    // </div>
    <>
      {/* <Robot/> */}
      {/* <Modals/> */}
      {/* <RobotRnder/> */}
      <p>canvass</p>
      <div
        ref={ref}
        style={{
          position: "relative",
          width: " 100%",
          height: "100%",
          overflow: "auto",
          touchAction: "auto",
        }}
      >
        {children}
        <Scene
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
          }}
          eventSource={ref}
          eventPrefix="client"
        />
      </div>
    </>
  );
}
