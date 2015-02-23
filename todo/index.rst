==========
Todo Items
==========

Pip Requirements File
---------------------
Add requirements file for extensions

Better Semantic Build Process
-----------------------------
Copy of the full semantic ui is being brought in right now. Like this to be brought in an build via Sass or something smarter

Images
------
Images need to to have ``class="ui image"`` applied to theme. Right now they are overflowing their container

Navigation
----------
Prev and Next aren't wired up. I'd like them to work, and use a `pop up <http://semantic-ui.com/modules/popup.html>`_ to display the link title

Link Icon
---------
Float this all the way to the right of the container so it isn't so annoying. Be great to swap this with the link icon like RTD did

Additional Direcives
--------------------
From http://sphinx-doc.org/rest.html#directives. These aren't supported or tested yet

* container (a container with a custom class, useful to generate an outer <div> in HTML)
* rubric (a heading without relation to the document sectioning)
* topic, sidebar (special highlighted body elements)
* parsed-literal (literal block that supports inline markup)
* epigraph (a block quote with optional attribution line)
* highlights, pull-quote (block quotes with their own class attribute)

Pygments
--------
Style (github) is hardcoded in there right now

TOC Highlighting
----------------
Like sub items to be bolded as the page scrolls through like the Semantic-UI docs

Mobile
------
No breakpoints are set for a mobile layout or working on different screen sizes

Large page TOC
--------------
Navigation starts to break down for nest pages and with large documents

Breadcrumbs
-----------
Need breadcrumbs
