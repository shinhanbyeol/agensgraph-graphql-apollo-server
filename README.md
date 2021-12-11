# agensgraph-graphql-apollo-server
GraphQL apollo-server agensgraph 와 연동하기 (Demo) 

apllo-server 를 이용해 Graphql 서버를 만들고 agensgraph 에 데이터 베이스를 저장 할 수 있도록 연동 해 보았습니다.
# How to start
### 1. 테스트 DB 구축하기 Database build for test environment
````
docker run --name localagens -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d bitnine/agensgraph:latest 
````


### 2. graph_path 생성 & 테스트 데이터 만들기  Create graph_path & create test data  
````
create graph movie;

set graph_path = movie;

CREATE (n:movie {name:'The Matrix', rating:10});
CREATE (n:movie {name:'Spider Man:', rating:9}); 
CREATE (n:movie {name:'Kill Bill', rating:9});
CREATE (n:movie {name:'Good Will Hunting', rating:10});
CREATE (n:movie {name:'Fight Club', rating:9}); 
````

### 3. module install
````
yarn install
````

### 4. graphql server start

````
yarn start
````

### 5. playground graphql

http://localhost:3999/

The recommended browser is chrome.


