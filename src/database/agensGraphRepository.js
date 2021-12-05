import ag from '@bitnine-oss/ag-driver';

const config = {
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
  host: '127.0.0.1',
  port: 5432
}

const connection = async (scheme) => {
  const client = new ag.Client(config);
  client.connect();
  await client.query(`set graph_path = ${scheme}`)
  return client;
}



export default connection;

