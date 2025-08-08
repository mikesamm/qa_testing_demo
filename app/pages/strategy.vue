<template>
  <div class="strategy centered-content">
    <h1>Smart Home Web App QA Strategy</h1>

    <h2>Testing Philosophy</h2>

    <p>
      Our quality assurance approach centers on making value immediately
      available to end users through comprehensive, user-focused testing
      practices. We believe that quality is built through continuous validation
      throughout the development lifecycle, combining systematic test coverage
      and open exploration to uncover expected and unexpected behaviors. Our
      testing extends beyond verifying that features work as specified–we
      evaluate whether they work as required by our users.
    </p>

    <ul>
      <li>
        We prioritize user experience and their goals over feature completeness
      </li>
      <li>
        We test early and often to catch issues when they're cheapest to fix
      </li>
      <li>
        We believe in exploratory testing alongside scripted tests to uncover
        unexpected issues
      </li>
      <li>
        We test not just for functionality, but for usability and reliability
      </li>
      <li>We advocate for the end user throughout the development process</li>
    </ul>

    <h2>Overview</h2>

    <h3>Purpose</h3>

    <p>
      The Smart Home Web Application is a device management platform that
      enables users to remotely monitor, control, and automate their connected
      home devices through a web interface. The application serves as a central
      hub for managing lights, outlets, and circuit breakers, providing
      scheduling and automation capabilities to enhance convenience and energy
      efficiency.
    </p>

    <h3>Primary Users</h3>

    <ul>
      <li>Homeowners and renters with smart home devices</li>
      <li>Tech-savvy individuals dialing in their interior lighting scenes</li>
      <li>
        Energy-conscious users seeking to minimize unnecessary electricity usage
      </li>
      <li>Busy professionals who value remote home management</li>
    </ul>

    <h3>User Technical Proficiency</h3>

    <ul>
      <li>
        <strong>Basic users:</strong> Comfortable with standard web
        applications, primarily use manual controls (ON/OFF, dimming)
      </li>
      <li>
        <strong>Intermediate users:</strong> Create basic automations and
        schedules
      </li>
      <li>
        <strong>Advanced users:</strong> Make complex automations and integrate
        into other smart home systems
      </li>
    </ul>

    <h3>Key User Goals</h3>

    <ul>
      <li>
        <strong>Remote control:</strong>Toggle devices away from physical,
        direct switch
      </li>
      <li>
        <strong>Automation:</strong> Set up time-based rules, especially during
        natural daylight transitions
      </li>
      <li>
        <strong>Monitoring:</strong> Check device status and connectivity in
        real-time
      </li>
    </ul>

    <h3>Critical Success Factors</h3>

    <p>
      Users expect the application to be intuitive, reliable, and responsive.
      Device state changes must be accurately reflected in the interface, custom
      automations must trigger consistently, and the system must gracefully
      handle connectivity issues without compromising user trust or safety.
    </p>

    <h2>Scope</h2>

    <h3>Web UI</h3>

    <ul>
      <li>
        Functional and manual/visual tests in the following browsers:
        <ul>
          <li>Chrome 139, Chrome Android 139</li>
          <li>Firefox 141, Firefox for Android 141</li>
          <li>Safari 18.5, Safari 18.5 on iOS</li>
          <li>Edge 138</li>
        </ul>
      </li>
      <li>
        Display on desktop viewports (1440x900 and smaller) and mobile viewports
        (as small as 375x667)
      </li>
      <li>
        Device interfaces: ON/OFF switch, dimmer, scene picker multi-switch,
        circuit breaker switches
      </li>
      <li>Device indicators: lights, outlet, circuit breakers</li>
    </ul>

    <h3>Backend Simulation / API Testing</h3>

    <ul>
      <li>
        REST API endpoints for device state management (GET/POST
        /devices/{id}/state) and custom metadata (GET/POST/PATCH/DELETE
        /devices/{id}/name)
      </li>
      <li>
        Mock server responses for device status reflecting connection, state,
        and any errors
      </li>
      <li>Automation rules REST API response validation</li>
    </ul>

    <h3>Automation Logic</h3>

    <ul>
      <li>
        Time-based automation triggers (sunset/sunrise, specific times,
        recurring schedules)
      </li>
      <li>
        Device state change automation (turn off outlets when circuit breaker
        trips)
      </li>
      <li>
        Automation rule validation (valid date and time) and conflict detection
      </li>
    </ul>

    <h3>Responsive / Mobile View Behavior</h3>

    <ul>
      <li>Touch interactions for device controls on mobile devices</li>
    </ul>

    <h3>Accessibility Testing</h3>

    <ul>
      <li>WCAG 2.1 Level AA compliance validation</li>
      <li>Keyboard navigation testing (tab order, focus indicators)</li>
      <li>Screen reader compatibility (NVDA, JAWS, VoiceOver)</li>
      <li>
        Color contrast verification (4.5:1 for normal text, 3:1 for large text)
      </li>
      <li>Alternative text validation for device status indicators</li>
    </ul>

    <h2>Out of Scope</h2>

    <ul>
      <li>Authenticated cloud service for off-site device control</li>
      <li>Real-time IoT protocol testing</li>
      <li>Security testing</li>
    </ul>

    <h2>Test Types</h2>

    <UTable
      class="table-font"
      :data="test_types"
    />

    <h2>Tools</h2>

    <UTable
      class="table-font"
      :data="test_tools"
    />

    <h2>Environment</h2>

    <ul>
      <li>Nuxt.js application running on Node.js v22.17</li>
      <li>Default URL: http://localhost:3000</li>
      <li>System requirements: 8GB RAM, modern browser support</li>
      <li>Supported OS: Windows 10+, macOS 12+, Linux (Ubuntu 20.04+)</li>
    </ul>

    <h2>Requirements</h2>

    <h3>Functional Requirements</h3>

    <UTable
      class="table-font"
      :data="func_reqs"
    />

    <h3>Non-Functional Requirements</h3>

    <UTable
      class="table-font"
      :data="non_func_reqs"
    />

    <h2>Test Execution and Reporting</h2>

    <h3>Test Case Documentation</h3>

    <ul>
      <li>
        <strong>Format: </strong>Test cases will be tracked in a shared Google
        Sheets document, following this
        <a
          href="https://docs.google.com/spreadsheets/d/1K052IkA_YzmiDYTXihj9eb6ImOkSiqffKBTmxZTIjXY/edit?usp=sharing"
          target="_blank"
          >template</a
        >.
      </li>
      <li>
        <strong>Storage: </strong>All test cases stored in this shared
        <a
          href="https://docs.google.com/spreadsheets/d/1hhWjSmXUbGn3HfyO52k_ludq8DorTfikSrtIOn0Yhjs/edit?usp=sharing"
          >Google Spreadsheet</a
        >.
      </li>
      <li>
        <strong>Automated test suites are in: </strong><code>/tests/e2e</code>
      </li>
    </ul>

    <h3>Test Execution Workflow</h3>

    <h4>Manual Testing</h4>

    <ol>
      <li>QA engineer selects test cases based on features being tested</li>
      <li>Executes test cases following documented steps</li>
      <li>Records results (Pass/Fail/Blocked) with screenshots for failures</li>
      <li>Updates test execution status in shared tracking document</li>
    </ol>

    <h4>Automated Testing</h4>

    <ol>
      <li>Tests run automatically on every pull request via GitHub Actions</li>
      <li>Results posted as PR comments with pass/fail summary</li>
      <li>Failed tests include screenshots and error logs</li>
      <li>Full test reports generated and stored as CI artifacts</li>
    </ol>

    <h3>Results Communication</h3>

    <strong>Daily Updates:</strong>

    <ul>
      <li>
        Test execution progress shared in team Slack channel (#qa-updates)
      </li>
      <li>Automated test results posted automatically to #dev-notifications</li>
    </ul>

    <strong>Weekly Reports:</strong>

    <ul>
      <li>
        Summary email to stakeholders covering:
        <ul>
          <li>Test cases executed vs planned</li>
          <li>Pass/fail rates by feature area</li>
          <li>Critical bugs discovered</li>
          <li>Testing blockers or risks</li>
        </ul>
      </li>
    </ul>

    <strong>Release Reports:</strong>

    <ul>
      <li>Comprehensive test summary before each deployment</li>
      <li>
        Includes regression test results, new feature validation, and
        outstanding issues
      </li>
      <li>Delivered via email to product team and management</li>
    </ul>

    <h3>Defect Logging</h3>

    <h4>Required Information for Bug Reports</h4>

    <ul>
      <li>
        <strong>Title</strong>: Clear, concise summary (e.g., "Dimmer switch
        resets to 0% after page refresh")
      </li>
      <li>
        <strong>Test Case Reference</strong>: Which test case uncovered the
        defect
      </li>
      <li>
        <strong>Environment</strong>: Browser, OS, device type, application
        version
      </li>
      <li>
        <strong>Steps to Reproduce</strong>: Numbered, specific steps to
        recreate the issue
      </li>
      <li><strong>Expected Result</strong>: What should happen</li>
      <li><strong>Actual Result</strong>: What actually happened</li>
      <li><strong>Severity Level</strong>: Critical, High, Medium, Low</li>
      <li>
        <strong>Priority</strong>: P1 (Blocker), P2 (High), P3 (Medium), P4
        (Low)
      </li>
      <li><strong>Feature</strong>: Which feature is affected</li>
      <li>
        <strong>Console Logs</strong>: Browser console errors or relevant log
        outputs
      </li>
      <li><strong>User Impact</strong>: How this affects end users</li>
    </ul>

    <h4>Additional Notes</h4>

    <ul>
      <li>
        <strong>Screenshots/Recordings</strong>: Visual evidence when applicable
      </li>
      <li>
        <strong>Reproducibility</strong>: Always, Sometimes, Once (with
        percentage if known)
      </li>
      <li><strong>Workarounds</strong>: If any temporary solution exists</li>
      <li>
        <strong>Related Issues</strong>: Links to similar or dependent bugs
      </li>
    </ul>

    <h4>GitHub Issue Template</h4>

    <p>
      There is a <strong>Bug Report</strong> template that follows these logging
      requirements on the
      <a href="https://github.com/mikesamm/qa_testing_demo/issues">repository</a
      >.
    </p>

    <h2>Future Enhancements</h2>

    <ul>
      <li>
        Cloud server integration for authenticated, off-site device control
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import test_tools from '~/assets/data/test-tools.json'
import test_types from '~/assets/data/test-types.json'
import func_reqs from '~/assets/data/req-functional.json'
import non_func_reqs from '~/assets/data/req-nonfunctional.json'
</script>

<style scoped>
.centered-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
