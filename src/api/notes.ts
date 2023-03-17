import { Howl, Howler } from "howler";
import { NoteType } from "../types";

Howler.volume(0.05);
let octave = 0;
let notes = {
  A: new Howl({ src: ["./public/1Cooox2.mp3"] }),
  B: new Howl({ src: ["./public/1Dooox2.mp3"] }),
  C: new Howl({ src: ["./public/1Eooox2.mp3"] }),
  D: new Howl({ src: ["./public/1Fooox2.mp3"] }),
  E: new Howl({ src: ["./public/1Gooox2.mp3"] }),
  F: new Howl({ src: ["./public/2Aooox2.mp3"] }),
  G: new Howl({ src: ["./public/2Booox2.mp3"] }),
};

function playNote(note: NoteType) {
  let cleanNote = note.toUpperCase();

  switch (cleanNote) {
    case "A": {
      // notes.A.rate(0.7 + octave);
      notes.A.play();
      break;
    }
    case "B": {
      // notes.B.rate(0.8 + octave);
      notes.B.play();
      break;
    }
    case "C": {
      // notes.C.rate(0.9 + octave);
      notes.C.play();
      break;
    }
    case "D": {
      // notes.D.rate(1.1 + octave);
      notes.D.play();
      break;
    }
    case "E": {
      // notes.E.rate(1.2 + octave);
      notes.E.play();
      break;
    }
    case "F": {
      // notes.F.rate(1.3 + octave);
      notes.F.play();
      break;
    }
    case "G": {
      // notes.G.rate(1.4 + octave);
      notes.G.play();
      break;
    }
    default: {
      console.log(cleanNote);
    }
  }
}

function setOctave(val: number) {
  octave = val;
}

function playMelody(melody: Array<NoteType>) {
  playNoteRec(melody, 0);
  function playNoteRec(arr: string[], i: number) {
    if (i < arr.length) {
      setTimeout(function () {
        console.log(arr[i]);
        playNote(arr[i]);
        playNoteRec(arr, i + 1);
      }, 500);
    }
  }
}

export { playNote, octave, setOctave, playMelody };
