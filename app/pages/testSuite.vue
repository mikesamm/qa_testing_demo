<template>
  <h1 class="project-title">Test Suites</h1>
  <UTable :data="tc_dashboardUI" />
  <UTable :data="tc_onOffSwitch" />
  <UTable :data="tc_dimmerSwitch" />
  <UTable :data="tc_sceneSelectSwitch" />
  <UTable :data="tc_breakerSwitches" />
</template>

<script setup lang="ts">
import tc_dashboardUI from '../assets/data/tc-dashboardui.json'
import tc_onOffSwitch from '../assets/data/tc-onoffswitch.json'
import tc_dimmerSwitch from '../assets/data/tc-dimmerswitch.json'
import tc_sceneSelectSwitch from '../assets/data/tc-sceneselect.json'
import tc_breakerSwitches from '../assets/data/tc-breakerswitches.json'
</script>
