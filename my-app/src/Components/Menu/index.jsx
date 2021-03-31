import React from 'react'

import "./Menu.css"

function Menu() {
    return (
        <div class="second_and_boxes">
        <div class="second flex">
            <div class="logo-outside">
                <img class="logo" src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png"/>
            </div>
            <div class="input-outside flex">
                <input class="input" type="search" placeholder="Wyszukiwarka"/>
                <img class="loupe" src="https://image.flaticon.com/icons/png/512/34/34202.png"/>
            </div>
            <div class="icons flex">
                <img class="icon" src="https://image.flaticon.com/icons/png/512/61/61109.png"/>
                <img class="icon" src="https://image.flaticon.com/icons/png/512/33/33702.png"/>
                <img class="icon" src="https://image.flaticon.com/icons/png/512/69/69366.png"/>
                <img class="icon" src="https://image.flaticon.com/icons/png/512/60/60580.png"/>
            </div>
        </div>
        <div class="boxes flex">
            <div class="box box_menu flex">
                <span class="menu">Menu</span>
                <span class="menu_a">A</span>
            </div>
            <div class="box">B</div>
            <div class="box">C</div>
            <div class="box">D
                <div class="shadow">
                    <div class="box_d">1</div>
                    <div class="box_d">2</div>
                    <div class="box_d">3</div>
                </div>
            </div>
            <div class="box">E</div>
            <div class="box">F</div>
        </div>
    </div>
    )
}

export default Menu
