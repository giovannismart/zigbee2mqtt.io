"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[22768],{199084:(e,a,t)=>{t.r(a),t.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-0a190785","path":"/advanced/remote-adapter/connect_to_a_remote_sonoff_zbbridge.html","title":"Connect to a remote Sonoff ZBBridge","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"1. Flash Tasmota ZBBridge","slug":"_1-flash-tasmota-zbbridge","link":"#_1-flash-tasmota-zbbridge","children":[]},{"level":2,"title":"2. Configure","slug":"_2-configure","link":"#_2-configure","children":[]}],"git":{"updatedTime":1687799902000},"filePathRelative":"advanced/remote-adapter/connect_to_a_remote_sonoff_zbbridge.md"}')},368991:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(166252);const o=(0,n.uE)('<h1 id="connect-to-a-remote-sonoff-zbbridge" tabindex="-1"><a class="header-anchor" href="#connect-to-a-remote-sonoff-zbbridge" aria-hidden="true">#</a> Connect to a remote Sonoff ZBBridge</h1><p>This how-to explains how to run Zigbee2MQTT with a comercial Sonoff ZBBridge Gateway. We will use a Sonoff ZBBridge Gateway with custom firmware to connect to a serial port over TCP. In this way you can use a simple premade Hub/Gateway flash it with custom firmware and then use it as your coordinator.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Keep in mind that the EZSP support is currently <strong>experimental</strong>.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>WiFi-based Serial-to-IP bridges are <strong>not recommended</strong> as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections.</p></div><h2 id="_1-flash-tasmota-zbbridge" tabindex="-1"><a class="header-anchor" href="#_1-flash-tasmota-zbbridge" aria-hidden="true">#</a> 1. Flash Tasmota ZBBridge</h2>',5),r={href:"https://tasmota.github.io/docs/Zigbee/",target:"_blank",rel:"noopener noreferrer"},s={href:"https://www.digiblur.com/2020/07/how-to-use-sonoff-zigbee-bridge-with.html",target:"_blank",rel:"noopener noreferrer"},i=(0,n.uE)('<h2 id="_2-configure" tabindex="-1"><a class="header-anchor" href="#_2-configure" aria-hidden="true">#</a> 2. Configure</h2><p>Now edit the Zigbee2MQTT <code>configuration.yaml</code> accordingly, replace <code>192.168.2.13</code> with the IP or hostname of your system where the adapter is connected to. Also replace <code>20108</code> with the port you configured while flashing the Gateway (in step 6 from previous point).</p><p>Keep in mind that the EZSP support is currently <strong>experimental</strong>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;tcp://192.168.2.13:20108&#39;</span>\n    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> ezsp\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Done! Now you can start Zigbee2MQTT.</p>',5),l={},c=(0,t(983744).Z)(l,[["render",function(e,a){const t=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[o,(0,n._)("p",null,[(0,n.Uk)("In order for the gateway to be usefull for us we want it flashed with custom firmware ("),(0,n._)("a",r,[(0,n.Uk)("tasmota-zbbridge"),(0,n.Wm)(t)]),(0,n.Uk)(") so we can free ourselves from the cloud. For flashing procedure follow "),(0,n._)("a",s,[(0,n.Uk)("DigiBlurs guide"),(0,n.Wm)(t)]),(0,n.Uk)(" up untill step 6.")]),i])}]])}}]);