<template>
  <div
    class="flex flex-col w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
  >
    <h1>Dashboard</h1>
    <div class="flex flex-row justify-between mb-4">
      <div id="big-single-light"></div>
      <div id="multi-lights">
        <div class="single-light"></div>
        <div class="single-light"></div>
        <div class="single-light"></div>
      </div>
      <div id="outlet"></div>
      <div id="breakers">
        <div class="circuit-breaker"></div>
        <div class="circuit-breaker"></div>
        <div class="circuit-breaker"></div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <DimmerSwitch />
      <MultiSwitch :labels="['Morning', 'Cooking', 'Reading']" />
      <OnOffSwitch />
      <MultiSwitch :labels="['1', '2', '3']" />
    </div>
  </div>
</template>
