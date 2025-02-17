import {useEffect, useState} from "react";
import axios from "axios";


function App() {

  const API_URL = 'http://127.0.0.1:8000/'
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)

  const fetchData = async () => {
      useEffect(()=>{
        axios.get(`${API_URL}books/?page=${page}`)
            .then(
                (response) => {
                    console.log(response.data)
                    setBooks(response.data)
                },
                (error) => {
                    console.log(error)
                }
            )
      },[page])
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (books.next){
      setPage(page + 1)
    }
  }

  fetchData()

  return (
    <>
        <div className='books'>
            {books.results && books.results.map((book) => (
                <div className='book' key={book.id}>
                    <h2>{book.title}</h2>
                    <img src={book.image} alt=""/>
                </div>
            ))}
        </div>
        <div className='buttons'>
            <button onClick={()=>handlePrev()}>Prev</button>
            <p>{page}</p>
            <button onClick={()=>handleNext()}>Next</button>
        </div>
    </>
  )
}

export default App
