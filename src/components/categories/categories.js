import React from 'react'

const Categories = ({items}) => {
    return (
        <div className="categories">
              <ul>
                <li className="active">All</li>
                {items.map((el, ind) => {
                    return <li key={el+ind}>{el}</li>
                })}
              </ul>
            </div>
    )
}

export default Categories
