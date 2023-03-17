import { Howl, Howler } from "howler";

Howler.volume(0.2);
let src = ["./src/assets/ooo.mp3"];
let octave = 0;
let A: Howl = new Howl({ src });
let B: Howl = new Howl({ src });
let C: Howl = new Howl({ src });
let D: Howl = new Howl({ src });
let E: Howl = new Howl({ src });
let F: Howl = new Howl({ src });
let G: Howl = new Howl({ src });

function playSound(note: string) {
  let cleanNote = note.toUpperCase();
  switch (cleanNote) {
    case "A": {
      A.rate(0.7 + octave);
      A.play();
      break;
    }
    case "B": {
      B.rate(0.8 + octave);
      B.play();
      break;
    }
    case "C": {
      C.rate(0.9 + octave);
      C.play();
      break;
    }
    case "D": {
      D.rate(1.1 + octave);
      D.play();
      break;
    }
    case "E": {
      E.rate(1.2 + octave);
      E.play();
      break;
    }
    case "F": {
      F.rate(1.3 + octave);
      F.play();
      break;
    }
    case "G": {
      G.rate(1.4 + octave);
      G.play();
      break;
    }
    default: {
      console.log(cleanNote);
    }
  }
}

export { playSound };
