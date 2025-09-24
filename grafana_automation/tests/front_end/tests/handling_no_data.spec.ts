import { test, expect, Page } from '@playwright/test';
import { SynteticsPage } from '../../support/POMs/synthetics_page/synthetics.page';
import { findProbeTooltip } from '../../support/utils/helpers';


// Test Case: Handling No Data Scenario (Simple Version)

// Objective: To verify that the system displays a message when no checks are found after applying a filter.

// Steps:
// 1.Open the Grafana dashboard and navigate to the "Synthetics" section.
// 2.Apply a filter that would result in no matching checks (e.g., select a non-existent location or check type).
// 3.Verify that the dashboard displays a message such as "No data available" or "No checks found."

// Expected Outcome:
// A message indicating that no checks are found should appear on the dashboard (e.g., "No checks found").


test.describe('Filtering Checks on the Synthetics Dashboard', () => {
  let syntheticsPage : SynteticsPage;

test.beforeEach(async ({ page}) =>{
await page.goto('https://play.grafana.org/a/grafana-synthetic-monitoring-app/home');
 syntheticsPage = new SynteticsPage(page);
})
test('To verify that the system displays a message when no checks are found after applying a filter.', async ({ page }) => {
  await test.step('Click on the region filter and select the region', async () => {
    await syntheticsPage.selectRegion('NODATA');
    await page.waitForSelector('text=No data', { timeout: 5000 });
    const noDataLocator = page.locator('[data-testid="data-testid Panel data error message"]').nth(0)
    await expect(noDataLocator).toBeVisible({ timeout: 5000 });
  
  }); 

 });

});
