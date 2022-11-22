## `module/contracts`

Directory intended for storing type definitions for the external services the application rely on.

```ts
// @ modules/user/contracts/SignUpResponse.ts
export type SignUpResponse = {
  token: string;
};

// @ modules/user/contracts/SignUpRequest.ts
export type SignUpRequest = {
  email: string;
  password: string;
};
```
