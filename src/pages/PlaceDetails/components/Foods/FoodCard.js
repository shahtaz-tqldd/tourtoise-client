import React from 'react'

const FoodCard = ({ food, setFoodSelect }) => {
    const { name, img, detail } = food
    return (
        <label htmlFor="food-modal">
            <div onClick={() => setFoodSelect(food)} className='flex rounded-lg bg-[#eaeaeb] cursor-pointer hover:bg-[#C0EEE4] hover:shadow-lg h-24'>
                <img src={img} alt="food" className="h-full w-1/3 rounded-l-lg object-cover" />
                <div className='p-4'>
                    <b>{name}</b>
                    <p>{detail}</p>
                </div>
            </div>
        </label>
    )
}

export default FoodCard