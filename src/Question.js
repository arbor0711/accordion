import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question() {
     return (
          <div className="question">
               <header>
                    <h4>این سوال اول است</h4>
                    <button><AiOutlinePlus /></button>
               </header>
               <p>این محتوا است</p>
          </div>
     )
}

export default Question
