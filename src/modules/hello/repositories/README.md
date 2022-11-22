## `module/repositories`

Define single-source of truth for _CRUDs_. This directory contains implementation for handle data from internal/external sources without relying on specific set of frameworks. The idea on Repositories is that they must be decoupled from frameworks, although fetching libraries are allowed.

```ts
// @ modules/user/repositories/preferences.ts
import { userAPI as api } from "@/configurations/apis/user";
import type { Preferences } from "@/modules/user/contracts/Preferences";

export class PreferencesRepository {
  constructor(
    private readonly cache: Cache,
    private readonly userAPI: UserAPI = api,
  ) {}

  async get(): Promise<Preferences> {
    if (this.cache.has("preferences")) return this.cache.get("preferences");

    const preferences = await this.userAPI.get("/preferences").json();
    this.cache.set("preferences", preferences);

    return preferences;
  }
}
```
