import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let storageServiceMock: {
    saveHour: jest.Mock,
    saveMinute: jest.Mock,
  };

  beforeEach(() => {
    storageServiceMock = {
      saveHour: jest.fn(),
      saveMinute: jest.fn(),
    }
    component = new MainComponent(storageServiceMock);
  });

  it('should create', () => {
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

  describe('Trigger save values on change', () => {
    it('should trigger storageService to save selected hour', () => {
      component.receiveHourChange(5);
      expect(storageServiceMock.saveHour).toHaveBeenCalledWith(5);
    });

    it('should trigger storageService to save selected minute', () => {
      component.receiveMinuteChange(15);
      expect(storageServiceMock.saveMinute).toHaveBeenCalledWith(15);
    });
  });

  // TODO AVB: Load saved values and init time
});
