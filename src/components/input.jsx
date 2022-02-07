import { useState } from "react";

export const GameInput = ({getData}) => {
  const [values, setValues] = useState({
    gamename: "",
    gameauthor: "",
    gameprice: "",
    gametags: "",
    forkids: true,
    gamedesc: "",
    gamerating: ""
  });

  const rating = [1, 2, 3, 4, 5];
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  function postData() {
    fetch('https://fake-server-test.herokuapp.com/games',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(()=>getData())
  }

  return (
    <div>
      <form id="addgame"
        onSubmit={(e) => {
          e.preventDefault();
          postData();
          document.getElementById("addgame").reset();
        }}
      >
        <input
          type="text"
          onChange={set("gamename")}
          name="gamename"
          placeholder="game name" required
        />
        <input
          type="text"
          onChange={set("gameauthor")}
          name="gameauthor"
          placeholder="game author"
        />
        <input
          type="number"
          onChange={set("gameprice")}
          name="gameprice"
          placeholder="game price"
        />
        <textarea
          type="text"
          onChange={set("gamedesc")}
          name="gamedesc"
          placeholder="gamedesc"
        />
        <input
          type="boolean"
          onChange={set("forkids")}
          name="forkids"
          placeholder="forkids"
        />
        <input
          type="text"
          onChange={set("gametags")}
          name="gametags"
          placeholder="gametags"
        />
        <br />
        <select value={values.gamerating} name='gamerating' onChange={set("gamerating")}>
          <option value="">Select rating</option>
          {rating.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input type="Submit" value="submit" />
      </form>
    </div>
  );
};
