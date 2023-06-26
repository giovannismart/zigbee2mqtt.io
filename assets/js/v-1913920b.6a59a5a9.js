"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67845],{533797:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-1913920b","path":"/devices/MC-02.html","title":"Shade Control MC-02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Shade Control MC-02 control via MQTT","description":"Integrate your Shade Control MC-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:09:28.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Firmware upgrade","slug":"firmware-upgrade","link":"#firmware-upgrade","children":[]},{"level":3,"title":"Reset","slug":"reset","link":"#reset","children":[]},{"level":3,"title":"Factory reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1687799902000},"filePathRelative":"devices/MC-02.md"}')},704013:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(166252);const a=(0,o._)("h1",{id:"shade-control-mc-02",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#shade-control-mc-02","aria-hidden":"true"},"#"),(0,o.Uk)(" Shade Control MC-02")],-1),r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"MC-02")],-1),l=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Automate shades and blinds with beaded chains")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, cover (state, position), linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MC-02.jpg",alt:"Shade Control MC-02"})])],-1),h=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),u=(0,o._)("h3",{id:"calibration",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#calibration","aria-hidden":"true"},"#"),(0,o.Uk)(" Calibration")],-1),p={href:"https://www.shade-control.com/pages/simple-installation",target:"_blank",rel:"noopener noreferrer"},b=(0,o.uE)('<p>The app does not require registration or an account and after the initial calibration the device can be used without it, over Zigbee.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the middle (stop) button for a few seconds until the led starts blinking with blue color.</p><h3 id="firmware-upgrade" tabindex="-1"><a class="header-anchor" href="#firmware-upgrade" aria-hidden="true">#</a> Firmware upgrade</h3><p>Can be done using the bluetooth app from the previous section.</p><h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h3><p>Press the middle (stop) button for about 5-10 seconds until the led changes to red color.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory reset</h3><p>Perform a reset while the front cover of the device is removed.</p>',9),g=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),m=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),v={},f=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,o.up)("RouterLink"),v=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[r,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Shade%20Control"},{default:(0,o.w5)((()=>[(0,o.Uk)("Shade Control")])),_:1})])]),d,s,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,u,(0,o._)("p",null,[(0,o.Uk)("Download the iOS or Android app from the "),(0,o._)("a",p,[(0,o.Uk)("device's website"),(0,o.Wm)(v)]),(0,o.Uk)(" to calibrate the motor direction and low/high limits over bluetooth.")]),b,(0,o.kq)(" Notes END: Do not edit below this line "),g,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);