import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodModal from './FoodModal'

const Foods = () => {
    const foods = [
        {
            "id": 1,
            "name": "Bamboo Chicken",
            "img": "https://i.pinimg.com/originals/4b/24/fe/4b24feff9ec8b4e99227f1598dfd7b90.jpg",
            "detail": "great to eat"
        },
        {
            "id": 2,
            "name": "Alu paratha",
            "img": "https://static.toiimg.com/thumb/53109843.cms?width=1200&height=900",
            "detail": "savy green"
        },
    ]
    const [foodSelect, setFoodSelect] = useState(null)
    return (
        <div className='bg-white rounded-lg p-6 mt-5'>
            <h2 className='text-3xl font-bold mb-4'>Foods to Try out</h2>
            <div className='grid grid-cols-2 gap-4'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} setFoodSelect={setFoodSelect} />)
                }
            </div>
            {
                foodSelect &&
                <FoodModal data={foodSelect} />
            }
        </div>
    )
}

export default Foods