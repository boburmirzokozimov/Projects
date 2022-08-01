import React from 'react';
import Person from './Person';
function PersonsList() {
  const persons = [
    {
      skils: 'React',
      name: 'Boburmirzo',
    },
    {
      skils: 'Java',
      name: 'Botirali',
    },
    {
      skils: 'Vue',
      name: 'Dilafruz',
    },
    {
      skils: 'Angular',
      name: 'Safina',
    },
    {
      skils: 'Nothing',
      name: 'Ozodbek',
    },
  ];
  const personList = persons.map((person) =><Person person ={person}/>);
  return <div>{personList}</div>;
}

export default PersonsList;
