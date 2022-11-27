import React from 'react'
import { Wave } from 'react-animated-text';

const Loading = () => {

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: 'center', fontSize: "40px" };

  return (
    <div style={style}>       
        <Wave
        text="LOADING DATA..."
        effect="stretch"
        effectChange="2"
        />
        <p>Your Request will be Landing Shortly...</p>
    </div>
  )
}

export default Loading