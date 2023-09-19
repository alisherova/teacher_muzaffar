import React from 'react'

export const ReviewsSecondView = () => {
    const numbers: number[] = [];

    while (numbers.length < 10) {
        const randomNumber = Math.floor(Math.random() * 11) + 9;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return (
        <div className='w-11/12 flex items-stretch gap-3 overflow-auto'>
            {numbers.map(i => {
                return <div className='min-w-[23%]'>
                    <img className='rounded-3xl' src={`/reviews/${i}.jpg`} alt="review" />
                </div>
            })}
        </div>
    )
}
