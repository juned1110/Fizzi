"use client";

import React, { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";

import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 2,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <group ref={ref} {...props}>
          <Float
            speed={floatSpeed}
            rotationIntensity={rotationIntensity}
            floatIntensity={floatIntensity}
            floatingRange={floatingRange} //y-axis float
          >
            {children}
            <SodaCan flavor={flavor} />
          </Float>
        </group>
      </>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
