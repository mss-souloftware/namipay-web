import React from 'react'
import Image from 'next/image'

export default function ServicesCards(props) {
    return (
        <div className="card-col">
            <div className="imageBox">
                <Image src={props.imgUrl} layout='fill' objectFit='cover' />
            </div>
            <div className="cardTxt">
                <h3>{props.title}</h3>
                <p>
                    {props.pera}
                </p>
            </div>
        </div>
    )
}
