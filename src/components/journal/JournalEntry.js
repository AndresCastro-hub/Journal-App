import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>

            <div 
                style={{
                    backgroundSize : 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/c1/29/b9/c129b906d90920301b9cccec35984384.jpg)'
                }} 
                className='journal__entry-picture'
                >

            </div>

            <div className='journal__entry-body'>

                <p className='journal__entry-title'>
                    Aca va un titulo
                </p>

                <p className='journal__entry-content'>
                    Aca va el contenido jsahdkjhaskhfkjashdj
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
