import './Editor.css';

function Editor() {
    return (
        <main className='Editor'>
            <header className='EditorToolbar'>
                <h1>Title</h1>
                <div className='EditorButtons'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </header>
            <article className='EditorContent'>
                <div className='EditorHTML'>
                    <p>
                    From which we spring quasar rings of Uranus a still more glorious dawn awaits
                    laws of physics the sky calls to us. Hearts of the stars venture great turbulent
                    clouds a very small stage in a vast cosmic arena hydrogen atoms a very small stage
                    in a vast cosmic arena.
                    </p>
                </div>
                <textarea className='EditorMDField'></textarea>
            </article>
        </main>
    );
}

export default Editor;