![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

# API Node.JS Template

A generic template, for quickly building Node.JS based API's, and fast deploy in Vercel host

## Features Include

- Folder/Files Structure
- MySQL Database Integration
- .Env File
- JSON Web Token (JWT)
- SOLID Principles
- Made With Git Flow
- Open for Pull Requests

## Get Start

- Clone this repository to destination folder in you on your machine

```bash
  git clone https://github.com/Paulo-2048/api-nodejs-template
```

- Go to the project directory

```bash
  cd api-nodejs-template
```

- Install dependencies

```bash
  npm install
```

- Change .env-example to .env, and this respectives environment variables

- PS. some files is empty or incomplete (like database file), since this informations is based on the aplication you will build, but this files will be quoted later

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SECRET` -> JWT SECRET

`HOSTDB` -> Database Host

`USERNAMEDB` -> Database Username

`PASSWORDDB` -> Database Password

`STANDARTDB` -> Database name

## Folder Structure

Most simple example project is this one, using following project structure.

```sh
project
├── api
    └── database
        └── connectionDatabase.js
    └──models
    └── routes
    └── index.js
└── config
    └── .env
    └── config.js
└── rules
└── utils
└── .gitignore
└── package.json
└── README.md
└── vercel.json
```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## FAQ

#### Whats the depe

Answer 1

#### Question 2

Answer 2

## Feedback

If you have any feedback, please reach out to me at paulo19032004@gmail.com
