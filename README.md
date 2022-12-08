# Hi, I'm Felipe Rivera! 👋

### This is the Henry challenge

Welcome to the solution of the challenge, I hope you like it. Any questions you can contact me through my social networks:
- [Linkedin](https://www.linkedin.com/in/piperiver/)
- gmail: piperiver7@gmail.com

## Installation

Install henry-node with npm

```bash
    git clone https://github.com/piperiver/henry-node.git
    cd henry-node
    npm install
    npm run dev
```

**Note:** _Create the .env file by copying the variables from the .env.example file_
## Tech Stack

**For Development**

- typescript
- eslint
- prettier
- environment file
- ts-standard

**For App Funcionality**

- express
- mongoose
- cors
- dotenv

**For Deployment**

- railway provider

**Best Practices**
- SOLID principles were applied
- clean code


## API Reference

#### Get all courses

```http
  GET /courses
```

#### Get course

```http
  GET /courses/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Filter courses

```http
  POST /courses/filters
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Optional**. title of course (similar to like). case insensitive |
| `language`      | `string` | **Optional**. language course (camelCase), example: 'Spanish' |
| `completed`      | `boolean` | **Optional**. status of course |


#### Migration

```http
  GET /migrate
```
Insert the courses to the mongoDB database

## Database
MongoDB

## Infraestructure
![image](https://user-images.githubusercontent.com/20852127/206514951-d18b07b7-5ec4-4cf9-8f0c-458a3f4969f8.png)
