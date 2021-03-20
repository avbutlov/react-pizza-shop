import React from 'react'
import { Categories, SortPopup, PizzaItem } from '../components'

function Home({items}) {

    return (
        <div className="container">
          <div className="content__top">
            <Categories
              items={["All", "Meat", "Vegetarian", "Grill", "Spicy", "Calzone"]}
            />
            <SortPopup items={['popularity', 'price', 'alphabet']}/>
          </div>
          <h2 className="content__title">All pizzes</h2>
          <div className="content__items">
            {
              items.map((el, ind) => {
                return <PizzaItem key={el+ind} {...el}/>
              })
            }
            
      </div>
        </div>
    )
}

export default Home
