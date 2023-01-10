## Setup

### install clasp npm
**clasp (Command Line Apps Script Projects)**
We use clasp to clone code from Apps Script and push code into AppScript Google

**Install clasp**
run this comment to install clasp at global
```
npm install -g @google/clasp
```

**Turn on AppsScript API**

https://script.google.com/home/usersettings

**Clone source code**
```
cd apps-script
clasp clone {id appsScript on url}
```

**Pull/Push code**
```
clasp (pull / push)
```
## RUN for Develop

`cd` to the root path with project, the same path with `package.json`

Make sure your computer already install and run `docker`

```
docker-compose up
```
If success, in `apps-script` folder will create a new file `index.html`
