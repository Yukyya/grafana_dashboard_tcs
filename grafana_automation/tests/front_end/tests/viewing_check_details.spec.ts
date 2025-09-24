import { test, expect } from '@playwright/test';
import { SynteticsPage } from '../../support/POMs/synthetics_page/synthetics.page';
import { findProbeTooltip } from '../../support/utils/helpers';


//   Test Case 2: Viewing Check Details 

//   Objective: To verify that selecting a check displays its details.

//    Steps:
//   1. Open the Grafana dashboard and navigate to the "Synthetics" section.
//   2. Select a check (e.g., "Grafana Main Hostname DNS Resolution").
//   3. Verify that the table is populated with elements matching the check type.
//   4. The user is able to select the result.

//    Expected Outcome: The table is populated with elements matching the check type.
 


test.describe('Filtering Checks on the Synthetics Dashboard', () => {
  let syntheticsPage : SynteticsPage;

test.beforeEach(async ({ page}) =>{
await page.goto('https://play.grafana.org/a/grafana-synthetic-monitoring-app/home');
 syntheticsPage = new SynteticsPage(page);
})
test('Filtering Checks by Location', async ({ page }) => {
  await test.step('Click on the region filter and select the region', async () => {
    await syntheticsPage.selectCheckType('dns')
    await syntheticsPage.clickDataLink();
    await expect(page.locator('h2')).toContainText(['Grafana', 'DNS']);
    
  });

 });

});

