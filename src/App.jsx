import React, { useState } from 'react'

function ActivationPage() {
  const [input, setInput] = useState({
    Activationcode:""
  })
  const RequestHandler = async (e) => {
    e.preventDefault();
    const ActivationBody = {
      ActivationToken: input.Activationcode
    };
    const response = await fetch('https://backendforurlshortender.onrender.com/api/Activation/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ActivationBody)
      })
    const data =await response.json();
    if (response.status == 200)
    {
        console.log(data.message);
        let massage = document.getElementById('msg');
        massage.innerText = `${data.message}`;
        setTimeout(() => {
          let msg1 = document.getElementById('msg');
          msg1.innerText = '';
        }, 8000)
        setInput({ Activationcode: '' });
        
      }
      else {
        console.log(data.message)
        let msg2 = document.getElementById('msg');
        msg2.innerText = `${data.message}`;
        setTimeout(() => {
          let msg3 = document.getElementById('msg');
          msg3.innerText = '';
        }, 8000)
         setInput({ Activationcode: '' });
        
    }
  }
  return (
    <div>
      <div>
        <p id='msg'></p>
      </div>
      <form onSubmit={RequestHandler}>
        <label>Activation code:</label>
        <input type="text"
          placeholder='Activationcode...'
          value={input.Activationcode}
          onChange={(e)=>{setInput({Activationcode:e.target.value})}}
        />
        <button type='submit'>Activate</button>
      </form>
    </div>
  )
}

export default ActivationPage;
