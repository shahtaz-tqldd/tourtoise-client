import React from 'react'

const ReviewModal = () => {
    return (
        <div>
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">Talk about tourtoise</h3>
                    <form>
                        <select className="select w-full select-bordered">
                            <option disabled selected>Give a rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <textarea className="textarea w-full h-32 input-bordered mt-3" placeholder="How do you feel about tourtoise"></textarea>
                        <button className='btn btn-sm btn-primary rounded-md mt-3 text-white normal-case'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewModal