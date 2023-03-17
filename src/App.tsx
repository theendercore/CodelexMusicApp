import NoteButton from "./components/NoteButton";

function App() {
  const notes = ["A", "B", "C", "D", "E", "F", "G"] as const;

  return (
    <div className="App container m-auto flex flex-wrap items-center justify-center gap-6 p-20">
      {notes.map((note) => (
        <NoteButton note={note} />
      ))}
    </div>
  );
}

export default App;
