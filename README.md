## Quick demo Powered by 
- arash16/nuxt-ssr-cache (Plugin, Main power)
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
    1. Create .env file 
    2. Follow the .env.example fillin your site url(w/ no trailing /)
    3. Fill intergration key into ghost-key
    4. Run `npm install && npm run generate`
3. Bonus: Setup CI  
Simplely, you can wrote shell command to *"generate, commit, push"* by one-click, and let Github do the rest hosting job for you :tada:

### Note:
For demo purpose, dist/ is rm in .gitignore, no CI/CD here  

## Other use case
Rather than run locally, deploy thru one-click commit, you can also:

1. Fully Online include CI/CD (non-A JAM stack)
> Own a domain deploy ghost on it(host static on github ect.)
> Trigger CI build each time you update post
> Then, CD it to static hosting or CDN



###### JAMstack,Ghost, Static hosting, Github page 
