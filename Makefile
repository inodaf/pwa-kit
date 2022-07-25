all: setup post_setup

setup:
	@echo '⚡️ Installing Volta...'
	@[ -z "$(which volta)" ] || curl https://get.volta.sh | bash
	@echo '📚 Installing pnpm...'
	@[ -z "$(which pnpm)" ] || curl -fsSL https://get.pnpm.io/install.sh | sh -
	@echo '🧱 Setting up project...'
	@volta fetch node
	@pnpm install

post_setup:
	@echo '🥸 Finishing MSW Setup...'
	@pnpm msw init public/ --save
	@clear
	@echo '🎉 Setup complete! You can now run `pnpm dev`.'