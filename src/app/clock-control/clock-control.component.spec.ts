import { ClockControlComponent } from './clock-control.component';

describe('ClockControlComponent', () => {
  let component: ClockControlComponent;
  beforeEach(() => {
    component = new ClockControlComponent();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
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

  // TODO AVB: call a Service - write current values to store!

});
