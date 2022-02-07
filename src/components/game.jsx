import { useEffect} from 'react'
import { useState } from "react";
import {GameInput} from './input'
import { Showgame } from './showgame';

export const Game=()=>{

    const [list, setList]=useState([])
    useEffect(()=>{
        getData();
    },[])

    function getData(){
        fetch('https://fake-server-test.herokuapp.com/games?_sort=gamename&_order=asc')
        .then((d)=>d.json())
        .then((res)=>{
            setList(res)
        })
    }
    function getDatasortedPrice(){
        fetch('https://fake-server-test.herokuapp.com/games?_sort=gameprice&_order=asc')
        .then((d)=>d.json())
        .then((res)=>{
            setList(res)
        })
    }
    function getDatasortedRating(){
        fetch('https://fake-server-test.herokuapp.com/games?_sort=gamerating&_order=asc')
        .then((d)=>d.json())
        .then((res)=>{
            setList(res)
        })
    }
    return (<div>
        <h1>Game Shop</h1>
        <GameInput getData={getData} />
        <hr/>
        <button id="sortbyprice" onClick={getDatasortedPrice}>Sort by price</button>
        <button id="sortbyrating" onClick={getDatasortedRating}>Sort by rating</button>
        <hr/>
        <table id="table" border="1">
            <thead>

        <tr>
                <th>name</th>
                <th>author</th>
                <th>price</th>
                <th>desc</th>
                <th>rating</th>
                <th>forkid</th>
            </tr>
            </thead>
        <tbody>

            {list.map((i)=>{
                return (<Showgame gamename={i.gamename} gameauthor={i.gameauthor} gameprice={i.gameprice} gamedesc={i.gamedesc} gamerating={i.gamerating} />)
            })
        }
        </tbody>
        </table>
        
    </div>)
}