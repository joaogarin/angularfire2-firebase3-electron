# Angular 2 electron app featuring webpack

A working demo of [electron] with [angular2] using [Webpack]

This is a demo of angular2 with firebase 3 and electron. You should create a config file as following :

```javascript
{
    "firebase": {
        "apiKey": "yourfirebaseapikey",
        "authDomain": "yourfireID.firebaseapp.com",
        "databaseURL": "https://yourfireID.firebaseio.com",
        "storageBucket": "",
    }
}
```

and place this file inside the "src/app" folder.  

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
