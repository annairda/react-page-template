import React from 'react'
import Box from '../../Components/Box'

function Boxes() {
    const BoxesList = [
        { id: 1, title: "text1", isNew: true, description: "przykładowa treść 1"},
        { id: 2, title: "text1", isNew: false, description: "przykładowa treść 2"},
        { id: 3, title: "text1", isNew: false, description: "przykładowa treść 3"},
    ]
    return (
        <div className="fourth flex">
            { BoxesList.map (box => (
                <Box title = { box.title } key = {box.id} isNew = {box.isNew} description = {box.description}/>
            ))}            
        </div>
    )
}

export default Boxes
