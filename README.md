# Visual Studio Code Demo with Angular, TypeScript, Node, and HotTowel

As seen at [//Build 2015](http://channel9.msdn.com/Events/Build/2015/3-680) presented by Erich Gamma, Chris Dias and John Papa.

## Prerequisites

1. Install [Node.js](http://nodejs.org) 
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

## Run
3. Install npm packages:

    ```bash
    npm install
    ```

4. Install bower packages:

    ```bash
    bower install
    ```
5. Run the build task from a command line

    ```bash
    gulp serve-dev
    ```
