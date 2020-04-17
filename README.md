## Quick demo Powered by 
- arash16/nuxt-ssr-cache (Plugin, main power)
- Maxbrain0/nuxt-ghost-starter (Forked, theme)

# Solution for
1. Non server
2. Static hosting
3. Local Ghost CMS
## Situation
Runing Ghost on local machine and host blog on static Github Page, Netlify, Travis e.g.

## Requirements
### - A runing (local) ghost instance 

## Build step

1. Setup ghost  
    1. Go thru ghost-admin panel adding a custom intergration, 
    2. Copy the content key 
2. Setup repo 
    1. create .env file 
    2. Follow the .env.example fillin your site url(w/ no trailing /)
    3. Fill intergration key into ghost-key
    4. Run `npm install && npm run generate`

### Note:
For demo purpose, dist/ is rm in .gitignore, no CI/CD

## Other use case
1. Online CI/CD (non-A JAM stack)
> Own a domain deploy ghost on it(host static on github ect.), and trigger CI build each time you update post
> then, CD it to static hosting or CDN

2. Local CI/CD by selfhost gitlab ect.
> Almost same above, change the CI/CD localy

###### JAMstack,Ghost, Static hosting, Github page 