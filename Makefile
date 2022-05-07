install:
	docker-compose build

up:
	docker-compose up -d
	docker-compose exec web-client npm ci

next:
	docker-compose exec web-client npm run dev

next-sb:
	docker-compose exec web-client npm run storybook
