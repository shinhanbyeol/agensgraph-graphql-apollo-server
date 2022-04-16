import connection from './agensGraphRepository';

const scheme = 'movie'

export const movies = async () => {
  const client = await connection(scheme);
  const result = await client.query(`match(n: movie) return properties(n);`);
  client.end();
  return result.rows.map((data) => data.properties);
};

export const movie = async (name) => {
  const client = await connection(scheme);
  const result = await client.query(`match(n: movie) where n.name ='${name}' return properties(n)`);
  client.end();
  return result.rows.map((data) => data.properties)[0];
};

export const createMovie = async (name, rating) => {
  const client = await connection(scheme);
  const result = await client.query(`create (n: movie {name: '${name}', rating: ${rating}}) return properties(n);`);
  client.end();
  return result.rows.map((data) => data.properties)[0];
}
