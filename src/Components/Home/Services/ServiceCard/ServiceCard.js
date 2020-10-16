import React from 'react';
import './ServiceCard.css';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 25, (x - window.innerWidth / 2) / 25, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceCard = ({service}) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 40 } }))

    const {img, title, description} = service;

    const history = useHistory()
    const placeOrder = () => {
        history.push(`/placeOrder/${title}`);
    }

    return (
        <div className="col-lg-4 col-md-6 col-12 mt-2">
            <animated.div 
                onClick={placeOrder} className='service-card text-center'
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}           
            >
                {
                    service.image ?
                    <img src={`data:image/png;base64,${service.image.img}`} alt=""/>
                    :<img src={img} alt="" />
                }
                <h5 className='black'>{title}</h5>
                <p>{description}</p>
            </animated.div>
        </div>
    );
};

export default ServiceCard;