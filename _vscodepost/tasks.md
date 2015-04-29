It is great that you can debug if you have a simple node server, but what if you use Gulp or Grunt for task automation? Let's use the sample from the demo.

## Running Gulp Tasks
You can run any gulp task directly from the palette by clicking `CMD+O` followed by `task` and a space. 

![tasks](tasks.png)

If you choose a task that starts the node server and sets the `--debug` flag, then you can attach the VSCode debugger to it. The sample app has a gulp task called `serve-dev` that starts the server and sets the `--debug` flag, so let's run that.

Then go to the debug window by clicking the debug icon or `CMD+SHIFT+D`. Choose `Attach` from the dropdown and click the green arrow to start debugging.

## Creating Tasks
While you can run a gulp task from the command palette, sometimes it is beneficial to set up a a task configuration in VSCode to customize how you want to run the task. This is an abstraction that VSCode offers because there are a variety of task runners and this provides a consistent way to run them all. It also provides custom matchers which can be used to gather the ouput form the tasks and use them to fill in the errors or warnings in VSCode. (For example there may be some errors from a linting task.)

To set up a task configuration click `CMD+P` to open the command palette and type `task`. Then select `task configuration`.

![task-config-menu](task-config-menu.png)

This opens the `.settings/tasks.json` file which is where you can define tasks to execute. The `command` should be set to whatever command you want to execute. In this case it is `gulp`. Then the `tasks` array is configured for every task you want to run. The image below shows several tasks including `gulp serve-dev`, `gulp tsc-compile`, and `gulp test`. 

![tasks-json](tasks-json.png)

One task may be assigned as the build command, which in this case is `gulp serve-dev`. One task may be assigned as the test command, which in this case is `gulp test`. This means when you click `CMD+SHIFT+B` to build it will run the `gulp serve-dev` task. Likewise, when you click `CMD+SHIFT+T` to run the tests, the `gulp test` command will execute.

To try this out, run the task `serve-dev`, set a breakpoint in `app.ts`, then go to the debug window by clicking the debug icon or `CMD+SHIFT+D`, choose `Attach` from the dropdown and click the green arrow to start debugging.

> You can also go to Terminal and run a gulp command. The sample code has a task `gulp serve-dev` which adds the `--debug` flag to node. Then you can set a breakpoint in `app.ts` and attach to it from VSCode.
