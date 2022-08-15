## `module/contracts`

Directory intended for storing type definitions for the external services you use.

```ts
// @ modules/user/contracts/SignupResponse.ts
export type SignupResponse = {
  token: string;
};

// @ modules/user/contracts/SignupRequest.ts
export type SignupRequest = {
  email: string;
  password: string;
};
```
