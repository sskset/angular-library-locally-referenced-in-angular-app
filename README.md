# Angular library locally referenced in angular app

When you update an Angular library that is locally referenced in your Angular app, the changes will be applied automatically, but it depends on how you've set up the integration and the build process. Here's how changes can reflect in the Angular app:

## 1.Using Local Path Reference

If you have referenced the library using the local path method in package.json like this:

```json
{
  "dependencies": {
    "your-library": "file:../path-to-library/dist/your-library"
  }
}
```

## 2.With `--watch` Mode

How Changes Are Applied:

* After modifying the library, the changes will not automatically be reflected in the app until you rebuild the library.
* Run the following command in watch mode to ensure that changes are picked up continuously:

```bash
ng build your-library --watch
```

* As you make changes to the library, the --watch flag ensures the library rebuilds automatically, and the updated library code will be picked up by the Angular app. Once the library rebuilds, simply refresh the Angular app, and the changes will apply without needing to manually reinstall the library.

## 3.Install your library

* Run `npm install` in your angular app, this will install the angular library to your angular app via file reference.

```bash
npm install
```

## 4.Update angular library to see changes reflected in angular app
