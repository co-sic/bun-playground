# cosmo-bun-apollo-server
Run:
```
docker compose build
docker compose up
```
Navigate to http://localhost:4500/ and execute the following query:
```graphql
{ 
    organization {
      id
      hasUnpaidFeatures
    } 
}
```
If you don't include hasUnpaidFeatures the query works. Otherwise, a 500 is thrown.