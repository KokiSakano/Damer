install:
	docker-compose build

up:
	docker-compose up -d

next:
	docker-compose exec web-client npm run dev

next-sb:
	docker-compose exec web-client npm run storybook
