import React from 'react'
import './chessboard.css'
import pawn from "./assests/pawn.png";

const Chess = () => {
  return (
    <div>
       <table className='border border-black container text-center w-50 mt-5 mb-5'>
        <tr>
            <td class="color1 p-4"><i class="fa-solid fa-chess-rook fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-knight fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-bishop fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-king fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-queen fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-bishop fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-knight fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-rook fs-1"></i></td>
        </tr>
        <tr>
            <td class="color2 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color1 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color2 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color1 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color2 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color1 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color2 p-4"><img  src={pawn} class=" img-fluid"/></td>
            <td class="color1 p-4"><img  src={pawn} class=" img-fluid"/></td>
        </tr>
        <tr>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
        </tr>
        <tr>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
        </tr>
        <tr>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
        </tr>
        <tr>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
            <td class="color2"></td>
            <td class="color1"></td>
        </tr>
        <tr>
            <td class="color1 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
        </tr>
        <tr>
            <td class="color2 p-4"><i class="fa-solid fa-chess-rook fs-1 text-white"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-knight text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-bishop text-white fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-queen text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-king text-white fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-bishop text-white fs-1"></i></td>
            <td class="color2 p-4"><i class="fa-solid fa-chess-knight text-white fs-1"></i></td>
            <td class="color1 p-4"><i class="fa-solid fa-chess-rook fs-1 text-white"></i></td>
        </tr> 
    </table>
    </div>
  )
}

export default Chess;