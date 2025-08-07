<template>
  <div class="markdown flex flex-col px-8 pb-12">
    <h1 class="project-title">Test Suites</h1>
    <h2>Dashboard UI</h2>
    <UTable :data="tc_dashboardUI" />
    <h2>Basic Switch</h2>
    <UTable :data="tc_onOffSwitch" />
    <h2>Dimmer Switch</h2>
    <UTable :data="tc_dimmerSwitch" />
    <h2>Scene Selection Switch</h2>
    <UTable :data="tc_sceneSelectSwitch" />
    <h2>Circuit Breaker Switches</h2>
    <UTable :data="tc_breakerSwitches" />
  </div>
</template>

<script setup lang="ts">
import tc_dashboardUI from '../assets/data/tc-dashboardui.json'
import tc_onOffSwitch from '../assets/data/tc-onoffswitch.json'
import tc_dimmerSwitch from '../assets/data/tc-dimmerswitch.json'
import tc_sceneSelectSwitch from '../assets/data/tc-sceneselect.json'
import tc_breakerSwitches from '../assets/data/tc-breakerswitches.json'
</script>
