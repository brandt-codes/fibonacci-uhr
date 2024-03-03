import { ClockControlComponent } from './clock-control.component';

describe('ClockControlComponent', () => {
  let component: ClockControlComponent;

  beforeEach(() => {
    component = new ClockControlComponent();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init values on first load', () => {
    it('should set correct hour on start', () => {
        component.initialHour = 3;
        component.ngOnInit();
        expect(component.hour).toBe(3);
        expect(component.displayHour).toBe("03");
      });

    it('should set correct minute on start', () => {
      component.initialMinute = 15;
      component.ngOnInit();
      expect(component.minute).toBe(15);
      expect(component.displayMinute).toBe("15");
    });
  });

  describe('Change Hour', () => {
    it('should set hour to selected value', () => {
      component.onSelectHour({target: {value: '9'}});
      expect(component.hour).toBe(9);
    });

    it('should set "displayHour" to selected value, without leading 0', () => {
      component.onSelectHour({target: {value: '11'}});
      expect(component.displayHour).toBe('11');
    });

    it('should add a leading 0 to "displayHour" if selected hour is < 10', () => {
      component.onSelectHour({target: {value: '3'}});
      expect(component.displayHour).toBe('03');
    });

    it('should accept 0 hour', () => {
      component.onSelectHour({target: {value: '1'}});
      component.onSelectHour({target: {value: '0'}});
      expect(component.hour).toBe(0);
      expect(component.displayHour).toBe('00');
    });
  });


  describe('Change Minute', () => {
    it('should set minute to selected value', () => {
      component.onSelectMinute({target: {value: '3'}});
      expect(component.minute).toBe(3);
    });

    it('should set "displayMinute" to selected value, without leading 0', () => {
      component.onSelectMinute({target: {value: '12'}});
      expect(component.displayMinute).toBe('12');
    });

    it('should add a leading 0 to "displayMinute" if selected hour is < 10', () => {
      component.onSelectMinute({target: {value: '4'}});
      expect(component.displayMinute).toBe('04');
    });

    it('should accept 0 minutes', () => {
      component.onSelectMinute({target: {value: '1'}});
      component.onSelectMinute({target: {value: '0'}});
      expect(component.minute).toBe(0);
      expect(component.displayMinute).toBe('00');
    });
  });


  describe('Button - Plus', () => {
      it('should add 5 minutes on button + action', () => {
        component.minute = 10;
        component.plus5Minutes();
        expect(component.minute).toBe(15);
      });

    it('should reset minutes if overflow reached (55 + 5 -> 00)', () => {
      component.minute = 55;
      component.plus5Minutes();
      expect(component.minute).toBe(0);
    });

    it('should also update displayMinute on plus 5 minutes action', () => {
      component.minute = 50;
      component.plus5Minutes();
      expect(component.displayMinute).toBe('55');
    });

    it('should increment hour when minute overflow reached', () => {
      component.hour = 1;
      component.minute = 55;
      component.plus5Minutes();
      expect(component.hour).toBe(2);
    });

    it('should reset hour when hour overflow reached - on plus', () => {
      component.hour = 12;
      component.minute = 55;
      component.plus5Minutes();
      expect(component.hour).toBe(0);
      expect(component.minute).toBe(0);
    });
  });


  describe('Button - Minus', () => {
    it('should subtract 5 minutes on button minus action', () => {
      component.minute = 10;
      component.minus5Minutes();
      expect(component.minute).toBe(5);
    });

    it('should set minutes to 55 if 0 is reached (0 - 5 -> 55)', () => {
      component.minute = 0;
      component.minus5Minutes();
      expect(component.minute).toBe(55);
    });

    it('should decrement hour when minute overflow reached', () => {
      component.hour = 3;
      component.minute = 0;
      component.minus5Minutes();
      expect(component.hour).toBe(2);
    });

    it('should reset hour when hour overflow reached - on minus', () => {
      component.hour = 0;
      component.minute = 0;
      component.minus5Minutes();
      expect(component.hour).toBe(12);
      expect(component.minute).toBe(55);
    });
  });


  describe('Parent communication', () => {
      it('should emit hourEmitter to output selected hour', () => {
        component.hourEmitter.emit = jest.fn() as any;
        component.onSelectHour({target: {value: '3'}});
        expect(component.hourEmitter.emit).toHaveBeenCalledWith(3);
      });

    it('should emit minuteEmitter to output selected minute', () => {
      component.minuteEmitter.emit = jest.fn() as any;
      component.onSelectMinute({target: {value: '15'}});
      expect(component.minuteEmitter.emit).toHaveBeenCalledWith(15);
    });
  });
});
