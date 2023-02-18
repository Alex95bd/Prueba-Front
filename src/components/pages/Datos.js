import React from 'react'

const Datos = () => {
    
  const [dato, setDato] = React.useState([])

    React.useEffect(() => {
       obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setDato(users)
    }


  return (
    <div>
      <section>
                <h2 className="subtitulo">Datos Requeridos</h2>
            </section>
            <ul>
                {
                    dato.map(item => (
                        <li key={item.id} >{item.name} - {item.email} - {item.phone}</li>
                    ))
                }
            </ul>
      
    </div>
  )
}

export default Datos;
