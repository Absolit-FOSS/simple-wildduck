# Simple WildDuck

**NOTE THAT THIS PACKAGE IS STILL IN DEVELOPMENT AND NOT READY FOR PRODUCTION**

Simple way to access the WildDuck api from your JavaScript

https://docs.wildduck.email/api/

## Basic Usage

```typescript
import wd from "simple-wildduck";

// initial setup, only have to do once
wd.wdInit({
	baseUrl: "https://www.your-wildduck-server.com",
	accessToken: "my-access-token",
	xAccessToken: "HeaderXAccessToken",
});

// simply make a request as such
const users = await wd.getUsers({ limit: 10 });

// reap the data rewards
if (users.success && users.results.length > 0) {
	console.log(users.results[0].address);
}
```

## Project Structure

- `src/` -> All source code goes here
- `src/models` -> Models that can be used everywhere goes here
- `src/requests` -> All WildDuck request endpoints
  - `src/requests/.../index.ts` -> Exports all request functions
  - `src/requests/.../config.ts` -> Config to be applied to all requests
  - `src/requests/.../models.ts` -> All models used in related requests
  - `src/requests/.../get.ts` -> All GET request functions
  - `src/requests/.../delete.ts` -> All DELETE request functions
  - `src/requests/.../post.ts` -> All POST request functions
  - `src/requests/.../put.ts` -> All PUT request functions
- `src/setup` -> Module setup, required functions when imported into your project
