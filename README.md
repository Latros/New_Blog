## Productive workflow using Grunt, Yeoman and Bower

This week I spent a large chunk amount of time learning the ins & outs of Grunt, Yeoman & Bower (in this article henceforth referred to as GYB). I've been using them for awhile, but mostly by copying other peoples Grunt tasks and never truly hunkering down to *learn* them. That's what I did this week.

I'm by no means an expert, but I definitely feel comfortable enough with each to confidently say "if you're a developer who ISN'T using these, you're *probably* taking crazy pills, or just don't know any better". Either way, if you read through this article, hopefully you'll see the light :)

GYB is what I'll call a "workflow stack". The stack is aimed at making development faster, easier, and (best of all) more automated. It allows for a lot of the boilerplate "best practice" techniques used in web development to be done automatically behind the scenes, freeing up your time and brain to focus on the fun stuff (the programming, not the grunt work!).

### What common tasks are you doing all day while developing sites?

Here's a breakdown of a bunch of common tasks that almost every web developer will find themselves doing at some point:

#### Asset minification / concatenation tasks that you *shouldn't* be doing manually
- Compiling your LESS/SASS into CSS (either client side or on the server side)
- Minifying (incl. removing comments) JavaScript & concatenating it all into one .JS file
- Minifying (incl. removing comments) CSS/LESS/SASS & concatenating it all into one .CSS/LESS/SCSS file
- Minifying (incl. removing comments) your HTML

#### Workflow tasks that you *shouldn't* be doing manually
- Changing a file, alt-tabbing to your browser, hitting refresh (this method is still used far too much these days!)
- Going to jQuery.com or getbootstrap.com, downloading the latest jquery/bootstrap, dragging it into your projects library directory, and then writing the script/link tag in your HTML. This applies to *any* javascript or css framework that you would need to fetch for your project

#### Deployment tasks that you *shouldn't* be doing manually
- Copying only the necessary project files (once minified and concatenated) from a development directory into a production-ready directory
- Deploying that production-ready directory off to a remote server to be pushed live to the public

#### Misc best-practice tasks that you *shouldn't* be doing manually
- Validating your HTML against W3 standards by going to their site and pasting your html and checking if it validates
- Optimizing your images for web use (PNG/GIF/JPEG file sizes made much smaller -- I'm looking at you Photoshop "Save for Web" abusers)

#### And any other common task that you can think of. Everybody has a unique workflow / common set of tasks.

### There is a better way to do *all* of the above, 100% automatically.

- What if your images could automatically be optimized for web (more efficiently than Photoshops Save for Web) *the second you drag them into your `/images/` folder*?
- What if your browser could automatically reload itself the second you change any JS/HTML/CSS without you needing to switch to it and hit refresh?
- What if your HTML could automatically be validated against W3 standards *the second you hit "save" after writing some code*?
- What if your LESS/SASS could be compiled and minified, and your JS concatenated and minifed, and your HTML minified automatically any time you hit "save" on those files?
- What if you could install a library (bootstrap, jquery, etc), have it put into your libraries directory, **and** automatically have its `<script>`/`<link>` tag injected into your HTML *with a single command in your terminal*?
- What if you could automatically copy all your concatenated / minified assets to a production directory, and then push it to your live server *with a single command in your terminal*?

Enter Grunt, Yeoman, Bower! **All of the above** is easily achievable using the GYB "workflow stack".

### Grunt
Grunt is the workhorse of the GYB stack

### Yeoman
Yeoman is the scaffolding portion of the GYB stack

### Bower
Bower is the front-end dependancy management portion of the GYB stack



// TODO: finish article


-- You are doing yourself a huge disservice by not optimizing and automating the above processes - not only from a productivity standpoint, but also from a work-happiness standpoint. Once you experience the awesomeness of GYB, you won't go back, I promise you that.

--  Thats nonsense! The second you save an HTML/style file, that change should automatically appear in your browser, without the need to make a jarring switch from a "coding in my editor" mindset to a "debugging in my browser" mindset