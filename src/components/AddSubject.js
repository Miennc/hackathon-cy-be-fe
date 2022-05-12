import React from 'react'
import { useState } from 'react'
export default function AddSubject() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const handSubmit = ()=>{

    }
  return (

    <div>
         <div className=" mt-5">
            <form enctype="multipart/form-data" method="post" onSubmit={handSubmit}>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
          <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-lx font-serif">Title:</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="title" id="title" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                <span className="text-red-500 text-xs italic">{message.title}</span>

              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg font-serif">Content:</label>
               
                <textarea id="description"  onChange={(e)=>setContent(e.target.value)} cols={30} rows={10} placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" defaultValue={""} />
                <span className="text-red-500 text-xs italic">{message.content}</span>
              </div>
              <div>
                <label htmlFor="image" className="text-lx font-serif">image:</label>
                <input type="file" accept="image*/"  onChange={(e)=>setImage(e.target.files[0])} id="image" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                <span className="text-red-500 text-xs italic">{message.image}</span>
              </div>
              <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD ARTICLES</button>
            </div>
          </div>
        </div>
       </form>
        </div>
    </div>
  )
}
