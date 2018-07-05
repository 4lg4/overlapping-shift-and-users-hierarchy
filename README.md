# overlapping-shift-and-users-hierarchy

> Challenge overlapping shift and users hierarchy
[Task requeriments](README-REQUIREMENTS.md)

# Important
> This Challenge was writen using tests to demonstrate the entire functionalities, so there is no build scripts. If you want to know better about the test cases or add more cases you can add in the test/ folder. Inside de test folder has a file called backend-mock which has the entry samples to be tested. (see Test section)

## Frameworks, Libraries and Tools

- NPM as dependency manager;
- Mocha as test framework;
- Chai as BDD/TDD assertion library;
- ESLint as lint tool (google config);

### Manual installation

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

> Please make sure that you are using the correct NodeJS version :)
Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required Node.js version
$ nvm use $(cat .nvmrc); # use Node.js version
$ npm install
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required Node.js version
$ nvm use $(cat .nvmrc); # use Node.js version
$ npm install
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version v8.9.4
```

## Test
````bash
    npm run test:unit
````

## Author
**Alga Leal (4lg4)**

+ <http://www.alga.me>
+ <https://www.linkedin.com/in/akgleal>
+ <https://github.com/4lg4>
