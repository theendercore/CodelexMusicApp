import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrthographicCamera, PerspectiveCamera, Vector3 } from "three";
import { playMelody, playNote, setOctave } from "./api/notes";
import type { NoteType } from "./types";

function Box({ position, melody }: { position: Vector3; melody: () => void }) {
  const [hovered, hover] = useState(false);
  // const ref = useRef<Mesh>(null!);

  return (
    <mesh
      position={position}
      onClick={() => melody()}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />+
      <meshStandardMaterial color={hovered ? "gray" : "white"} />
    </mesh>
  );
}

function CameraHelper() {
  const camera = new OrthographicCamera(-2, 2, 2, -2);
  return (
    <group position={[0, 0, 4]}>
      <cameraHelper args={[camera]} />;
    </group>
  );
}

function App() {
  const notes = ["A", "B", "C", "D", "E", "F", "G"] as const;
  function playMel() {
    playMelody(
      "CCGGAAG-FFEEDDC-GGFFEED-GGFFEED-CCGGAAG-FFEEDDC".split("") as NoteType[]
    );
  }
  function playMel2() {
    playMelody("A-B-C-D-F-G".split("") as NoteType[]);
  }

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {notes.map((note, i) => (
          <Box
            key={note}
            position={new Vector3(-3.3 + 1.1 * i, -1, 0)}
            melody={() => playNote(note)}
          />
        ))}
        <Box position={new Vector3(-1.2, 4, 0)} melody={playMel} />
        <Box position={new Vector3(1.2, 4, 0)} melody={playMel2} />
        {/* <CameraHelper /> */}
      </Canvas>
    </div>
  );
}

export default App;
