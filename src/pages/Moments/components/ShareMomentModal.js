import React from 'react'
import '../../LoginRegister/style.css';

const ShareMomentModal = () => {
    return (
        <div>
            <input type="checkbox" id="shareMoment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="shareMoment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">Share your Moment</h3>
                    <form>
                        <textarea className="textarea w-full h-32 input-bordered mt-3" placeholder="Write Here"></textarea>
                        <p>Upload a photo</p>
                        <input type="file" className="my-2" /><br />
                        <div className='flex justify-end'>
                            <button className='btn btn-sm btn-primary rounded-md mt-3 text-white normal-case px-8'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShareMomentModal