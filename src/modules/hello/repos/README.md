## `[module]/repos`

Define single-source of truth for _CRUD_ operations. This directory contains implementation to handle data from internal/external sources. The idea on Repositories is that they must be **decoupled** from frameworks, although fetching libraries are allowed.

```ts
// @ modules/profile/repos/preferences.ts
import { meAPI as api } from "@/modules/profile/apis/me";
import type { Preferences } from "@/modules/profile/contracts/Preferences";

export class PreferencesRepository {
  constructor(
    private readonly cache: Cache,
    private readonly meAPI: MeAPI = api,
    private readonly logger: Logger = sentry,
  ) {}

  async get(): AsyncMaybe<Preferences> {
    if (this.cache.has("preferences")) return this.cache.get("preferences");
    const [preferences, error] = await this.meAPI.get("/preferences").json();

    if (preferences) {
      this.cache.set("preferences", preferences);
      return preferences;
    }

    this.logger.error('get_preferences', error)
    return null
  }
}
```
