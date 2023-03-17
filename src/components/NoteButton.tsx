import { playSound } from "../api/notes";

type NoteButtonProps = {
  note: string;
};

export default function NoteButton({ note }: NoteButtonProps) {
  return (
    <button
      onClick={() => playSound(note)}
      className="w-24 rounded-xl bg-slate-200 p-4 text-3xl"
    >
      {note}
    </button>
  );
}
