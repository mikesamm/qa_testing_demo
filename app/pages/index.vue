<template>
  <div class="mb-12">
    <h1 class="project-title">Smart Home Web Application</h1>
    <p class="project-description">
      A demo project showcasing a QA strategy and test suites for a smart home
      web application.
    </p>
    <p class="project-description">Please navigate using the menu above.</p>
    <UCard
      variant="subtle"
      class="about-card centered-content mb-12"
    >
      <template #header>
        <h2>Hi Leviton Engineering Team!</h2>
        <p>
          My name is Mike, I am a local New Orleans software developer looking
          to jump into QA.
        </p>
      </template>

      <template #default>
        <h5>I made this project in under two weeks to showcase that:</h5>
        <ul>
          <li>I am a proactive self-starter</li>
          <li>I embrace challenges</li>
          <li>I thrive in a fast-paced environment</li>
        </ul>
        <h5>Quick QA stack breakdown:</h5>
        <ul>
          <li><strong>Playwright</strong> for end-to-end test automation</li>
          <li>
            <strong>GitHub Actions</strong> and <strong>Vercel</strong> for
            CI/CD workflow
          </li>
          <li><strong>GitHub Issues</strong> for defect logging</li>
        </ul>
        <h5>I would love to talk more about the position, let's connect!</h5>
        <div class="flex flex-row justify-between mt-4">
          <a href="https://www.linkedin.com/in/mike-sammartino/"
            ><UIcon
              size="24"
              name="i-lucide-linkedin"
            />
            /in/mike-sammartino/</a
          >
          <a href="https://github.com/mikesamm"
            ><UIcon
              size="24"
              name="i-lucide-github"
            />
            /mikesamm</a
          >
          <span
            ><UIcon
              size="24"
              name="i-lucide-mail"
            />
            mike@mikesammartino.com</span
          >
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
.centered-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
