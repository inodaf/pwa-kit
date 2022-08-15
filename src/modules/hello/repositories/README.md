## `module/repositories`

Define single-source of truth for _CRUDs_. This directory contains implementation for handle data from internal/external sources without relying on specific set of frameworks. The focus on Repositories that they must be decoupled from frameworks, altough fetching libraries are allowed.

```ts
// @ modules/user/respositories/preferences.ts
import { userAPI as api } from "@/configutations/apis/user";
import type { Preferences } from "@/modules/user/contracts/Preferences";

export class PreferencesRepository {
  constructor(private readonly cache: Cache) {}

  async get(): Promise<Preferences> {
    if (this.cache.has("preferences")) return this.cache.get("preferences");

    const preferences = await api.get("/preferences").json();
    this.cache.set("preferences", preferences);

    return preferences;
  }
}
```
