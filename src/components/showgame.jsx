export const Showgame=({gamename, gameauthor, gameprice, gamedesc, gamerating})=>{

    return (
        
            <tr border="1" className="gamerow" >
                <td className="gamename">{gamename}</td>
                <td>{gameauthor}</td>
                <td className="gameprice">{gameprice}</td>
                <td>{gamedesc}</td>
                <td>{gamerating}</td>
                <td>"Yes</td>
            </tr>
    )
}
