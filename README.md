# cosmo-bun-apollo-server
Run:
```
docker compose build
docker compose up
```
Navigate to http://localhost:4501/ and execute the following query:
```
mutation {
  test(input: {signature: {recipientName: {firstName: "A", lastName: "B"} differentSignerName: null}}) {
    success
  }
}

```
Working examples:
```
mutation {
  test(input: {signature: {recipientName: {firstName: "A", lastName: "B"} differentSignerName: {firstName: "A", lastName: "B"}}}) {
    success
  }
}

```

```
mutation {
  test(input: {signature: {recipientName: {firstName: "A", lastName: "B"} }}) {
    success
  }
}

```