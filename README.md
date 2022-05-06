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

CREATE (m1:movie {name:'The Matrix', rating:10})
CREATE (m2:movie {name:'Spider Man:', rating:9})
CREATE (m3:movie {name:'Kill Bill', rating:9})
CREATE (m4:movie {name:'Good Will Hunting', rating:10})
CREATE (m5:movie {name:'Fight Club', rating:9})
create (r1: Review { reviewer: 'person1', review: 'good movie!', rating: 10})
create (r2: Review { reviewer: 'person2', review: '좋은 영화네요!', rating: 10})
create (r3: Review { reviewer: 'person3', review: '재밌어요!!', rating: 9})
create (r4: Review { reviewer: 'person4', review: '또보고 싶어요', rating: 9})
create (r5: Review { reviewer: 'person5', review: 'Wow fantastic', rating: 10})
create
(m1)<-[:reviewed]-(r1),
(m2)<-[:reviewed]-(r2),
(m3)<-[:reviewed]-(r3),
(m4)<-[:reviewed]-(r4),
(m5)<-[:reviewed]-(r5)
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


