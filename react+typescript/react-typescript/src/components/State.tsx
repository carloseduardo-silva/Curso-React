
import { useState, ChangeEvent } from 'react';


 
 const State = () => {

    const [text, setText] = useState <string | null> (null)

    return (
      <div>
        <h3> O texto é {text}</h3>
        <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
      </div>
    );
  }

  export default State
