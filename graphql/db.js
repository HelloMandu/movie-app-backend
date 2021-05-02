export const people = [
  {
    id: 1,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
  {
    id: 2,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
  {
    id: 3,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
  {
    id: 4,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
  {
    id: 5,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
  {
    id: 6,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
  {
    id: 7,
    name: 'Sungmin Jo',
    age: 26,
    gender: 'man',
  },
];

export const getPerson = (id) => {
  return people.find((p) => p.id === id);
};
