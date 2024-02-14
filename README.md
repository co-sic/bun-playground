# cosmo-bun-apollo-server
Run:
```
docker compose build
docker compose up
```
Navigate to http://localhost:4501/ and execute the following query:
```
{
  offers {
    id
    __typename
    ... on ExistingCustomerOffer {
      __typename
      customer {
        id
        customerNumber
        companyName
      }
    }
    ... on AdditionalServiceOffer {
      __typename
      customer {
        customerNumber
        companyName
      }
    }
    ... on NewCustomerOffer {
      __typename
      lead {
        id
        companyName
      }
    }
  }
}
```
If you add the id field to customer on AdditionalServiceOffer, it works.