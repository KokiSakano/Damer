install:
	docker-compose build

up:
	docker-compose up -d
	docker-compose exec web-client yarn install

next:
	docker-compose exec web-client yarn run dev

next-sb:
	docker-compose exec web-client yarn run storybook
