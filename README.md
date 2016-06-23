# Angular 2 electron app featuring webpack

A working demo of [electron] with [angular2] using [Webpack] and [redux]

This is a demo of oauth with github using angular 2 and electron. It uses redux to manage state. You should create a config file as following :

```javascript
{
    "github": {
        "client_id": "yourclientID",
        "client_secret": "yoursecretkey",
        "scopes": [
            "user:email",
            "notifications"
        ]
    }
}
```

and place this file inside the "app" folder.Dont use this in production as for production you should have a safe server side URI and not have your secret key in the app folder.  

When running it authenticates the user and goes to a page showing the username received from the authentication oauth workflow.

## Run the example

```bash
$ npm install
$ npm run build
$ npm run watch
$ npm run electron
```

## License

[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular2]: http://angular.io
[electron]: http://electron.atom.io/
[redux]: https://github.com/reactjs/redux
