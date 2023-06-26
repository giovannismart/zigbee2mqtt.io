"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27761],{901242:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-c991ecec","path":"/devices/TH1124ZB-G2.html","title":"Sinopé TH1124ZB-G2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé TH1124ZB-G2 control via MQTT","description":"Integrate your Sinopé TH1124ZB-G2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:57.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Thermostat_occupancy (enum)","slug":"thermostat-occupancy-enum","link":"#thermostat-occupancy-enum","children":[]},{"level":3,"title":"Second_display_mode (enum)","slug":"second-display-mode-enum","link":"#second-display-mode-enum","children":[]},{"level":3,"title":"Thermostat_outdoor_temperature (numeric)","slug":"thermostat-outdoor-temperature-numeric","link":"#thermostat-outdoor-temperature-numeric","children":[]},{"level":3,"title":"Outdoor_temperature_timeout (numeric)","slug":"outdoor-temperature-timeout-numeric","link":"#outdoor-temperature-timeout-numeric","children":[]},{"level":3,"title":"Enable_outdoor_temperature (binary)","slug":"enable-outdoor-temperature-binary","link":"#enable-outdoor-temperature-binary","children":[]},{"level":3,"title":"Temperature_display_mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Time_format (enum)","slug":"time-format-enum","link":"#time-format-enum","children":[]},{"level":3,"title":"Backlight_auto_dim (enum)","slug":"backlight-auto-dim-enum","link":"#backlight-auto-dim-enum","children":[]},{"level":3,"title":"Keypad_lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Main_cycle_output (enum)","slug":"main-cycle-output-enum","link":"#main-cycle-output-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1687799902000},"filePathRelative":"devices/TH1124ZB-G2.md"}')},525692:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var a=o(166252);const d=(0,a._)("h1",{id:"sinope-th1124zb-g2",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#sinope-th1124zb-g2","aria-hidden":"true"},"#"),(0,a.Uk)(" Sinopé TH1124ZB-G2")],-1),i=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"TH1124ZB-G2")],-1),u=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Zigbee line volt thermostat")],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand, running_state), thermostat_occupancy, second_display_mode, thermostat_outdoor_temperature, outdoor_temperature_timeout, enable_outdoor_temperature, temperature_display_mode, time_format, backlight_auto_dim, keypad_lockout, main_cycle_output, power, current, voltage, energy, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TH1124ZB-G2.jpg",alt:"Sinopé TH1124ZB-G2"})])],-1),s=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of the thermostat. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="thermostat-occupancy-enum" tabindex="-1"><a class="header-anchor" href="#thermostat-occupancy-enum" aria-hidden="true">#</a> Thermostat_occupancy (enum)</h3><p>Occupancy state of the thermostat. Value can be found in the published state on the <code>thermostat_occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_occupancy&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_occupancy&quot;: NEW_VALUE}</code>. The possible values are: <code>unoccupied</code>, <code>occupied</code>.</p><h3 id="second-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#second-display-mode-enum" aria-hidden="true">#</a> Second_display_mode (enum)</h3><p>Displays the outdoor temperature and then returns to the set point in &quot;auto&quot; mode, or clears in &quot;outdoor temp&quot; mode when expired.. Value can be found in the published state on the <code>second_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;second_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;second_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>setpoint</code>, <code>outdoor temp</code>.</p><h3 id="thermostat-outdoor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#thermostat-outdoor-temperature-numeric" aria-hidden="true">#</a> Thermostat_outdoor_temperature (numeric)</h3><p>Outdoor temperature for the secondary display. Value can be found in the published state on the <code>thermostat_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-99.5</code> and the maximum value is <code>99.5</code>. The unit of this value is <code>°C</code>.</p><h3 id="outdoor-temperature-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-timeout-numeric" aria-hidden="true">#</a> Outdoor_temperature_timeout (numeric)</h3><p>Time in seconds after which the outdoor temperature is considered to have expired. Value can be found in the published state on the <code>outdoor_temperature_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>30</code> and the maximum value is <code>64800</code>. The unit of this value is <code>Seconds</code>. Besides the numeric values the following values are accepected: <code>15 min</code>, <code>30 min</code>, <code>1 hour</code>.</p><h3 id="enable-outdoor-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-binary" aria-hidden="true">#</a> Enable_outdoor_temperature (binary)</h3><p>DEPRECATED: Use second_display_mode or control via outdoor_temperature_timeout. Value can be found in the published state on the <code>enable_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable_outdoor_temperature is ON, if <code>OFF</code> OFF.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum" aria-hidden="true">#</a> Temperature_display_mode (enum)</h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="time-format-enum" tabindex="-1"><a class="header-anchor" href="#time-format-enum" aria-hidden="true">#</a> Time_format (enum)</h3><p>The time format featured on the thermostat display. Value can be found in the published state on the <code>time_format</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_format&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_format&quot;: NEW_VALUE}</code>. The possible values are: <code>24h</code>, <code>12h</code>.</p><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum" aria-hidden="true">#</a> Backlight_auto_dim (enum)</h3><p>Control backlight dimming behavior. Value can be found in the published state on the <code>backlight_auto_dim</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_auto_dim&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on_demand</code>, <code>sensing</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad_lockout (enum)</h3><p>Enables or disables the device’s buttons. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>.</p><h3 id="main-cycle-output-enum" tabindex="-1"><a class="header-anchor" href="#main-cycle-output-enum" aria-hidden="true">#</a> Main_cycle_output (enum)</h3><p>The length of the control cycle: 15_sec=normal 15_min=fan. Value can be found in the published state on the <code>main_cycle_output</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;main_cycle_output&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;main_cycle_output&quot;: NEW_VALUE}</code>. The possible values are: <code>15_sec</code>, <code>15_min</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',35),m={},p=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),d,(0,a._)("table",null,[i,(0,a._)("tbody",null,[c,(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,a.w5)((()=>[(0,a.Uk)("Sinopé")])),_:1})])]),r,n,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);