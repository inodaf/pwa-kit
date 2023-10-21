## `[module.name]/repos`

This directory serves as the single source of truth for _CRUD_ (Create, Read, Update, Delete)
operations within a module. It contains the implementations responsible for handling data from both internal and
external sources. The key concept behind repositories is to keep them **decoupled from specific frameworks**, although
the use of fetching libraries is allowed.

```ts
// @ modules/profile/repos/preferences.ts
import {meAPI as api} from "@/modules/profile/apis/me";
import type {Preferences} from "@/modules/profile/contracts/Preferences";

export class PreferencesRepository {
  constructor(
    private readonly cache: Cache,
    private readonly meAPI: MeAPI = api,
    private readonly logger: Logger = sentry,
  ) {
  }

  async get(): AsyncMaybe<Preferences> {
    if (this.cache.has("preferences")) return this.cache.get("preferences");
    const [preferences, error] = await this.meAPI.get<Preferences>("/preferences").json();

    if (preferences) {
      this.cache.set("preferences", preferences);
      return preferences;
    }

    this.logger.error('get_preferences', error)
    return null
  }
}
```

Feel free to adapt and customize the repository implementation based on your specific module's requirements.

Remember, repositories play a crucial role in managing data operations within the module and promoting separation of
concerns. They provide a centralized and decoupled approach to handle data, making it easier to maintain and extend the
application.

Make sure to organize your repositories based on the specific entities or data types they handle within the module.