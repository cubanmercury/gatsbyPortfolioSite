# Gatsby and Typescript portfolio project

## Useful commands (see package.json):

`gatsby develop` -- start application in development mode
`gatsby clean` -- clean cache and public static files
`gatsby build` -- build gatsby application in production mode
`npm run type-check` -- Run typescript type checking on project (see tsconfig.json)
`npm run lint` -- eslint on .js, .jsx, .ts and .tsx files
`npm run lint:fix` -- Fix linting issues on js and ts files

## Husky

- Husky allows us to run pre and post-commit hooks. (.huskyrc.json)
- This will type-check all your files on the pre-commit hook and run the lint-staged command

## Lint-staged

- Lint-staged allows us to run a linter over just the files which are being staged for a commit. (.lintstagedrc.json)
- This will run your lint:fix script on commit whilst also running Prettier on _.scss , _.json and \*.md files. This will only run on files that are staged.
- If you do want to be able to commit ignoring the linting, you can add a `--no-verify` to your commit command in the terminal. ie, (`git commit -m "commit message" --no-verify`)

## Front-end tools

## Deployment

https://www.gatsbyjs.org/tutorial/part-one/#deploying-a-gatsby-site
