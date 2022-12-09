import React from 'react'

const AddNotesModal = () => {
    return (
        <div>
            <input type="checkbox" id="addNotes-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="addNotes-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">Add a Note</h3>
                    <form>
                        <input type="text" placeholder="Title" className="input input-bordered w-full" />
                        <textarea className="textarea w-full h-32 input-bordered mt-3" placeholder="Write Your Opinion"></textarea>
                        <button className='btn btn-sm btn-primary rounded-md mt-3 text-white normal-case'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNotesModal