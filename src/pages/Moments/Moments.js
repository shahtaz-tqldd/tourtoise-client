import React from 'react'
import moment from '../../assets/images/moment.png'
import {MdFavorite} from 'react-icons/md'
const Moments = () => {
    const blog =
    {
        "author": "Rahim Ibrahim",
        "authorImg": "https://news.berkeley.edu/wp-content/uploads/2022/11/Alex-Dimitrov-750.jpg"
    }
    return (
        <section className='lg:max-w-[80%] mx-auto mt-8 px-5 flex lg:flex-row flex-col'>
            
            <div className='lg:fixed lg:w-[27%]'>
                <img src={moment} alt='moment' className='h-[200px] w-[320px] object-cover rounded-lg' />
                <h2 className='text-4xl font-bold mt-4'>Moments</h2>
                <p className='text-lg'>Shared by People</p>
            </div>
            
            <div className='lg:w-[45%] lg:ml-[320px]'>
                <div className='bg-white px-6 mx-6 py-4 rounded-lg'>
                    {/* author */}
                    <div className='flex items-center my-4'>
                        <figure>
                            <img src={blog.authorImg} alt={blog.author} className="w-12 h-12 object-cover rounded-full" />
                        </figure>
                        <div className='ml-2'>
                            <h3 className='text-lg font-bold'>{blog.author}</h3>
                            <p className="text-sm">Posted On: Nov 12, 2022</p>
                        </div>
                    </div>
                    {/* text body */}
                    <p className=''>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
                        1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied
                        by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <hr className='mt-4 mb-3' />
                    <div className='flex justify-between items-center'>
                        <MdFavorite className='text-2xl' />
                        <p><b>430</b> People loved it</p>
                    </div>
                </div>
            </div>

            <div className='lg:w-[28%] lg:fixed lg:left-[72%]'>
                <h2 className='text-xl font-bold mb-4 font-poppins'>Do you have anything <br/>to share with your community?</h2>
                <button className="btn btn-primary btn-sm text-white normal-case rounded">Share Moment +</button>
                
                {/* <form>
                    <textarea className="textarea w-full h-32" placeholder="Write Your Moment"></textarea>
                    <button className='btn btn-sm btn-primary rounded-sm mt-3 text-white normal-case'>Post</button>
                </form> */}
            </div>

        </section>
    )
}

export default Moments