import React from 'react'
import '../../src/index.css'
import circle_icon from './Assets/circle.png'
import cross_icon from './Assets/cross.png'

const TicTacToe = () => {
  return (
    <div className='container text-center font-bold b'>
        <h1 className='title f'>Tac Tac Toe Game in <span>React</span></h1>
        <div className='board'>
            <div></div>
        </div>
        <button className=' border p-2 w-30 h-15 bg-black text-white'>Reset</button>
    </div>
  )
}

export default TicTacToe
