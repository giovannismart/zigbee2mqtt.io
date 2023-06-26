"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98274],{713377:(A,t,e)=>{e.r(t),e.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-010809c9","path":"/advanced/zigbee/05_create_a_cc2530_router.html","title":"Create a CC2530 router","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"What do I need?","slug":"what-do-i-need","link":"#what-do-i-need","children":[]},{"level":2,"title":"Flashing the CC2530","slug":"flashing-the-cc2530","link":"#flashing-the-cc2530","children":[{"level":3,"title":"CC debugger pin layout","slug":"cc-debugger-pin-layout","link":"#cc-debugger-pin-layout","children":[]},{"level":3,"title":"Pin layout of various CC2530 modules","slug":"pin-layout-of-various-cc2530-modules","link":"#pin-layout-of-various-cc2530-modules","children":[]},{"level":3,"title":"Flashing","slug":"flashing","link":"#flashing","children":[]}]},{"level":2,"title":"Putting it in an enclosure","slug":"putting-it-in-an-enclosure","link":"#putting-it-in-an-enclosure","children":[{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Done!","slug":"done","link":"#done","children":[]}],"git":{"updatedTime":1687799902000},"filePathRelative":"advanced/zigbee/05_create_a_cc2530_router.md"}')},395215:(A,t,e)=>{e.r(t),e.d(t,{default:()=>w});var a=e(166252);const i=e.p+"assets/img/cc2530_router_enclosure.e5cfb090.jpg";var r=e(690070);const l=e.p+"assets/img/power_cable.8a289f53.png";var g=e(122743);const o=e.p+"assets/img/ccdebugger_pins.c9c409bc.png";var n=e(18476),c=e(861430),Q=e(980654);const s=e.p+"assets/img/ccdebugger_cc2530.46e63ce0.jpg",d=e.p+"assets/img/router_1.5fddccda.jpg",C=e.p+"assets/img/router_2.e0857930.jpg",p=e.p+"assets/img/router_3.93b467de.jpg",h=e.p+"assets/img/router_4.fc48b481.jpg",U=(0,a.uE)('<h1 id="create-a-cc2530-router" tabindex="-1"><a class="header-anchor" href="#create-a-cc2530-router" aria-hidden="true">#</a> Create a CC2530 router</h1><p>The CC2530 is highly suitable for serving as a router. It has an external antenna which will greatly improve the range of your Zigbee network. This tutorial will explain how to create a CC2530 router packed into a nice enclosure which can be powered via any regular outlet.</p><p><strong>DISCLAIMER:</strong> The CC2530 router will use Mains AC so there is a danger of electrocution if not installed properly. If you don&#39;t know how to install it, please call an electrician!</p><p><img src="'+i+'" alt="CC2530 in an enclosure"></p><h2 id="what-do-i-need" tabindex="-1"><a class="header-anchor" href="#what-do-i-need" aria-hidden="true">#</a> What do I need?</h2><table><thead><tr><th>Name</th><th>Price</th><th>Picture</th></tr></thead><tbody><tr><td>CC2530 <br> <strong>OR</strong> <br> CC2530 + CC2591 <br> <em>The CC2530 + CC2591 is more powerful but more expensive</em></td><td>+-7.50$ on AliExpress <br><br> +-15$ on AliExpress</td><td><img src="'+r+'" alt="CC2530"></td></tr><tr><td>HLK-PM03</td><td>+-2.20$ on AliExpress</td><td><img src="data:image/jpeg;base64,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" alt="HLK-PM03"></td></tr><tr><td>Enclosure (the one used has the following dimensions: 100x68x40mm)</td><td>+-2$</td><td><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAJagAwAEAAAAAQAAAJYAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAJYAlgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwn/xAA0EAACAQMDAwEGBQQCAwAAAAAAAQIDBBEFEiExQVEGEyJSYXGBBxQjMqEVQmLBkbGS0eH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAwACAgIDAQAAAAAAAAAAAQIRAzESIQQyE0FRFP/aAAwDAQACEQMRAD8A+qO5BuQgALuQbkIAC7kG5CAAu5BuQgALuQbkIAC7g3IQbujuxlZ8Z5AfuQbkIAC7g3IQAF3INyEABdyAQAAAAAAAAAAAAAGzmoLMnhDoOGTqRprl/YgqXTfEeF5IN2Xn+TC3LEdLRVNUuJT4j7qOUh6av46qrp3dNxTzuUWp58t5/g6TIuTlvWOXJt+mkTnSxSuGuJ/8lhPKyigPp1nTfleDprfPUqTC6A2FSNRZT+w46O1AAAAAAAAAAAAAACNqKy3hFereRhxD3n57FSpWlUeZPJjbliOlohaq3i6Q/wDJlaVRyeW22R7gUs9jmtebdrxGH7g3DNwbiuh+4TcN3DRolUg3EaYuSRLCq4vK6lujcKpxLiRnpjsmlbzVExrVA5+fq7T7C9jZ3NylVbS/a3j5N9DejJTipRalF8po6Kclb+on2pMTBwABogAByn4galqtjo1X+kU5VLjKUnTi5ShHu1Fcv6LyZ8l/x18s1MRs46OteU6LxndLwilVuZ1urwvhRxHoetr0rq4p6j7WrZqOY1a6w9/DxF/3Ll58Y7nYnF+W3JGzGNPGIODoNDJULuFb4GdgyE4XICAE4dlhkRNgEYdkE8jegBBwqeBjaim28Io3GqRjmNL3peew8sSo3/piyqXf5qdarTzuzBTynnrx3++cHTaHKLsYxgmqcPcjueXhLuczKc6k903lnS6DHbYL5yZfgiPPYhFumkAAegyBjas3Tu1JcZimbJj66ts6UsZymmYc30Wr2gp1lUWe/dDnIz1UcWnF/cs0a6qrjiXdHDrZPkM8DfmGSdDmxBNwZ5IDshnuNFyNC57hnkQZWrQoQ3Tkox+Y3BLkrXWoUrVcvM/hRlXeuSqZjQW2PxPqzP3N8t5fXLM55P4YvXF/Uuny9sfhREpKOGV41G/24+r6EtNY55b8spupxYg3Jc8Lwdboixp1P6s5GL4Ow0dY06j9P9nZ8f7M7dLoAB6DIYMrX1tp0Zf5NGpKeDL1xSrWi2rO2WX9DHl90lavbBk9r45+Q1VMNSi/uDlwRTzF5XXuvJ5cy2aVvdKrw+J/9lgw9+eUy/a3yqe5N4l2fkmLC6BleoPUFH07p7ua0J1X0jSp/uk+rIfTnqin6hhNfl52taMVJ0qjTe19GT518vH9pz9tsXOOWyne6lQsIZqz97tFdWc5f63Xvm4x/SpfDHv9WRa8VIjW3f69Stm4Uv1any6Iw693Vuqm6pNyf8Ipp4WXx9R8W5dOF5fU5pvNu1sxNvUcLq/CHpbv3dPhXQijiK4HqYFhMfGRDRhUrzUKcXOT6JI6LTdBjTancNVJ9oLovr5NqUtfpWZiFPT9NrX0lJLZS+OS6/TyddaQVvRhTj+2KxyRQiorj+CaCPT4+OKQymdWFygEiwN2aCTIpskZG1krK7H1DTsZq0Vx1lBf9ow7mvGjVlBvLXdHT6rc/krOUl++Xux+XzPJbD8TfTmt/iBq/om2vZVPUel28Lq6tXSktlOWNst2Md/vzjOHjyPkzFLZXttSNjXWu5Wcrhv+R8ailz0ZnuG2SU1nHRj4Vv1Ujli8z2viP1PeWE7Gj/U6NSrClJyhUpY3RbWHw+GmuzMr09qlja0Kk9LhXlUktn5i62qSj2jGMUlFfYl9X4qaTNMwPS7UbCS6ckTafJOenQ1Zyqz3Sm5TfVsdF9ksshhmX+K/kmTwsLCRAkisPMuX/CHqRDvwS21Krd1VTowdSb7LsT36gP3mlpuj1r7E5fpUfia5f0Ro6Z6dp22KlxitV6qP9sf/AGbkI5R38Xx993ZTb+IrKwo2dPZSht8vu/qy9CI2EeCaKyejEREZDIsUTQiMjElisIuHJZAcgCirIYySQxiV2RrsJyhTmo7oRypr5HlOtfiFR0y7rU4WWZReHOc0s4+x7ROOTltQ9A6JeXUripptvKtJ5cpU0zzuf49uSdrLSt4jt45dfizVlNRhTt4pvlZcmd3pF3G9t4Vl/csnTUvSVhbcU7WlTX+MEht36fjFOpbRUKi6wXSX/wBOT/LanvdaecS5z1HRVbSZp5z5Twcz6XpKnSqLMm89ZPLOq1fL0+pFpprqmcvoDUHVRy2+y8dNxSwhHVwFChWvq3sreDnLvjovq+x1Okem6VntqVsV6655Xux+i/2a8fHbln0rMxHbM0vQK9/ipVzQovyvel9F/s62ysqNlSVOjTUI933f1ZLCmyxCmetxcNePrthNpkQjknhESEME0YnTEKiKJIoRLA9LgsHRWSQZHOR4QWICJ4AKoWNY5iNBdG1kjlDJNgRxIwVJUskboZL2zLEUPkRg5nX/AE1LVLeaoSjTrtdZLiX1OY0T8Or+3rTd7VpU6Tf7aMnKT++Fg9QUMCOGTnt8bjtbymFovMRjCtNJpWVJU6UFCC7Lv9fJchQ2l50kJ7Pk2isR0ruoI0+hLGGCRQHJF8DYoekGBUSFQ4TAoDovA8iQ9PjqA4AAIwuyPgNkfCAC6o9nHwg9nHwgAA9nHwg9nHwgAA2R8INq8IAAPZx8IPZx+FAAB7OPwoPZx+FAAB7OPhB7OPhAABsj4QbI+AAA2rwG1eAABdqXYAAD/9k=" alt="Enclosure"></td></tr><tr><td>Power cable</td><td>+-2$</td><td><img src="'+l+'" alt="Power cable"></td></tr><tr><td>CC debugger</td><td>-</td><td><img src="'+g+'" alt="CC debugger"></td></tr><tr><td>8 female to female jumper wires</td><td>-</td><td><img src="data:image/jpeg;base64,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" alt="Jumper wires"></td></tr></tbody></table><h2 id="flashing-the-cc2530" tabindex="-1"><a class="header-anchor" href="#flashing-the-cc2530" aria-hidden="true">#</a> Flashing the CC2530</h2><p>The CC2530 has to be flashed with a router firmware which has to be done with a CC debugger using 6 female to female jumper wires. Pins have to connected as follows:</p><h3 id="cc-debugger-pin-layout" tabindex="-1"><a class="header-anchor" href="#cc-debugger-pin-layout" aria-hidden="true">#</a> CC debugger pin layout</h3><p><img src="'+o+'" alt="CC-Debugger Pins"></p><table><thead><tr><th>CC debugger</th><th>CC2530</th></tr></thead><tbody><tr><td>1</td><td>GND</td></tr><tr><td>2</td><td>VCC</td></tr><tr><td>3</td><td>P2.2</td></tr><tr><td>4</td><td>P2.1</td></tr><tr><td>7</td><td>RST</td></tr><tr><td>9</td><td>VCC</td></tr></tbody></table><h3 id="pin-layout-of-various-cc2530-modules" tabindex="-1"><a class="header-anchor" href="#pin-layout-of-various-cc2530-modules" aria-hidden="true">#</a> Pin layout of various CC2530 modules</h3><table><thead><tr><th>Name</th><th>Pin layout</th><th>Picture</th></tr></thead><tbody><tr><td>CC2530</td><td><img src="'+n+'" alt="CC2530 pin layout"></td><td><img src="'+r+'" alt="CC2530"></td></tr><tr><td>Webee CC2530 + CC2591</td><td><img src="'+c+'" alt="Webee CC2530 + CC2591 pin layout"></td><td><img src="'+Q+'" alt="CC2530 + CC2591"></td></tr></tbody></table><h3 id="flashing" tabindex="-1"><a class="header-anchor" href="#flashing" aria-hidden="true">#</a> Flashing</h3>',14),E={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/router",target:"_blank",rel:"noopener noreferrer"},u=(0,a.uE)('<p><img src="'+s+'" alt="CC debugger connected to CC2530"></p><h2 id="putting-it-in-an-enclosure" tabindex="-1"><a class="header-anchor" href="#putting-it-in-an-enclosure" aria-hidden="true">#</a> Putting it in an enclosure</h2><p>The following steps have to be followed:</p><ul><li>Drill 2 holes in the enclosure; one for the antenna, one for the power cable</li><li>Lay a knot in the power cable; this serves as strain relief</li><li>Solder the power cable on to the AC pins of the HLK-PM03</li><li>Use 2 female to female jumper wires to connect the VC+ pin of the HLK-PM03 to the VCC pin of the CC2530 and the VC- pin of the HLK-PM03 to the GND pin of the CC2530</li><li>Use double sided tape to fix the CC2530 and HLK-PM03 into the enclosure</li></ul><h3 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><p><img src="'+d+'" alt="1"></p><p><img src="'+C+'" alt="2"></p><p><img src="'+p+'" alt="3"></p><p><img src="'+h+'" alt="4"></p><p><img src="'+i+'" alt="CC2530 in an enclosure"></p><h2 id="done" tabindex="-1"><a class="header-anchor" href="#done" aria-hidden="true">#</a> Done!</h2><p>Now plug the CC2530 into a power outlet where it will automatically join your Zigbee network. (don&#39;t forget to set <code>permit_join: true</code> to enable joining of new devices). Enjoy your extended Zigbee network range! 😄</p>',12),B={},w=(0,e(983744).Z)(B,[["render",function(A,t){const e=(0,a.up)("RouterLink"),i=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[U,(0,a._)("p",null,[(0,a.Uk)("Now the CC2530 can be flashed using the same instructions as "),(0,a.Wm)(e,{to:"/guide/adapters/flashing/flashing_the_cc2531.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Flashing the CC2531")])),_:1}),(0,a.Uk)(". The router firmwares can be found "),(0,a._)("a",E,[(0,a.Uk)("here"),(0,a.Wm)(i)]),(0,a.Uk)(".")]),u])}]])},690070:(A,t,e)=>{A.exports=e.p+"assets/img/cc2530.3b0e534a.jpg"},980654:A=>{A.exports="data:image/jpeg;base64,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"},18476:(A,t,e)=>{A.exports=e.p+"assets/img/cc2530_pin_layout.d28e67d9.png"},122743:A=>{A.exports="data:image/jpeg;base64,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"},861430:(A,t,e)=>{A.exports=e.p+"assets/img/webee_cc2530_cc2591_pinlayout.c476b9b5.png"}}]);