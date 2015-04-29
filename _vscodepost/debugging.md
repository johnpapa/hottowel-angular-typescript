There are various ways you can debug server side code with VSCode. You may have a simple node server to crank up. Perhaps you use TypeScript and need to compile it to JavaScript before starting the server. You may also be using task automation with gulp or grunt and want to start the server and then attach VSCode's debugger to it.

### Debugging JavaScript
You can debug server side JavaScript in right ni VSCode. Just create a debug launch task and go. First, click on the debug icon in the sidebar or `CMD+SHIFT+D`. Then click on the gear icon next to the debug button in the upper left. This opens the debug configuration settings (in `.settings/launch.json`).

![js-debug0.png](js-debug0.png)

Here you can define a launch configuration for debugging. Notice the type is set to node and the `program to start` is set to `/src/server/app.js` (choose your path accordingly). It will also stop upon entry, so you can debug on the first entrypoint to the `app.js`. This is important when you want to see how the node server is being started.

Once the debug configuration is established you can choose your configuration form the dropdown and click the green button, or alternatively press `F5` to begin debugging.

![js-debug1.png](js-debug1.png)

The node server will start and stop at the first line of code in `app.js`. You can then set watchers, breakpoints (or disable them), see the call stack, or examine local variables.

### Debugging Menu Options

You can also step through the code using the debug menu in the top middle of VSCode. 

![js-debug2.png](js-debug2.png)

The buttons have keyboard mappings for:

- `F5` continue
- `F10` step over
- `F11` step into
- `SHIFT+F11` step out
- `SHIFT+F5` stop

> I often will set breakpoints in my routes and then go use the app in the browser. When the route is hit, the browser will wait and VSCode will show the breakpoint. This workflow is ideal for debugging calls between the browser and the server.

### Debugging TypeScript

Debugging TypeScript is just as easy as JavaScript. 

- Go to the debug configurations ( `CMD+SHIFT+L` )  
- Set the `program to start` to `/src/server/app.ts` (or whatever your path is)
- Run the `Launch app.ts` configuration 
- Set a breakpoint in `app.ts`

Enjoy debugging!