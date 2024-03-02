import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;

  it('should create', () => {
    component = new MainComponent();
    expect(component).toBeTruthy();
  });

  describe('Pass trow received hours and minutes', () => {
    it('should set "outputHour" to the same value as inputHour', () => {
        component.receiveHourChange(2);
        expect(component.outputHour).toBe(2);
    });

    it('should set "outputMinute" to the same value as inputMinute', () => {
      component.receiveMinuteChange(10);
      expect(component.outputMinute).toBe(10);
    });
  });
});
