all: node_modules Caddyfile .env public/mockServiceWorker.js

node_modules: package.json pnpm-lock.yaml
	@echo '⚡️ Installing Volta...'
	@[ -z "$(which volta)" ] && curl https://get.volta.sh | bash
	@echo '📚 Installing pnpm...'
	@[ -z "$(which pnpm)" ] && curl -fsSL https://get.pnpm.io/install.sh | sh -
	@echo '🧱 Setting up project...'
	@volta fetch node@16.15.1
	@pnpm install

.env:
	@echo '🔑 Setting up .env...'
	@touch .env

public/mockServiceWorker.js:
	@echo '🥸 Finishing MSW Setup...'
	@pnpm msw init public/ --save
	@clear
	@echo '🎉 Setup complete! You can now run `pnpm dev`.'

Caddyfile:
	@echo '🔒 Setting up Caddy...'
	@echo 'localhost:3000 \n\nreverse_proxy 127.0.0.1:3001' > Caddyfile
