const markdownQuickReference = 
`*stars* or _underscores_ for italics.
 **Double stars** or
  __double underscores__ for bold. 
***Three together*** for ___both___.

Paragraphs are pretty easy too. Just have a blank line between chunks of text.

> This chunk of text is in a block quote. Its multiple lines will all be
> indented a bit from the rest of the text.

# This is H1
## This is H2
### This is H3 with some extra pounds ###
#### You get the idea ####
##### I don't need extra pounds at the end
###### H6 is the max

This is a URL:  <https://www.github.com>.
This is an inline link to [Google](https://www.google.com). 
This is a reference-style link to [Yahoo].
This is the reference for a reference-style link: [Yahoo]: https://www.yahoo.com
This is the [inline link](https://www.bing.com "Bing") with a "Bing" title.

If you want to include code, indent the line with a tab
or at least four spaces:
    Extra spaces work here too.
    This is also called preformatted text and it is useful for showing examples.
    The text will stay as text, so any *markdown* or <u>HTML</u> you add

Images work exactly like links, but they have exclamation points in front. They work with references and titles too.
![Google Logo](https://www.google.com/images/errors/logo_sm.gif)

* This is a bulleted list
* Great for shopping lists
- You can also use hyphens
+ Or plus symbols

> This chunk of text is in a block quote. Its multiple lines will all be
> indented a bit from the rest of the text.
> > Multiple levels of block quotes also work.

Code: If you want to include code and have new
lines preserved, indent the line with a tab or at least four spaces:

    The text will stay as text, so any *markdown* or <u>HTML</u>

Blockquotes
>     You can also use preformatted text with your blockquotes
>     as long as you add at least five spaces.
`;

export default markdownQuickReference;