import React,{ useState } from 'react';

function AddContent(props) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [selectedAudio, setSelectedAudio] = useState([]);
    const [selectedImage, setSelectedImage] = useState([]);
    const [file, setFile] = useState([])
    const handSubmit = ()=>{

    }
    
    const imageChange = (e,id)=>{
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectedImage((prevImage) => prevImage.concat(fileArray));
            setFile(e.target.files[0]);
        }
    }

    const videoChange = (e) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectedVideo((prevImage) => prevImage.concat(fileArray));
            setFile(e.target.files[0]);
        }
    }

    const audioChange = (e) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectedAudio((prevImage) => prevImage.concat(fileArray));
            setFile(e.target.files[0]);
        }
    }

    const renderImage = (sources) => {
        return sources?.map((films, index) => {
            return (<div className="w-[600px] h-auto max-h-[600px] relative" key={index}>
                <img src={films} alt="" />
            </div>)
        })
    };

    const renderVideo = (sources) => {
        return sources?.map((films, index) => {
            return (<div className="w-[600px] h-auto max-h-[600px] relative" key={index}>
                <video className="w-auto h-auto object-cover shadow" controls>
                  <source src={films}  type="video/mp4" />
                  <source src={films}  type="video/ogg" />
                </video>
            </div>)
        })
    };

    const renderAudio = (sources) => {
        return sources?.map((films, index) => {
            return (<div className="w-[600px] h-auto max-h-[600px] relative" key={index}>
                <audio controls>
                    <source src={films} type="audio/ogg" />
                    <source src={films} type="audio/mpeg" />
                </audio>
            </div>)
        })
    };

    console.log(title);
    console.log(file);
    console.log(content);
    return (
        <div>
            <form className="editor mx-auto mt-10 w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl" enctype="multipart/form-data" method="post" onSubmit={handSubmit}>
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" type="text" />
                <span className="text-red-500 text-xs italic">{message.title}</span>
                <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here" onChange={(e)=>setContent(e.target.value)}></textarea>
                <span className="text-red-500 text-xs italic">{message.content}</span>
                <div className="icons flex text-gray-500 m-2">
                    <label className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7 flex justify-center items-center" for="image" >
                        <input className=" hidden invisible" onChange={imageChange} accept="image/*" id="image" type="file" />
                        <i className="fa-solid fa-image mt-[2px]"></i>
                    </label>
                    <label className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7 flex justify-center items-center" for="video" >
                        <input className=" hidden invisible" onChange={videoChange} accept="video/*" id="video" type="file" />
                        <i className="fa-solid fa-film mt-[2px]"></i>
                    </label>
                    <label className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7 flex justify-center items-center" for="audio" >
                        <input className=" hidden invisible" onChange={audioChange} accept="audio/*" id="audio" type="file" />
                        <i className="fa-solid fa-file-audio mt-[2px]"></i>
                    </label>
                    <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                </div>

                <div className="w-full h-full space-x-4 overflow-x-auto  pt-2 pr-2 ml-2">
                    {selectedImage && (
                        <div className="w-max space-x-4 flex">
                            {renderImage(selectedImage)}
                        </div>
                    )}
                    {selectedVideo && (
                        <div className="w-max space-x-4 flex">
                            {renderVideo(selectedVideo)}
                        </div>
                    )}
                    {selectedAudio && (
                        <div className="w-max space-x-4 flex">
                            {renderAudio(selectedAudio)}
                        </div>
                    )}
                </div>

                <div className="buttons flex mt-10">
                    <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                    <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
                </div>
            </form>
        </div>
    );
}

export default AddContent;