# AbotPH API

AbotPH is a web app running on NodeJS, Express, and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node 10+

- MongoDB (Recommended: 4.2.5)

To provision a MongoDB using `docker-compose` and the provided `docker-compose.yml`

```
docker-compose -p abotph up -d mongo
```

### Installing

A step by step series of instructions that tell you how to get the server running

1. Install node modules

	```bash
	npm i
	```

2. Copy and rename `.env.example` to `.env`. Change default environment variables as needed.

3. Start the server.

	> :warning: See [Deploying via Docker](#deploying-via-docker) section for instructions on how to deploy the API via docker.

	3.a. `DEV` environment. (Default port: `3000`)

	```bash
	npm run dev
	```

	3.b. `PROD` environment. (Default port: `3000`)

	```bash
	npm run prod
	```

4. To ensure server is up and running, open postman or your favorite browser that you use and call `/healthcheck`

	```
	GET		http://localhost:{API_PORT}/healthcheck
	```

<!-- ## Running the tests

Explain how to run the automated tests for this system -->

## Deployment

### Deploying via Docker

1. Using `docker-compose`

	```bash
	docker-compose -p abotph up -d --build
	```

2. Using `docker`

	2.a. Build the docker image

	```bash
	docker build -t abotph-api:{semver} .
	```

	2.b. Provision a container

	```bash
	docker run --name={container-name} -d -p {API_PORT}:{HOST_API_PORT} abotph-api:{semver}
	```

## Built With

* [NodeJS](https://https://nodejs.org/)
* [ExpressJS](https://github.com/expressjs/express/)
* [MongoDB](https://www.mongodb.com/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **John Carlo Miel** - [Github](https://github.com/johncarlomiel)
* **Mart Rudolph Macion** - [Github](https://github.com/Martyce)
* **Patrick Maurice Pingol** - [Github](https://github.com/patrickpingol)
* **Virgilio Legaspi** - [Github](https://github.com/Verrrr)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->
