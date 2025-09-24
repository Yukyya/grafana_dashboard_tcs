import {test} from '@playwright/test'
import { Page } from '@playwright/test'

export async function findProbeTooltip(page: Page, probeName: string) {
  const canvas = page.locator('canvas');
  const box = await canvas.boundingBox();

  if (!box) throw new Error('Canvas not found');

  for (let y = 50; y < box.height; y += 50) {
    for (let x = 50; x < box.width; x += 50) {
      await page.mouse.move(box.x + x, box.y + y);
      await page.waitForTimeout(300);

      const tooltip = page.locator('.panel-tooltip');
      if (await tooltip.isVisible()) {
        const content = await tooltip.textContent();
        if (content?.includes(probeName)) {
          console.log(`Found probe ${probeName} at ${x},${y}`);
          return true;
        }
      }
    }
  }

  throw new Error(`Probe ${probeName} not found on map`);
}
