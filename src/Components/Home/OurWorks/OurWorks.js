import React, { useEffect } from 'react';
import { useState } from 'react';
import './OurWorks.css';


const OurWorks = () => {

    const [counter, setCounter] = useState(1);
    const [radio1, setRadio1] = useState(1);
    const [radio2, setRadio2] = useState(2);
    const [radio3, setRadio3] = useState(3);
    const [radio4, setRadio4] = useState(4);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 5000);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setRadio1(radio1 => radio1 + 4)
        }, 15000)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setRadio2(radio2 => radio2 + 5)
        }, 20000)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setRadio3(radio3 => radio3 + 6)
        }, 25000)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setRadio4(radio4 => radio4 + 7)
        }, 3000)
    }, [])



    return (
        <div class="our-works">
            <h2 className='text-center'><span className='text-white'>Here are some of </span><span style={{ color: 'green' }}>our works</span></h2>
            <div>
                <div class="slider">
                    <div class="slides">

                        <input type="radio" name="radio-btn" id="radio1" checked={counter === radio1 ? true : false} />
                        <input type="radio" name="radio-btn" id="radio2" checked={counter === radio2 ? true : false} />
                        <input type="radio" name="radio-btn" id="radio3" checked={counter === radio3 ? true : false} />
                        <input type="radio" name="radio-btn" id="radio4" checked={counter === radio4 ? true : false} />

                        <div class="slide first">
                            <img class="img-fluid" src="https://i.imgur.com/KMl3VQx.png" alt="" />
                        </div>
                        <div class="slide">
                            <img class="img-fluid" src="https://i.imgur.com/lAzSjtc.png" alt="" />
                        </div>
                        <div class="slide">
                            <img class="img-fluid" src="https://i.imgur.com/uhVhzJr.png" alt="" />
                        </div>
                        <div class="slide">
                            <img class="img-fluid" src="https://i.imgur.com/HyinDoo.png" alt="" />
                        </div>

                        <div class="navigation-auto">
                            <div class="auto-btn1"></div>
                            <div class="auto-btn2"></div>
                            <div class="auto-btn3"></div>
                            <div class="auto-btn4"></div>
                        </div>

                    </div>

                    <div class="navigation-manual">
                        <label for="radio1" class="manual-btn"></label>
                        <label for="radio2" class="manual-btn"></label>
                        <label for="radio3" class="manual-btn"></label>
                        <label for="radio4" class="manual-btn"></label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurWorks;