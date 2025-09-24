import { Page } from '@playwright/test';
import {test, expect} from '@playwright/test'

export class SynteticsPage {
  constructor(private page: Page) {}

  //////////  LOCATORS //////////

  getRegionDropdownInput = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text $__all-input').nth(0);
  getMapPanelContainer = () => this.page.getByTestId('data-testid Panel header All error rate by location')
  getMapPanelMenuButton = () => this.page.getByTestId('data-testid Panel menu All error rate by location')
  getMapPanelContent = () => this.page.getByTestId('data-testid panel content')
  getEMEARegion = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text EMEA')
  getAMERRegion = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text AMER')
  getAPACRegion = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text APAC')
  getProbeDropdown = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text Paris-input')
  getProbeDropdownHyderabad = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text Hyderabad-input')
  getProbeContainer = () => this.page.locator('#var-a321dcee-b09a-4cae-acab-c7109b922e35');
  getRemoveButton = () => this.page.getByRole('button', {name: 'Remove'});
  getCheckTypeInput = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text $__all-input').nth(2);
  getCheckTypeDropdown = () => this.page.getByTestId('data-testid Dashboard template variables Variable Value DropDown value link text dns')
  getDataLink = () => this.page.getByTestId('data-testid Data link');
  nodataContainerLocator = () => this.page.getByTestId('data-testid Panel data error message');

  //////////  ACTIONS //////////


 public async clickDataLink(index = 0) {
  const links = this.getDataLink();
  expect(await links.count()).toBeGreaterThan(0); // Better: handles 1 or more
  await links.nth(index).click();
}

  public async selectCheckType(type: string) {
    await this.getCheckTypeInput().click();
    await this.getCheckTypeInput().fill(type);
    await this.page.keyboard.press('Enter');
  }
 

  public async removeProbe(){
    await this.getRemoveButton().click();
  }

  public async selectProbe(probe: string){
    await this.getProbeDropdown().click();
    await this.getRemoveButton().click();
    await this.getProbeDropdown().fill(probe);
    await this.page.keyboard.press('Enter');
  }

  public async selectRegion(region: string) {
    await this.getRegionDropdownInput().click();
    await this.getRegionDropdownInput().fill(region);
    await this.page.keyboard.press('Enter');
};

public async openErrorRatePanelMenu(){
  await this.getMapPanelMenuButton().click()
};

public async verifyMapVisible(){
  await this.getMapPanelContent().isVisible();

}

public async selectEMEARegion(){
  await this.getEMEARegion().click();
  // await this.page.keyboard.press('Enter');
}

public async selectAPACRegion(){
  await this.getAPACRegion().click();
}

public async fillEMEARegion(data: string){
  await this.getEMEARegion().fill(data)
  await this.page.keyboard.press('Enter');
}

public async selectRegionDropdown(){
  await this.getRegionDropdownInput().click();

}

}




