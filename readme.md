# Health Check Elastic Search

Health check to system [elastic search](https://www.elastic.co/)

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-elastic-search/tree/master.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-elastic-search/tree/master)

## Install

```
$ npm install health-check-elastic-search
```

## Usage

```js
var healthCheckElasticSearch = require('health-check-elastic-search');

healthCheckElasticSearch.do({
  host: 'localhost:9200'
})
 .then(function(result){
    console.log(result); 
    
    /* 
      { health: false,
        success: 0,
        error: 1,
        details: 
         [ 
           { 
             name: 'localhost:9200',
             health: false,
             message: 'No Living connections' 
           } 
         ] 
      }
    */
 })
 .catch(function(error){
    console.log(error); 
 });
```
