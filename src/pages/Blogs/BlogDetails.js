import React from 'react'
import { HiLink, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { MdOutlineFavorite, MdOutlineSaveAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'

import useTitle from '../../hooks/useTitle'
import Comments from './components/Comments'

const BlogDetails = () => {
    useTitle('Sajek Valley')
  
    const blog =
    {
        "author": "Rahim Ibrahim",
        "authorImg": "https://news.berkeley.edu/wp-content/uploads/2022/11/Alex-Dimitrov-750.jpg"
    }

    return (
        <section className='lg:max-w-[1250px] mx-auto px-5'>
            <div className='flex mt-4'>
                <div className='lg:w-2/3'>
                    <Link to='/blogs' className='flex items-center text-lg my-4'> <HiOutlineArrowNarrowLeft /> &nbsp; Go Back</Link>
                    
                    {/* blog head */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/1200px-Sajek_Valley_2.jpg" alt="sajek valley" className='h-[400px] w-full object-cover rounded-lg' />
                    <h1 className='text-3xl font-bold mt-5'>How to go Cox's Bazar in 5 hours</h1>
                    <div className='flex justify-between'>
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

                        <div className='grid grid-cols-3 gap-5 text-xl'>
                            <Link to='/' className="tooltip tooltip-success" data-tip="Get Link"><HiLink /></Link>
                            <Link to='/' className="tooltip tooltip-error" data-tip="Add to Favourite"><MdOutlineFavorite/></Link>
                            <Link to='/' className="tooltip tooltip-primary" data-tip="Save for later"><MdOutlineSaveAlt/></Link>

                        </div>
                    </div>
                    
                    {/* Blog body */}
                    <p className='text-justify'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
                        1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied
                        by English versions from the 1914 translation by H. Rackham.</p>
                    
                    {/* comments */}
                    <h2 className='mt-8 mb-4 text-2xl font-bold'>Comments</h2>
                    <Comments/>
                </div>
                <div className='lg:w-1/3'>

                </div>
            </div>
        </section>
    )
}

export default BlogDetails