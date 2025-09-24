# Synthetics Dashboard Automated Tests

This repository contains automated end-to-end tests for the Grafana Synthetics Monitoring dashboard, implemented using Playwright. The tests validate filtering functionality and check details on the Synthetics dashboard.

---

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <your-repo-url>

cd <your-repo-folder>

npm install


npx playwright test


npx playwright test tests/filtering-checks.spec.ts


npx playwright test --headed --verbose


 
```
# Automated Test Cases:

Verify the system displays a message when no checks are found after applying a filter.

Validate filtering by region correctly updates the displayed checks.

Check that individual check details are displayed correctly when selected.


# Notes:

The tests are implemented using Playwright with TypeScript.

Assertions check both visibility and correctness of displayed messages.