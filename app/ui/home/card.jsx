import Image from 'next/image';
import React from 'react';

export default function Card({ id, name, image, role, color }) {
    const fillColor = `#${color[0]}`;
    const nameUpper = name.toUpperCase()

    return (
        <article
            key={id}
            className="m-2 w-36 h-[240px] lg:w-44 lg:h-[286px] hover:scale-110 relative transition ease-in-out delay-100 "
        >
            <svg
                className="absolute w-full h-full bottom-0"
                width="171"
                height="235"
                viewBox="0 0 171 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19 9.75V9.5C19 4.52944 23.0294 0.5 28 0.5H94.75H161C166.247 0.5 170.5 4.7533 170.5 10V206.5C170.5 211.471 166.471 215.5 161.5 215.5C155.977 215.5 151.5 219.977 151.5 225.5C151.5 230.471 147.471 234.5 142.5 234.5H10C4.75329 234.5 0.5 230.247 0.5 225V28.25C0.5 23.4175 4.41751 19.5 9.25 19.5C14.6348 19.5 19 15.1348 19 9.75Z"
                    fill={fillColor}
                    fillOpacity="0.6"
                    stroke={fillColor}
                    strokeWidth={2}
                />
            </svg>
            <div className='relative z-10 size-full'>
                <Image src={image} alt={name}
                    fill={true}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    className="absolute -mt-6 z-20 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
                
                <h1 className="absolute bottom-14 text-[12px] lg:text-base left-4  font-val z-40 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.6)]">{nameUpper}</h1>
                <img src={role.displayIcon} alt={role.displayName}  className="absolute top-8 right-4 z-10 w-6 lg:w-[38px] drop-shadow-[4px_4px_2px_rgba(0,0,0,1)]" />
            </div>
        </article>
    );
}
