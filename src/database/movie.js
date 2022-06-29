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
  const matchRotationList = [];
  const edgeStack = {};
  const cypherlResultList = [];
  
  result.rows.forEach((data) => {
    let graphObj;
    const oid = `${data.n.id.oid}.${data.n.id.id}`;
    if (matchRotationList.indexOf(oid) === -1) {
      graphObj = Object({ gid: oid, ...data.n.props });
      if (data.e) {
        const edgelabelAndProps = {};
        edgelabelAndProps[`${data.e.label}`] = [{ ...data.m.props }];
        edgeStack[oid] = edgelabelAndProps;
      }
    } else {
      if (data.e) {
        if (edgeStack[oid][`${data.e.label}`]) {
          edgeStack[oid][`${data.e.label}`].push(data.m.props);
        } else {
          const edgelabelAndProps = {};
          edgelabelAndProps[`${data.e.label}`] = [{ ...data.m.props }];
          edgeStack[oid] = edgelabelAndProps;
        }
      }
    }
    matchRotationList.push(oid);
    if (graphObj) cypherlResultList.push(graphObj);
  });

  const graphqlResponse = cypherlResultList.map((graphObj) => {
    let gData;
    const edgeInfo = edgeStack[graphObj.gid];    
    delete graphObj.gid;
    gData = {
      ...graphObj,
      ...edgeInfo,
    }
    return gData;
  });

  return graphqlResponse;
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