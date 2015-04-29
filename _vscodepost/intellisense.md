Visual Studio Code provides excellent intellisense for JavaScript, TypeScript, and C#. Whether you are running ASP.NET 5 or node or client side code, you'll see a new level of intellisense here.

You can also hit `CTRL+SPACE` and get intellisense. 

If you hover over a variable VSCode shows the signature of a function or the type of a variable, if it can be determined.

![hover](hover.png)

## JavaScript Intellisense
Out of the box we get basic intellisense for what the editor can determine on its own about the JavaScript code. VSCode will tell you a function's signature or what variables are available in scope.

![js-hint1](js-hint1.png) 

When working in node.js VSCode provides intellisense across all of your JavaScript modules (the ones you write).

### Quick Fix
Now let's assume you want intellisense for the JavaScript libraries or mode modules you use on the client or server. Perhaps you are using Angular and you want intellisense on it. Notice the green squiggly line under `angular`? Put your cursor on it then click the light bulb ( or `CMD+.` ) and choose `Add /// reference to angularjs/angular.d.ts`.

![js-hint2](js-hint2.png) 

VSCode will go and get the typings definition file for Angular and add it to your project, reference it in the file and you instantly have intellisense for Angular! (VSCode grabs the typings files from the Definately Typed repository.)

![js-hint3](js-hint3.png) 

We can now repeat this by adding jQuery code to a file. Put the cursor on the `$`, click `CMD+.`, and pull down the typings file. Now we have jQuery intellisense, too. 

### Consolidating into a tsd.d.ts

Do you see the 2 `///` references and how the can accumulate? You can make a single `tsd.d.ts` with the npm package named `tsd`.

```bash 
npm install tsd -g
# cd to your project folder
tsd query -r -o -a install angular jquery
```

This produces a `tsd.d.ts` file which you can reference in your JavaScript files to get intellisense. Now you have 1 place to put all of you typings for JavaScript projects. 

>I think the story for this will get even better too, since VSCode uses TypeScript under the covers for its tooling. 

### Additional Hints
If you try to create a type in a JavaScript file, VSCode will warn you that it is not valid.

![js-hint4](js-hint4.png) 

## TypeScript Intellisense
The intellisense and editor experience is top notch when using TypeScript. VSCode provides intellisense across multiple files because TypeScript understands the `import` statement. 

VSCode provides intellisense for third party libraries, if you include the typings `*.d.ts` files. This works the same as it does with JavaScript files. You can use the [Quick Fix](#quick-fix) feature to add a typing automatically.

## JSON Intellisense

Intellisense works in well known JSON files too, including `package.json` and `bower.json`. It uses schema information and looks up values to find likely matches, where possible.

Here you can see it finding all npm packages that match `gulp`.

![jsonintellisense1.png](jsonintellisense1.png)

Here you can see it finding the most appropriate versions and showing a message about what the versions mean.

![jsonintellisense2.png](jsonintellisense2.png)