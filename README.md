# Simple WildDuck

Simple WildDuck is a free and open-source wrapper for the WildDuck API. It simplifies API requests by providing well-documented TypeScript functions, making it easy to integrate WildDuck into any project.

Based completely on the existing API: https://docs.wildduck.email/api/

- [Setup and Usage](#setup-and-usage)
- [Contributing](#contributing)
  - [Project Structure](#project-structure)
- [Useful Resources](#useful-resources)

## Setup and Usage

```typescript
import wd from "@absolit/simple-wildduck";

// initial setup, only have to do once
wd.wdInit({
	baseUrl: "https://www.your-wildduck-server.com",
	accessToken: "my-access-token",
	xAccessToken: "HeaderXAccessToken",
});

// simply make a request as such - note you will receive headers as well as data
const users = await wd.getUsers({ limit: 10 });

// reap the data rewards
if (users.data.success && users.data.results.length > 0) {
	console.log(users.data.results[0].address);
}
```

## Contributing

### Project Structure

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

## Useful Resources

- [WildDuck](https://wildduck.email)
- [WildDuck API](https://docs.wildduck.email/api/)
- [WildDuck Docs](https://docs.wildduck.email/#/)

---

## MeetingPal - Simplify Voting in Meetings

[MeetingPal](https://meetingpal.co.za) is a user-friendly app that allows for transparent voting during online, hybrid, or in-person meetings. This revolutionary software can be used for community schemes, professional bodies, associations, or trusts as it enables attendees to vote securely from anywhere in the world using only a mobile device. Enhance your meeting experience with MeetingPal.

---
