# 0x01-ES6_promises

## Requirements

- Your code will be tested using *Jest* and the command *npm* *run* *test*
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Files

*utils.js*

Use when you get to tasks requiring *uploadPhoto* and *createUser.*

```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

## Response Data Format

*uploadPhoto* returns a response with the format

```
{
  status: 200,
  body: 'photo-profile-1',
}
```

*createUser* returns a response with the format

```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```
