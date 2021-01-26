const markdownQuickReference = 
`*stars* or _underscores_ for italics.
 **Double stars** or __double underscores__ for bold.
***Three together*** for ___both___.

# This is H1
## This is H2
### This is H3 with some extra pounds ###
#### You get the idea ####
##### I don't need extra pounds at the end
###### H6 is the max

Paragraphs: place a blank line between chunks of text.

This is a URL:  <https://www.github.com>.
This is an inline link to [Google](https://www.google.com). 
Images work exactly like links, but they have exclamation points in front:
![Google Logo](https://www.google.com/images/errors/logo_sm.gif)

* This is a bulleted list
* Great for shopping lists
- You can also use hyphens
+ Or plus symbols

Blockquotes:
> This chunk of text is in a block quote. Multiple lines will be
> indented a bit from the rest of the text.
> > Multiple levels of block quotes also work.

Code: If you want to include code and have new lines preserved, indent the line with a tab or at least four spaces:

    The text will stay as text, 
    including any *markdown* or <u>HTML</u>
    
This is inline code: \`inline code\`

This sample text was lovingly derived from the [Marked.js Markdown Reference](https://marked.js.org)
`;

export default markdownQuickReference;