import {useState} from 'react'
export default function Player ({initialName,symbol}) {
    const [playerName,setPlayerName] = useState(initialName)
    const [isEditing,setIsEditing] = useState(false)
    function toggleButton (){
        setIsEditing((editing) => !editing)
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    return (
        <li>
            <span className="player">
              { !isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} required onChange={handleChange}/>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleButton}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}