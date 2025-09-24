import { test, expect } from '@playwright/test';
import { SynteticsPage } from '../../support/POMs/synthetics_page/synthetics.page';
import { findProbeTooltip } from '../../support/utils/helpers';


// Test Case : Filtering Checks by Region 

// Objective: To verify that applying a location filter correctly updates the displayed checks.

// Steps:
// 1.Open the Grafana dashboard and navigate to the "Synthetics" section.
// 2.Apply a location filter (e.g., "North America") from the map filter option.
// 3.Verify that the checks table updates to display only checks for the selected location.

// Expected Outcome:
// The checks table should only display checks related to the "EMEA" location.


test.describe('Filtering Checks on the Synthetics Dashboard', () => {
  let syntheticsPage : SynteticsPage;

test.beforeEach(async ({ page}) =>{
await page.goto('https://play.grafana.org/a/grafana-synthetic-monitoring-app/home');
 syntheticsPage = new SynteticsPage(page);
})
test('Filtering Checks by Location', async ({ page }) => {
  await test.step('Click on the region filter and select the region', async () => {
    await syntheticsPage.selectRegion('EMEA');
    const rows = page.locator('div[role="row"].rdg-row:not(.rdg-header-row)');
    await expect(rows).toHaveCount(5); // This assertion counts the number of rows displayed in the table after applying the "EMEA" Region Filter.
    
  });

 });

});

