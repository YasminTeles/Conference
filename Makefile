.PHONY: help setup run dev test test-reports build lint lint-fix release

NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= yarn

help: ## Show help.
	@printf "A set of development's commands.\n"
	@printf "\nUsage:\n"
	@printf "\t make \033[36m<commands>\033[0m\n"
	@printf "\nThe Commands are:\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\t\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## Setup application.
	@$(PKG_MANAGER) install

run: ## Run production server.
	@$(PKG_MANAGER) run start

dev: ## Run local server.
	@$(PKG_MANAGER) run dev

test: ## Run tests.
	@$(PKG_MANAGER) run test --watch

test-reports: ## Run tests with reports.
	@$(PKG_MANAGER) run test --coverage

build: ## Build application.
	@$(PKG_MANAGER) run build

lint: ## Run lint.
	@$(PKG_MANAGER) run lint

lint-fix: ## Run lint and fix the files.
	@$(PKG_MANAGER) run lint --fix

release: ## Release application.
	@$(PKG_MANAGER) run release
