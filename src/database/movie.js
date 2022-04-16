import connection from './agensGraphRepository';
import ArgumentsToCypher from '../util/ArgumentsToCypher';

const scheme = 'movie';

export const movies = async (args) => {
  const argsCypher = ArgumentsToCypher(args);
  const client = await connection(scheme);
  const result = await client.query(
    `match(n: Movie ${argsCypher})-[e]-(m) return n,e,m;`
  );
  client.end();
  return result.rows.map((data) => {    
    const graphObj = Object({ ...data.n.props });
    graphObj[`${data.e.label}`] = [{...data.m.props}]
    return graphObj;
  });
};

export const movie = async (args) => {
  const argsCypher = ArgumentsToCypher(args);
  const client = await connection(scheme);
  const result = await client.query(
    `match(n: movie ${argsCypher}) return properties(n) limit 1`
  );
  client.end();
  return result.rows.map((data) => data.properties)[0];
};

export const createMovie = async (args) => {
  const argsCypher = ArgumentsToCypher(args);
  const client = await connection(scheme);
  const result = await client.query(
    `create (n: movie ${argsCypher}) return properties(n);`
  );
  client.end();
  return result.rows.map((data) => data.properties)[0];
};