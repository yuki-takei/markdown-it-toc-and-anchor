import test from "ava"

import mdIt from "./utils/md-it"

test("markdown-it-toc-and-anchor anchor", (t) => {
  t.is(
    mdIt(
      `@[toc]
# 'Heading' ?
# $.lel!
# $.lel?
`,
      { anchorLink: true }
    ),
/* eslint-disable max-len */
  `<p></p>
<h1 id="'Heading'%20%3F"><a class="markdownIt-Anchor" href="#'Heading'%20%3F">#</a> 'Heading' ?</h1>
<h1 id="%24.lel!"><a class="markdownIt-Anchor" href="#%24.lel!">#</a> $.lel!</h1>
<h1 id="%24.lel%3F"><a class="markdownIt-Anchor" href="#%24.lel%3F">#</a> $.lel?</h1>\n`,
/* eslint-enable max-len */
    "should add anchors"
  )

  t.is(
    mdIt(
      `@[toc]
# 'Heading' ?
# $.lel!
# $.lel?
`,
      {
        anchorLink: true,
        anchorLinkBefore: false,
      }
    ),
/* eslint-disable max-len */
  `<p></p>
<h1 id="'Heading'%20%3F">'Heading' ? <a class="markdownIt-Anchor" href="#'Heading'%20%3F">#</a></h1>
<h1 id="%24.lel!">$.lel! <a class="markdownIt-Anchor" href="#%24.lel!">#</a></h1>
<h1 id="%24.lel%3F">$.lel? <a class="markdownIt-Anchor" href="#%24.lel%3F">#</a></h1>\n`,
/* eslint-enable max-len */
    "should add anchors after"
  )

  t.is(
    mdIt(
      `@[toc]
# Heading`,
      {
        anchorLink: true,
        anchorClassName: "anchor",
        anchorLinkSymbol: "",
        anchorLinkSymbolClassName: "octicon octicon-link",
        anchorLinkSpace: false,
      }
    ),
    `<p></p>
<h1 id="Heading"><a class="anchor" href="#Heading">` +
    "<span class=\"octicon octicon-link\"></span></a>Heading</h1>\n",
    "should support GitHub style anchor link"
  )
})
