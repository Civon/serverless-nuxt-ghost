FORK FROM 
- Maxbrain0/nuxt-ghost-starter
- arash16/nuxt-ssr-cache

# Can't resolve w/ submodule problem, so just demo here(no CI/CD)  
(maybe docker next time)
In actual use, plz fallow instruction of ghost to build a instance aside. 

## Requirements

1. A ghost instance
2. This repo

## Installation

1. Setup ghost
    > `npm run setup && npm run start`
    > # do setting & add a intergration
2. Setup repo 
    > touch .env & copy intergration key into it
    > `npm run generate`

### Note:
For demo purpose, dist/ is rm in .gitignore
