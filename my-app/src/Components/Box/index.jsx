import React from 'react'
import "./Box.css"

function Box(props) {
    return (
        <div class="fourth_1 shadow">
            <span class="span_category">{props.isNew && "nowość"}</span>
            <h2 class="fourth_header">{ props.title }</h2>
            <p class="p_text">{props.description}</p>
            <button class="read_more">Czytaj dalej... </button>
        </div>
    )
}

export default Box
