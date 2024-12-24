import { useState, useEffect } from "react"

function App() {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    console.log('effect', {enable});
  },[enable])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: 'translate(0px, 0px)',
      }}/>
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar ' : 'Activar '}seguir puntero
      </button>
    </main>
  )
}

export default App
