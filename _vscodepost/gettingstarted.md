When playing with VSCode, it may be helpful to start with a project. Grab your own or use Hot Towel to generate. You can [install Hot Towel and generate a project quickly using these instructions](https://github.com/johnpapa/generator-hottowel#prerequisites).

If you want to see the app from the demo from //Build you can grab it **here soon**. 

## Quick Access
I find myself looking for a file, a variable, a function, a git command, or a task quite often. Especially when I do not know exactly where it is. VSCode provides quick access to these through quick access palettes and commands. 

### Command Palette

`CMD+P` opens the command palette. You can type what you are looking for and perform that action easily. No need to remember menu items or where that button may be hiding. Want to change your theme? Configure debugging? Open keyboard mapping preferences? Run tasks? Open a new console/terminal? This is the place. It's also a great place to just scroll through the entire list of avaialble commands.

> The name "Palette" and the idea is inspired by Sublime Text, which made this an immensely popular and useful feature.

`CMD+P` is the most helpful keystroke you'll use in Visual Studio Code.  It also shows the keyboard mapping for each command.

![CMD+P](cmdp.png)

> Notice that you can delete the `>` and you are at the Navigate to File or Symbol palette. This is a nice feature so you can move between the various palettes easily.

### Navigate to File or Symbol

`CMD+O` opens the generic command palette wher eyou can search for any file or symbol in one place. You can also see recently opened files.

![CMD+O](cmdo.png)

### Palettes ? 

Are you sensing a theme here? There are a few palettes to remember. But the good news here is that if you forget which command does what, you can always type `?` to see the various ways you can find and navigate to what you want. Type `CMD+O` and then `?` to see a list.

You can also access this by `CMD+P` then delete the `>`.

![palettes](palettes.png)

### Go to Symbol

`CMD+SHIFT+O` opens the Go to Symbol palette. The `@` prefix tells VSCode that you are searching for a symbol. You can then search for a local variable or function.

![CMD+SHIFT+O](gotosymbol1.png)

You can also access this by `CMD+P` then delete the `>` and type `@`. Or `CMD+O` then type `@`.

VSCode is context aware when showing the symbols. This means it makes it easy to search for contextually appropriate symbols in various types of files. When in TypeScript, JavaScript or C# you can navigate to symbols. When in CSS, LESS or SASS you can navigate to rules. When in JSON files, you can navigate to arrays or objects. When in special files such as `keybindings.json`, you can navigate to the assigned key bindings (due to the awareness of a JSON schema).

### Go to Symbol by Category

`CMD+SHIFT+O` opens the Go to Symbol palette, and typing an additional `:` allows you to search by category. 

This is context sensitive so in code it may categorize by property or function.

![symbol in code](gotosymbol2.png)

While in json it may search by array, object or string.

![symbol in json](gotosymbol3.png)

### Open Symbol by Name

`CMD+O` and type `#` so find a symbol by its name. 

This is context sensitive so in code it may categorize by property or function. For example, you can search for a symbol across your entire project. It searches the beginning of each symbol and it is clever enough to search by the changes in camel case (as shown below).

![symbol by name](symbolsearch.png)

### Show Errors or Warnings

`CMD+O` then type `!` shows all of the current warnings or errors in the Error palette. You can also open the Error palette by clicking on the error and warnings counter in the status bar. 

![warnings](warnings.png)

### Help for Commands

`CMD+O` then type `?` shows all of the types of global and editor commands you can run.

![question](question.png)

> We'll take a look at the git and task commands later in this post.

## Editor

### New Instances
I often want multiple instances of a tool open to work with different projects. VSCode makes this easy. Simply type `CMD+SHIFT+N` and a new instance of VSCode is opened.Here is show 2 instances (shrunken down a bit) with 2 different projects.

![instances](instances.png)

### New File
The simple `CMD+N` opens a new file. From here you can save, name it,  and keep on rolling.

### Autosave
Tired of losing changes? Or are you like me wher eyou hit `CMD+S` all day long? VSCode let's you enable automatic saving of files through a menu option. Me? I turned this on and never looked back.

![autosave](autosave.png) 

If you enable auto save and you have watchers on your files, those watchers will execute every time you change a file. 

If you disable auto save and you make changes to a file, you will see dots next to the files in the Working Files list.

![dirtyfiles](dirtyfiles.png) 

### Split the Editor

`CMD+\` will split the editor. This is great for opening sna viewing multiple files side by side. Especially helpful for markdown and markdown preview. Even more helpful when transpiling LESS to CSS or TypeScript to JavaScript.

![sidebyside](sidebyside.png) 

You can also open the sidebar from `CMD+O` using the two rectangle icon. Or you can hold the `CMD` and click with the mouse on the file in the File Explorer to open it in a new side panel.

VSCode allows you to have up to 3 code panels open in the editor.

### Toggle Sidebar

`CMD+B` will toggle the sidebar to be shown or hidden. This is great when you need more real estate on your screen.