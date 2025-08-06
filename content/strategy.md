---
title: QA Strategy
---

# QA Strategy

## Testing philosophy

Our quality assurance approach centers on making value immediately available to end users through comprehensive, user-focused testing practices. We believe that quality is built through continuous validation throughout the development lifecycle, combining systematic test coverage and open exploration to uncover expected and unexpected behaviors. Our testing extends beyond verifying that features work as specified–we evaluate whether they work as required by our users.

- We prioritize user experience and their goals over feature completeness
- We test early and often to catch issues when they're cheapest to fix
- We believe in exploratory testing alongside scripted tests to uncover unexpected issues
- We test not just for functionality, but for usability and reliability
- We advocate for the end user throughout the development process

## Overview

### Purpose

The Smart Home Web Application is a device management platform that enables users to remotely monitor, control, and automate their connected home devices through a web interface. The application serves as a central hub for managing lights, outlets, and circuit breakers, providing scheduling and automation capabilities to enhance convenience and energy efficiency.

### Primary Users

- Homeowners and renters with smart home devices
- Tech-savvy individuals dialing in their interior lighting scenes
- Energy-conscious users seeking to minimize unnecessary electricity usage
- Busy professionals who value remote home management

### User Technical Proficiency

- Basic users: Comfortable with standard web applications, primarily use manual controls (ON/OFF, dimming)
- Intermediate users: Create basic automations and schedules
- Advanced users: Make complex automations and integrate into other smart home systems

### Key user goals

- Remote control: Toggle devices away from physical, direct switch
- Automation: Set up time-based rules, especially during natural daylight transitions
- Monitoring: Check device status and connectivity in real-time

### Critical Success Factors

Users expect the application to be intuitive, reliable, and responsive. Device state changes must be accurately reflected in the interface, automations must trigger consistently, and the system must gracefully handle connectivity issues without compromising user trust or safety.

## Scope

### Web UI

- Functional and manual/visual tests in the following browsers:
  - Chrome 139, Chrome Android 139
  - Firefox 141, Firefox for Android 141
  - Safari 18.5, Safari 18.5 on iOS
  - Edge 138
- Display on desktop viewports (1440x900 and smaller) and mobile viewports (as small as 375x667)
- Device interfaces: ON/OFF switch, dimmer, scene picker multi-switch, circuit breaker switches
- Device indicators: lights, outlet, circuit breakers

### Backend simulation / API testing

- REST API endpoints for device state management (GET/POST /devices/{id}/state) and custom metadata (GET/POST/PATCH/DELETE /devices/{id}/name)
- Mock server responses for device status reflecting connection, state, and any errors
- Automation rules REST API response validation

### Automation logic

- Time-based automation triggers (sunset/sunrise, specific times, recurring schedules)
- Device state change automation (turn off outlets when circuit breaker trips)
- Automation rule validation (valid date and time) and conflict detection

### Responsive / mobile view behavior

- Touch interactions for device controls on mobile devices

### Accessibility Testing

- WCAG 2.1 Level AA compliance validation
- Keyboard navigation testing (tab order, focus indicators)
- Screen reader compatibility (NVDA, JAWS, VoiceOver)
- Color contrast verification (4.5:1 for normal text, 3:1 for large text)
- Alternative text validation for device status indicators

## Out of Scope

- Authenticated cloud service for off-site device control
- Real-time IoT protocol testing
- Security testing

## Test types

| **Type**        | **Purpose**                                                                            |
| --------------- | -------------------------------------------------------------------------------------- |
| Functional      | Ensure behavior matches requirements                                                   |
| Integration     | Validate new contributions integrate with current production code                      |
| End-to-end      | Simulate user flows in multiple browser environments                                   |
| Visual / manual | Manually confirm user flows are executable in all browser environments                 |
| Accessibility   | Ensure application meets WCAG 2.1 AA standards and is usable by assistive technologies |

## Tools

| **Tool**       | **Function**                   | **Documentation**                  |
| -------------- | ------------------------------ | ---------------------------------- |
| Playwright     | end-to-end browser testing     | https://playwright.dev/            |
| GitHub Actions | continuos integration workflow | https://docs.github.com/en/actions |
| Nuxt           | full-stack web app framework   | https://nuxt.com/                  |
| Vercel         | app deployment                 | https://vercel.com/                |
| GitHub Issues  | bug reporting / defect logging | https://docs.github.com/en/issues  |
| WAVE           | Web accessibility evaluation   | https://wave.webaim.org/           |

## Environment

#### Local Development Server:

- Nuxt.js application running on Node.js v22.17
- Default URL: http://localhost:3000
- System requirements: 8GB RAM, modern browser support
- Supported OS: Windows 10+, macOS 12+, Linux (Ubuntu 20.04+)

## Requirements

### Functional Requirements

| **ID** | **Requirement**                                                                                                         | **Test Priority** | **Test Areas**                   |
| ------ | ----------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------- |
| FR-01  | Users must view a dashboard displaying all connected devices with current status (online/offline, on/off, dimmer level) | High              | Device Control, UI Display       |
| FR-02  | Users must toggle device states: ON/OFF for lights and outlets, dimming levels 0-100% for compatible lights             | High              | Device Control, State Management |
| FR-03  | Users must select and activate predefined lighting scenes from scene picker interface                                   | Medium            | Device Control, Scene Management |
| FR-04  | Users must control circuit breaker states (on/off) and view breaker status/trip notifications                           | High              | Device Control, Safety Features  |
| FR-05  | Users must create automation rules with time-based triggers (specific times, sunset/sunrise, recurring schedules)       | High              | Automation Creation              |
| FR-06  | Users must edit and delete existing automation rules                                                                    | Medium            | Automation Management            |
| FR-07  | Automation rules must execute at scheduled times and change target device states accordingly                            | High              | Automation Execution             |
| FR-08  | System must prevent creation of conflicting or invalid automation rules (invalid times, conflicting schedules)          | Medium            | Automation Validation            |

### Non-Functional Requirements

| **ID** | **Requirement**                                                                               | **Test Priority** | **Test Areas**                       |
| ------ | --------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------ |
| NFR-01 | Device state changes must be reflected in UI within 2 seconds of user action                  | High              | Performance, State Synchronization   |
| NFR-02 | Application must handle API failures gracefully with user-friendly error messages             | High              | Error Handling, Reliability          |
| NFR-03 | UI must adapt responsively to screen sizes from 320px (mobile) to 1440px+ (desktop)           | Medium            | Responsive Design                    |
| NFR-04 | Application must function consistently across Chrome, Firefox, Safari, and Edge browsers      | Medium            | Cross-browser Compatibility          |
| NFR-05 | Automation triggers must execute within 30 seconds of scheduled time                          | High              | Automation Reliability               |
| NFR-06 | System must maintain device state accuracy - displayed states must match actual device states | High              | Data Integrity                       |
| NFR-07 | Application must meet WCAG 2.1 Level AA accessibility standards                               | Medium            | Accessibility, Compliance            |
| NFR-08 | All interactive elements must be keyboard accessible with visible focus indicators            | Medium            | Accessibility, Keyboard Navigation   |
| NFR-09 | Device status must be conveyed through multiple methods (visual, text, ARIA labels)           | Medium            | Accessibility, Screen Reader Support |

### Test Coverage Priority

**Critical (Must Pass):**

- FR-01, FR-02, FR-04, FR-07, NFR-01, NFR-02, NFR-05, NFR-06

**Important (Should Pass):**

- FR-03, FR-05, FR-06, FR-08, NFR-03, NFR-04

**Nice to Have (Could Pass):**

- Advanced error scenarios, edge case automation rules, extreme viewport testing

## Test Execution and Reporting

### Test Case Documentation

**Format:** Test cases will be tracked in a shared Google Sheets document, following this [template](https://docs.google.com/spreadsheets/d/1K052IkA_YzmiDYTXihj9eb6ImOkSiqffKBTmxZTIjXY/edit?usp=sharing).

**Storage:** All test cases stored in this shared [Google Sheet](https://docs.google.com/spreadsheets/d/1hhWjSmXUbGn3HfyO52k_ludq8DorTfikSrtIOn0Yhjs/edit?usp=sharing).

**Automated test suites are in:** `/tests/e2e/`

### Test Execution Workflow

**Manual Testing:**

1. QA engineer selects test cases based on features being tested
2. Executes test cases following documented steps
3. Records results (Pass/Fail/Blocked) with screenshots for failures
4. Updates test execution status in shared tracking document

**Automated Testing:**

1. Tests run automatically on every pull request via GitHub Actions
2. Results posted as PR comments with pass/fail summary
3. Failed tests include screenshots and error logs
4. Full test reports generated and stored as CI artifacts

### Results Communication

**Daily Updates:**

- Test execution progress shared in team Slack channel (#qa-updates)
- Automated test results posted automatically to #dev-notifications

**Weekly Reports:**

- Summary email to stakeholders covering:
  - Test cases executed vs planned
  - Pass/fail rates by feature area
  - Critical bugs discovered
  - Testing blockers or risks

**Release Reports:**

- Comprehensive test summary before each deployment
- Includes regression test results, new feature validation, and outstanding issues
- Delivered via email to product team and management

### Stakeholder Communication

**Development Team:**

- Real-time notifications for failed automated tests
- Bug reports filed immediately via GitHub issues
- Test case reviews during sprint planning

**Product Team:**

- Weekly testing status in sprint review meetings
- Feature readiness assessments before release
- User impact analysis for discovered issues

**Management:**

- Monthly quality metrics dashboard
- Release readiness reports
- Critical issue escalation via direct communication

### Defect Logging

**Required Information for Bug Reports:**

- **Title**: Clear, concise summary (e.g., "Dimmer switch resets to 0% after page refresh")
- **Environment**: Browser, OS, device type, application version
- **Steps to Reproduce**: Numbered, specific steps to recreate the issue
- **Expected Result**: What should happen
- **Actual Result**: What actually happened
- **Severity Level**: Critical, High, Medium, Low
- **Priority**: P1 (Blocker), P2 (High), P3 (Medium), P4 (Low)
- **Device/Feature**: Which device or feature is affected
- **Screenshots/Videos**: Visual evidence when applicable
- **Console Logs**: Browser console errors or relevant log outputs
- **User Impact**: How this affects end users

**Additional Requirements:**

- **Reproducibility**: Always, Sometimes, Once (with percentage if known)
- **Workaround**: If any temporary solution exists
- **Related Issues**: Links to similar or dependent bugs
- **Test Case Reference**: Which test case uncovered the defect

**GitHub Issue Template:** There is a "Bug Report" template option that follows these logging requirements on the [repository](https://github.com/mikesamm/qa_testing_demo/issues).

## Future Enhancements

- Cloud server integration for authenticated, off-site device control

## Documentation

### User stories

As a user...

1. I want to turn my light on and off as needed.
2. I want to dim my light because it is too bright for reading at night.
3. I want to toggle my scene for when I'm cooking in the kitchen.
4. I want to turn my outlet off so that my child can't use it.
5. I want to know if my breaker is tripped when a light unexpectedly turns off.
6. I want to turn off my circuit breakers because I will be leaving the house for days and don't need the electricity.
