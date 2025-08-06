<template>
  <div
    class="flex flex-col w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="flex flex-row flex-wrap md:flex-wrap justify-between p-4 gap-4">
      <DimmerSwitch />
      <MultiLights :labels="['Morning', 'Cooking', 'Reading']" />
      <SmartOutlet />
      <MultiBreakers :labels="['1 - 15A', '2 - 20A', '3 - 20A']" />
    </div>
  </div>
</template>
