import { createRef } from 'react';
import './Editor.css';

function Editor(props) {
    let text = createRef();
    if(props.index === -1)
        return (<main className='Editor'>
            <p>Add a note to get started.</p>
        </main>)

    return (
        <main className='Editor'>
            <header className='EditorToolbar'>
                <h3>{props.note.title !== '' ? props.note.title: 'Untitled'}</h3>
                <div className='EditorButtons'>
                    <button onClick={() => {props.updateNote(props.index, text.current.value)}}>Edit</button>
                    <button>Delete</button>
                </div>
            </header>
            <article className='EditorContent'>
                <div className='EditorHTML'>
                    <p></p>
                </div>
                <textarea className='EditorMDField' ref={text} defaultValue={props.note.text}></textarea>
            </article>
        </main>
    );
}

export default Editor;