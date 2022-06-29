This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You will need to install mongodb locally:

First download Compass. Compass is a GUI for querying mongo database. It's not manditory to have but makes debugging much easier.
https://www.mongodb.com/products/compass -> Click "Download Now" button. -> Click "Download" button.
Download the zipped file and extract it to its folder.
Click on the installer and follow the prompts to install it.

You can follow links to find and download the version of mongodb:
https://www.mongodb.com/database/free -> search for MongoDB Community Server
https://www.mongodb.com/try/download/community -> select a version (used 5.0.9) and click download
Download the zipped file and extract it to its folder.
Open a terminal
run command (for mac): sudo mkdir -p ~/data
run command: cd ~/data
run command: pwd
Take note of the path as this will be used later.
navigate to downloaded zip file and cd to its extracted folder
run command: cd bin
run command (insert dbpath from pwd above step): sudo ./mongod --dbpath=/Users/<username>/data

Open the extracted folder and open bin directory. 
If running into file permissions when opening files (on mac), try right click -> open, then accept permission.
Open the mongod file.
This will start mongodb instance locally. This will need to be running anytime you want to run the project.



First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
