![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-r.png)

# MDB 5 Contact Form Starter

### Boilerplate for Contact Form

**[>> Support MDB 5 with a STAR](https://github.com/mdbootstrap/mdb-ui-kit/)**

**[>> MDB 5 Demo](https://mdbootstrap.com/docs/standard/#demo)**

<a href="https://npmcharts.com/compare/mdbootstrap?minimal=true"> <img src="https://img.shields.io/npm/dm/mdbootstrap.svg?label=MDB%20Downloads" alt="Downloads"></a>
<a href="https://github.com/mdbootstrap/bootstrap-material-design/blob/master/License.pdf"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
<a href="https://twitter.com/intent/tweet/?text=Thanks+@mdbootstrap+for+creating+amazing+and+free+Material+Design+for+Bootstrap+4+UI+KIT%20https://mdbootstrap.com/docs/jquery/&hashtags=javascript,code,webdesign,bootstrap"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Let%20us%20know%20you%20were%20here%21&"></a>
<a href="https://www.youtube.com/watch?v=c9B4TPnak1A&t=6s"><img alt="YouTube Video Views" src="https://img.shields.io/youtube/views/c9B4TPnak1A?label=Bootstrap%205%20Tutorial%20Views&style=social"></a>

---

### Installation

In order to install all necessarry packages for backend and frontend side of the application - in app/, server/ and root directory of this starter run:

```
npm install
```

### Dev Server

```
npm run start:dev
```

Will run frontend application and backend server in development mode

### Prod Server

```
npm run start
```

Will run frontend application and backend server

### Features:

Backend:

- Server based on [express](https://github.com/webpack/webpack)
- Validating form with [express-validator](https://www.npmjs.com/package/express-validator)
- Sending mail with [nodemailer](https://www.npmjs.com/package/nodemailer)
- Handling multipart requests with [multer](https://www.npmjs.com/package/multer)
- Parsing request body with [body-parser](https://www.npmjs.com/package/body-parser)
- Loading environment variables with [dotenv](https://www.npmjs.com/package/dotenv)
- Enabling CORS with [cors](https://www.npmjs.com/package/cors)

Frontend:

- Bundling via [webpack](https://github.com/webpack/webpack)
- ES6+ Support via [babel](https://babeljs.io/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- Unit Testing via [jest](https://github.com/facebook/jest)
- Code Formatting via [prettier](https://github.com/prettier/prettier)

### Files structure:

```
├── app/
├── server/
```
