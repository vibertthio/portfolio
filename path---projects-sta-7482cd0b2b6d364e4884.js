webpackJsonp([0xe5cc9428238],{559:function(e,t){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>2015.12 – 2016.7</p>\n</blockquote>\n<h5 id="we-presented-a-implementation-of-static-timing-analysis-sta-on-digital-circuit-the-better-sta-algorithm-the-greater-efficiency-of-vlsi-design-flow"><a href="#we-presented-a-implementation-of-static-timing-analysis-sta-on-digital-circuit-the-better-sta-algorithm-the-greater-efficiency-of-vlsi-design-flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>We presented a implementation of static timing Analysis (STA) on digital circuit. The better STA algorithm, the greater efficiency of VLSI design flow.</h5>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>The maximum operational frequency of a circuit is determined by the maximum propagation delay its combinational parts, which is defined by the longest delay it takes for a signal to propagate from an input to an output. We call the path of this propagation “critical path”.</p>\n<h2 id="static-timing-analysis-sta"><a href="#static-timing-analysis-sta" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Static Timing Analysis (STA)</h2>\n<p>STA is a critical procedure of IC design. It can report critical paths, and check all timing violations. It’s used by designers to determine whether the timing requirements of a design are met. Faster STA can help accelerate the design of VLSI (Very Large Scale IC).</p>\n<p>The input of an STA program is a Verilog gate-level netlist whereas the output will be a list of “true paths”. A true path is whose output node will be changed due to the input node, and a false path is whose will not.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 436px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.74008810572688%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABcSAAAXEgFnn9JSAAADnElEQVQ4yyXR/TPbBxzA8fwbe6hbt+uhik6ph2hEIkES8iBoPBRBIx6CIZ5XpZo+UEWIh1DEQ5HJWNUpM1ZbPZT1qq63X9bfervb9vuuv7z33fbD55fPfe5177uPqD0jHmtUIFVxITxIE1MvC6U/S8aUJZXH5Xp8tSamK9KZqzYxVmKkK0dLiyGJJq0Se0oCdalJ1GkScTXbWB29gWhp/YhHy78ws3KAe2mPwdltnJMbDHo2cU5vMTC3w8PpbQYWfsLpPaTL94Ymzyuqxo6xjBxR6HpJXs8u3b4jbvb5EHm+28X77JTnL96yv/WS46V1Tla3ef3tM05965xu7nGyuc+blS1ez69y+M0Wh1NP2J0QZnKVpR/esbD+lkfeE8Yn1hBN3nYw2trBWGszs821uCvLWGypwdfWwPLNep7esjNrt7LWIexaKlhsLGexycZUbTkDZSWMVJYyUGpl9Y6d9zsuRCNFauqlUVSJL9GhukKTPIrutAT6MpMZylYxU6zDmalg3mLAU6RjPE+DW5jhXDV3tVIGriroNchYrs/ij+0eRKPFahpl0dRKIujUxNGqiKbbkMCDfCOurH9BPf3pCXhtJmatRsbzBfCamrGCVO7p4xnNTWY4K4nZch3f95UhapSH0CiPwR4fSYf6f/CuAE40WOg1qZirK6YnQ8lCXQGeChOjAuYo0P8HOoTC0Tw1w9nJ3NfFkB16BlF9wkXsMjGNCjHtmni+ThSTfDEUc+F1jKp0vMu7eFwTBAUG4e8fhCs/nZasXNzFOdw3KvBY0oTqFJwmGYbAjxA1qSKpjgujQSi7oZLSLlQqggPR6bO5Zr3Di811eu6NEB4SiiQ8nKGqMt4dHTNkKcShlzN5XScUyhnJkaMPEMBmbSw18jAcKRG0KCO4pYnBKo3gs7OBXFUqKTUZ+So9hY2ZftbcAwxbMui2mBkqMgi3kbjzFQya4pkoVJEa8Ami59Xx7NuT2KmIo056gQ7NZWyyS/j5ncMUG47fmbPIQ88T8cWnxJ7/nMECNSUZWrqFT3cIoEsocwhRbmGv9v8Y0ZZNwk6llJWiaPoMXzJfHMdwvoSwgHN05V7hsr8f2kh/ShIvYEsOZq8tmc5iAyvVSp6Wi1mvjGPOLGHaLKVGIjzlx7pIXrXF8tewir+9Rj5sFHAwk48sOpjDJzaqzDLM6TEM3TYy1qnjw89WHtZm834ykz/HtfzuTuU3p5pfezUcOGT8AxI8Zf0Y96TiAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="img 01"\n        title=""\n        src="/portfolio/static/img-01-92b4fe282ee990636ac1fd88abcf5657-4394b.png"\n        srcset="/portfolio/static/img-01-92b4fe282ee990636ac1fd88abcf5657-e4c07.png 148w,\n/portfolio/static/img-01-92b4fe282ee990636ac1fd88abcf5657-4df97.png 295w,\n/portfolio/static/img-01-92b4fe282ee990636ac1fd88abcf5657-4394b.png 590w,\n/portfolio/static/img-01-92b4fe282ee990636ac1fd88abcf5657-f93ac.png 885w,\n/portfolio/static/img-01-92b4fe282ee990636ac1fd88abcf5657-c6023.png 908w"\n        sizes="(max-width: 436px) 100vw, 436px"\n      />\n    </span>\n  </span>\n  \n<em>The awarding ceremony of 2016 CAD Contest at ICCAD.</em></p>\n<h2 id="implication-and-justification"><a href="#implication-and-justification" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>“Implication” and “Justification”</h2>\n<p>The process can be separated into two parts: implication and justification.</p>\n<p>The algorithm we used for implication is based on the paper proposed by R. Peset Llopis <a href="http://cad-contest-2016.el.cycu.edu.tw/Problem_D/default.html">1</a>. However, the algorithm of “Justification” was designed and implemented by ourselves.</p>\n<p>“Implication” is using the status of a connection wire in a specific period of time to deduce the status of other wires connected to the same gate. Thereafter, it would determine whether each path is a potential true path or 100% false path.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 340px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 77.29196050775741%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABcSAAAXEgFnn9JSAAACHElEQVQ4y51U2W7iQBD0/38S4pGIsCBuMGCDD3ywGBvCfbq2q7MgoSRotS2N5vBMdVX1jA38ELfb7TE+nU7Ybre4/l3b7XY4XW7fnjN+AnT8SAByHTe7AywWKbxppPPVaoU4jF4DHg4H3XhvwXiMMAyxXC6xiCKs4hiO42A+nyOeTuGMRphKn2XZ48xI1oz4d4L9fq8bO50OJpMJGo0GzG4X0XCo43AwQOb7cF0XQRDgeDwikTkT5nn+YEcMo2tacGSjLQCjeh1CCS7ZycFQGDWbTaQCmAgbX0AISJB8sxEbFqrsSbI5tDAUJq1WC+12WzfR9PV6jZQMRFIucmNptm0rC980kYqSQBI40vO7aMev93cY1sSHZVkYCytKrgtLzim98/aGlQAsk0QTMBnXc0mUpUsFj8RfXK/4SDNcrjcY9sTFQCTR0F6vh65IJxMa3i6VMHc/v8+FVSxKuG/hB/Dk3Md685AaxTOkwtJwvaneMwYZlstlrSar1xC2J2FF8DRNkYtfO5lbI1sLyWBP9oyrMH26h6xisVhURvSsUCiov0zARnae56Hf7+s6bbpbxIJVKpWvgDyYiGesHqWTtSly6RftoIf3ajMpXxTVnM/nry+F96parWpGbp7NZgqshZCrwvndHhbocrm8fnp8FWz0jAzoGxnXajVlSSavWkmK+ATIK0CZrDbHlMbgj0Gvxz/Etz8Hekj5/xN/AE0JaenYvWaQAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="img 02"\n        title=""\n        src="/portfolio/static/img-02-f51f5965caa2157d86d8b13a1516afb0-5a0c5.png"\n        srcset="/portfolio/static/img-02-f51f5965caa2157d86d8b13a1516afb0-6981a.png 148w,\n/portfolio/static/img-02-f51f5965caa2157d86d8b13a1516afb0-5887c.png 295w,\n/portfolio/static/img-02-f51f5965caa2157d86d8b13a1516afb0-5a0c5.png 590w,\n/portfolio/static/img-02-f51f5965caa2157d86d8b13a1516afb0-84295.png 709w"\n        sizes="(max-width: 340px) 100vw, 340px"\n      />\n    </span>\n  </span>\n  \n<em>This graph above shows an example of determination of a true path.</em></p>\n<p>“Justification” is straightforward try-and-error. First, the program guesses what value of a specific gate is. Secondly, it uses the analysis of time in “Implication” and verify the guessing. It always starts with the primary inputs, and deduce the status of whole circuit. If any conflict is encountered, it will backtrack the procedure and try different inputs until all possible input vectors are tried. The path is true if more than one input vector is found to justify it. Otherwise, it’s a false path.</p>\n<h2 id="result"><a href="#result" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Result</h2>\n<p>Our program was capable of finding the true paths in cases with under 500 gates within seconds. Moreover, it could resolve the case with 1145 gates, 20 inputs, 20 outputs within 2 hours. It was the second fastest one in the 2016 CAD Contest at ICCAD.</p>\n<h2 id="teamwork"><a href="#teamwork" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Teamwork</h2>\n<p>We were a 3-person team. I’m charge of designing the algorithm of “justification” and its implementation, a portion of implementation of “implication”. We allotted the analysis to each one evenly.</p>\n<h2 id="links"><a href="#links" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Links</h2>\n<p><a href="http://cad-contest-2016.el.cycu.edu.tw/Problem_D/default.html">> Problem Description</a><br>\n<a href="https://drive.google.com/file/d/0ByNwzf7aYOQ3VHhSejlSdGduZjg/view">> Analysis Report</a>  </p>',frontmatter:{title:"STA"}}},pathContext:{slug:"/projects/sta/"}}}});
//# sourceMappingURL=path---projects-sta-7482cd0b2b6d364e4884.js.map