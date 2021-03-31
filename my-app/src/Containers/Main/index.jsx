import React from 'react'
import "./Main.css"

function Main() {
    return (
        <div class="third flex">
        <div class="slider_and_arrows flex">
            <img class="arrows arrow1" src="https://cdn.pixabay.com/photo/2017/05/11/12/24/green-2304005_960_720.png"/>
            <img class="slider" src="https://cdn.pixabay.com/photo/2019/09/14/12/40/iceland-4475920_960_720.jpg"/>
            <img class="arrows arrow2" src="https://cdn.pixabay.com/photo/2017/05/11/12/24/green-2304007_960_720.png"/>
        </div>
        <div class="third_h flex">
            <h2 class="third_center flex">H2</h2>
            <h4 class="third_center flex">H4</h4>
            <textarea class="textarea third_center flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper eget duis. Non tellus orci ac auctor augue mauris augue neque gravida. Mattis vulputate enim nulla aliquet porttitor lacus. Amet dictum sit amet justo.</textarea>
            <div class="third_text flex">
                <p class="th_te flex">Porttitor massa id neque aliquam.</p>
                <p class="th_te flex">Amet est placerat in egestas erat.</p>
            </div>
            <button class="button third_center">Button</button>
        </div>
    </div>
    )
}

export default Main
