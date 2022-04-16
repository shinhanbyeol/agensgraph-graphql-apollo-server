export default function ArgumentsToCypher (args) {
  const existArgsCount = Object.keys(args).filter((key) => (args[`${key}`] !== undefined)).length -1;  
  let cypher = '{ '; 
  try {
    // make key & value Cypher string;
    Object.keys(args).forEach((key, index) => {
      const value = args[`${key}`];
      const lastIndexYn = existArgsCount === index;

      if (value !== undefined) {
        cypher += String(`${key}: `);                
        const type = typeof(value);
        
        switch (type) {
          case 'string':
            cypher += `'${value}'${lastIndexYn ? '' : ', '}`
            break;    
          default:
            cypher += `${value} ${lastIndexYn ? '' : ', ' }`
            break;
        }
      }
    });
  } catch (error) {
    cypher = ''; 
  }
  cypher += ' }';
  cypher = (existArgsCount < 0 ) ? '' : cypher;  
  return cypher;
}