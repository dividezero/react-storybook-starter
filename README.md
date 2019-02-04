# React Starter with ESlint, Prettier, Husky and Storybook

Basically what it says on the box

-[x] React
-[x] Storybook
-[x] eslint
-[x] prettier configs
-[x] husky precommit linting
-[x] netlify single pager config
-[ ] dockerfile


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Install dependencies
```
npm i
```

Run for dev
```
npm start
```


## Storybook

Storybook is implemented
```
npm run storybook
```
then go to `localhost:9001`


### And coding style tests

Eslint is implemented
```
npm run lint
```

So is prettier
```
npm run prettier
```

Precommit hooks are also in effect meaning you wont be able to commit failed styling code

## Deployment

Build the minimized webapp
```
npm run build
```
Content to be hosted can be found in the `/build` directory
