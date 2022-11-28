import './Sidebar.css';

function Note(props) {
    return (
        <div className={`Note ${props.selected? "Note-Selected":""}`}>
            <h3>{props.title !== '' ? props.title: 'Untitled'}</h3>
            <p>{props.preview !== '' ? props.preview: 'Looking pretty empty here...'}</p>
        </div>
    )
}

function Sidebar(props) {
    return (
        <aside className="Sidebar">
            <button className="ButtonNew" onClick={props.addNewNote}> + New Note </button>
            {
                props.notes.map((note, i)=>{
                    if (i === props.index)
                        return <Note key={i} title={note.title} preview={note.preview} selected={true}/>
                    else
                    return <Note key={i} title={note.title} preview={note.preview} selected={false}/>
                })
            }
        </aside>
    );
}

export default Sidebar;
