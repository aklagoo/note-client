import './Sidebar.css';

function Note() {
    return (
        <div className="Note">
            <h3>Title</h3>
            <p>
                From which we spring quasar rings of Uranus a still more glorious dawn awaits
                laws of physics the sky calls to us. Hearts of the stars venture great turbulent
                clouds a very small stage in a vast cosmic arena hydrogen atoms a very small stage
                in a vast cosmic arena.
            </p>
        </div>
    )
}

function Sidebar() {
    return (
        <aside className="Sidebar">
            <button className="ButtonNew"> + New Note </button>
            <Note></Note>
        </aside>
    );
}

export default Sidebar;
