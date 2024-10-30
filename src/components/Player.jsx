import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        // 'good' setIsEditing(isEditing ? false : true)
        // 'best' setIsEditing(!isEditing);
        setIsEditing((editing) => !editing); //better 
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);

    }
    let editPlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editPlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}