import React, {useState} from "react"
import {TextInput} from "flowbite-react"
import {AiOutlineSave} from "react-icons/ai"
import {FaTimes} from "react-icons/fa"
import "../form/formMovie.css"
import {ToastContainer, toast} from "react-toastify"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const FormMovie = () => {
  let init_data = {
   movie_name:"",
   movie_avatar:"",
   movie_content:"",
   movie_date:""
  }
  const [data, setData] = useState(init_data)
  const navigate = useNavigate()
  const handleOnChange = (e) => {
   setData({...data, [e.target.name]:e.target.value})
  }
  const handleSubmit = () => {
    if(data?.movie_name === ""){
     toast.error("Please enter your movie name", {position:"top-center"})
     return false
    }
    if(data?.movie_avatar === ""){
     toast.error("Please enter your movie thumbnail", {position:"top-center"})
     return false
    }
    if(data?.movie_content === ""){
     toast.error("Please enter your movie content", {position:"top-center"})
     return false
    }
    if(data?.movie_date === ""){
     toast.error("Please choose your movie date", {position:"top-center"})
     return false
    }else{
      axios.post("https://movies-film-api.herokuapp.com/api/movie/add", data).then((res) => {
       toast.success(res?.data?.message, {position:"top-center"})
       setTimeout(() => {
        navigate("/movie/list") 
       },1000);
       return true
      })
    }
  }
  return (
   <>
    <ToastContainer/>
    <div className="container p-2 mx-auto flex justify-center">
      <div className="background">
        <form className="form-add-movie">
          <h1 className="uppercase font-bold text-center text-blue-600 text-2xl">add movie</h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
            <label className="block p-2">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">Movie name</span>
              <TextInput 
                placeholder="Movie name" 
                name="movie_name"
                value={data?.movie_name}
                onChange={handleOnChange}
              />
            </label>
            <label className="block p-2">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">Movie thumbnail</span>
              <TextInput 
                placeholder="Movie thumbnail" 
                name="movie_avatar"
                value={data?.movie_avatar}
                onChange={handleOnChange}
              />
            </label>
            <label className="block p-2">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">Movie content</span>
              <TextInput 
                placeholder="Movie content" 
                name="movie_content"
                value={data?.movie_content}
                onChange={handleOnChange}
              />
            </label>
            <label className="block p-2">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">Movie date</span>
              <TextInput 
                placeholder="Movie date" 
                type="date" 
                name="movie_date"
                value={data?.movie_date}
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="flex justify-end btn-save">
            <div className="items-center py-10">
              <button className="text-white bg-blue-700 rounded-lg" type="button" onClick={handleSubmit}>
                <span className="flex items-center rounded-md text-sm px-4 py-2">
                  <AiOutlineSave/>  Save
                </span>
              </button>
              <button className="text-white bg-gray-500 rounded-lg ml-1" type="button">
                <span className="flex items-center rounded-md text-sm px-4 py-2">
                  <FaTimes/> Cancel
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default FormMovie