import './Sidebar.css';

function Note(props) {
    return (
        <div className={"Note" + props.selected?" Note-Selected":""}>
            <h3>{props.title}</h3>
            <p>{props.preview}</p>
        </div>
    )
}

function Sidebar(props) {
    return (
        <aside className="Sidebar">
            <button className="ButtonNew"> + New Note </button>
            {
                props.notes.map((note, i)=>{
                    if (i === props.index)
                        return <Note title={note.title} preview={note.preview} selected={true}/>
                    else
                    return <Note title={note.title} preview={note.preview} selected={false}/>
                })
            }
        </aside>
    );
}

export default Sidebar;
