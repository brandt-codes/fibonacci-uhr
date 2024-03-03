import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  const localStorageMock = (() => {
    let store: any = {};
    return {
      getItem: jest.fn((key) => store[ key ] || null),
      setItem: jest.fn((key, value) => store[ key ] = value.toString()),
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });


  beforeEach(() => {
    service = new StorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Save values to Local Storage', () => {
    it('should save hour to Storage', () => {
      service.saveHour(5);
      expect(localStorage.setItem).toHaveBeenCalledWith('fib-hour', '5');
    });

    it('should save minute to Storage', () => {
      service.saveMinute(25);
      expect(localStorage.setItem).toHaveBeenCalledWith('fib-minute', '25');
    });
  });


  describe('Load and validate Data from Storage', () => {
    it('should load hour from storage', () => {
      localStorage.setItem('fib-hour', '3');
      const hourFromStore = service.getHour();
      expect(hourFromStore).toBe(3);
    });

    it('should load minute from storage', () => {
      localStorage.setItem('fib-minute', '45');
      const minuteFromStore = service.getMinute();
      expect(minuteFromStore).toBe(45);
    });

    it('should accept only numbers from storage (hour)', () => {
      localStorage.setItem('fib-hour', 'Doe');
      const hourFromStore = service.getHour();
      expect(hourFromStore).toBe(0); // init value is 0
    });

    it('should accept only positive hour', () => {
      localStorage.setItem('fib-hour', '-1');
      const hourFromStore = service.getHour();
      expect(hourFromStore).toBe(0); // init value is 0
    });

    it('should accept only hours lower or equal 12', () => {
      localStorage.setItem('fib-hour', '13');
      const hourFromStore = service.getHour();
      expect(hourFromStore).toBe(0); // init value is 0
    });

    it('should accept only numbers from storage (minute)', () => {
      localStorage.setItem('fib-minute', 'x3y');
      const minuteFromStore = service.getMinute();
      expect(minuteFromStore).toBe(0); // init value is 0
    });

    it('should accept only positive minute', () => {
      localStorage.setItem('fib-hour', '-5');
      const minuteFromStore = service.getMinute();
      expect(minuteFromStore).toBe(0); // init value is 0
    });

    it('should accept only minute lower or equal 55', () => {
      localStorage.setItem('fib-hour', '60');
      const minuteFromStore = service.getMinute();
      expect(minuteFromStore).toBe(0); // init value is 0
    });
  });
})
;
