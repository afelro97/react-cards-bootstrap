import React from 'react'

import image1 from '../assets/image1.jpg'
function Card() {
    return (
        <div className="card">
            <img src={image1} alt="" />
            <div className="card-body">
                <h4 className="card-title">My title</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in hendrerit sem. Cras rhoncus eu ante et aliquet. Nullam turpis urna, euismod eget turpis ac, sollicitudin scelerisque nisi. Vivamus consequat.</p>
            </div>
        </div>
    )
}

export default Card
