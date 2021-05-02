import { getPerson, people } from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getPerson(id),
  },
};

export default resolvers;
