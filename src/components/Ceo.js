import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Ceo = () => {




    const [ceos, setCeos] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/ceo')
        .then(res=> res.json())
        .then(data => setCeos(data))
    },[])

    const handleonsubmit= (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const company = form.company.value;
        const ceo = {name, company};
        

fetch('http://localhost:5000/ceo', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(ceo),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    const newceos = [...ceos, data]
    setCeos(newceos);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
        // console.log(ceo);
        form.reset();

    }
    return (
        <div>

            <form onSubmit={handleonsubmit} action="">
                <input type="text" name='name' placeholder='name' />
                <input type="text" name='company' placeholder='company' />
                <input type="submit" value="submit" />
            </form>
            <h3>Number of ceo: {ceos.length} </h3>
            {
                ceos.map(ceo => <p key={ceo.id}>name:{ceo.name} company: {ceo.company} id: {ceo.id}</p>)
            }
        </div>
    );
};

export default Ceo;