import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let storageServiceMock: {
    saveHour: jest.Mock,
    saveMinute: jest.Mock,
    getHour: jest.Mock,
    getMinute: jest.Mock,
  };

  beforeEach(() => {
    storageServiceMock = {
      saveHour: jest.fn(),
      saveMinute: jest.fn(),
      getHour: jest.fn(),
      getMinute: jest.fn(),
    };
    component = new MainComponent(storageServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Pass trow received hours and minutes', () => {
    it('should set "outputHour" to the same value as inputHour', () => {
      component.onHourChange(2);
      expect(component.outputHour).toBe(2);
    });

    it('should set "outputMinute" to the same value as inputMinute', () => {
      component.onMinuteChange(10);
      expect(component.outputMinute).toBe(10);
    });
  });

  describe('Trigger save values on change', () => {
    it('should trigger storageService to save selected hour', () => {
      component.onHourChange(5);
      expect(storageServiceMock.saveHour).toHaveBeenCalledWith(5);
    });

    it('should trigger storageService to save selected minute', () => {
      component.onMinuteChange(15);
      expect(storageServiceMock.saveMinute).toHaveBeenCalledWith(15);
    });
  });

  describe('Load saved hour', () => {
    it('should request "hour" from Storage Service', () => {
      storageServiceMock.getHour.mockReturnValue(3);
      component.ngOnInit();
      expect(storageServiceMock.getHour).toHaveBeenCalled();
      expect(component.outputHour).toBe(3);
    });

    it('should not trigger new "save" hour cycle', () => {
      // reduce one useless cycle (onInit -> load from Storage -> write again into storage)
      storageServiceMock.getHour.mockReturnValue(3);
      component.ngOnInit();
      expect(storageServiceMock.getHour).toHaveBeenCalled();
      expect(storageServiceMock.saveHour).not.toHaveBeenCalled();
    });
  });


  describe('Load saved minute', () => {
    it('should request "minute" from Storage Service', () => {
      storageServiceMock.getMinute.mockReturnValue(15);
      component.ngOnInit();
      expect(storageServiceMock.getMinute).toHaveBeenCalled();
      expect(component.outputMinute).toBe(15);
    });

    it('should not trigger new "save" minute cycle', () => {
      // reduce one useless cycle (onInit -> load from Storage -> write again into storage)
      storageServiceMock.getMinute.mockReturnValue(10);
      component.ngOnInit();
      expect(storageServiceMock.getMinute).toHaveBeenCalled();
      expect(storageServiceMock.saveMinute).not.toHaveBeenCalled();
    });
  });
});
