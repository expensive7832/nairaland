import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import Topheader from '../components/Topheader';


function CreateArticle() {

    const { quill, quillRef } = useQuill();

    useEffect(() =>{

        if(quill){
            quill.on('text-change', (delta, oldDelta, source) =>{
                console.log(quill.root.innerHTML);
            })
        }

    }, [quill])

  return (
   <div className="create">
    <Topheader/>
    <div className="container">
        <form >

            <div>
                <label htmlFor="" className='form-label'>Title</label>
                <input type="text" className="form-control" />
            </div>

            <div>
                <label htmlFor="" className='form-label'>Main Photo</label>
                <input type="file" className="form-control" />
            </div>

            <div>
                <label htmlFor="" className='form-label'>Other Photo</label>
                <input type="file" className="form-control" />
            </div>

            <div className='mt-3'>
                <div ref={quillRef} />
            </div>



        </form>
    </div>
   </div>
  )
}

export default CreateArticle