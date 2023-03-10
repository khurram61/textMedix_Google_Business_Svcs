# Project Title
textMedix_Google_Business_Svcs

---
## Requirements

For development, you will only need Node.js and a node global package, Npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.16.0

    $ npm --version
    8.11.0
    
    ## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/cleph01/textMedix_Google_Business_Svcs

cd textMedix_Google_Business_Svcs
```

```bash
npm install
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) and take a look around.
 ## Deployment
```bash
 chmod 400 "example.pem"
 ssh -i "example.pem" aws-user@aws-host.com
cd textMedix_Google_Business_Svcs
git pull origin main
pm2 restart 0
```


