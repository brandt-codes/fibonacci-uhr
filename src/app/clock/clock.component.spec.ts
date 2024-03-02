import { ClockComponent } from './clock.component';

describe('ClockComponent', () => {
  let component: ClockComponent;
  beforeEach(() => {
    component = new ClockComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Hours Mapping', () => {
    it('should set "hours" for element of first 1 when 1 is given', () => {
      component.setHour(1);
      expect(component.activeHourMap.get('1.1')).toBe(true);
    });

    it('should set "hours" for element of 2 when 2 is given', () => {
      component.setHour(2);
      expect(component.activeHourMap.get('2')).toBe(true);
    });

    it('should set "hours" for element of 3 when 3 is given', () => {
      component.setHour(3);
      expect(component.activeHourMap.get('3')).toBe(true);
    });

    it('should set "hours" for element of 5 when 5 is given', () => {
      component.setHour(4);
      expect(component.activeHourMap.get('3')).toBe(true);
      expect(component.activeHourMap.get('1.1')).toBe(true);
    });

    it('should set "hours" for element of 5 when 5 is given', () => {
      component.setHour(5);
      expect(component.activeHourMap.get('5')).toBe(true);
    });

    it('should set "hours" for element of 5 and 1 when 6 is given', () => {
      component.setHour(6);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('1.1')).toBe(true);
    });

    it('should set "hours" for element of 5 and 2 when 7 is given', () => {
      component.setHour(7);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('2')).toBe(true);
    });

    it('should set "hours" for element of 5 and 3 when 8 is given', () => {
      component.setHour(8);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('3')).toBe(true);
    });

    it('should set "hours" for element of 5, 3 and 1 when 9 is given', () => {
      component.setHour(9);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('3')).toBe(true);
      expect(component.activeHourMap.get('1.1')).toBe(true);
    });

    it('should set "hours" for element of 5, 3 and 2 when 10 is given', () => {
      component.setHour(10);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('3')).toBe(true);
      expect(component.activeHourMap.get('2')).toBe(true);
    });

    it('should set "hours" for element of 5, 3, 2 and first 1 when 11 is given', () => {
      component.setHour(11);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('3')).toBe(true);
      expect(component.activeHourMap.get('2')).toBe(true);
      expect(component.activeHourMap.get('1.1')).toBe(true);
    });

    it('should set "hours" for all elements when 12 is given', () => {
      component.setHour(12);
      expect(component.activeHourMap.get('5')).toBe(true);
      expect(component.activeHourMap.get('3')).toBe(true);
      expect(component.activeHourMap.get('2')).toBe(true);
      expect(component.activeHourMap.get('1.1')).toBe(true);
      expect(component.activeHourMap.get('1.2')).toBe(true);
    });

    it('should not set any "hour" when 0 is given', () => {
      component.setHour(0);
      expect(component.activeHourMap.get('1.1')).toBe(undefined);
      expect(component.activeHourMap.get('1.2')).toBe(undefined);
      expect(component.activeHourMap.get('2')).toBe(undefined);
      expect(component.activeHourMap.get('3')).toBe(undefined);
      expect(component.activeHourMap.get('5')).toBe(undefined);
    });
  });


  describe('Minutes Mapping', () => {
    it('should set "minutes" of first "1" when 5 Minutes is given', () => {
      component.setMinute(5);
      expect(component.activeMinuteMap.get('1.1')).toBe(true);
    });

    it('should set "minutes" for 2 when 10 Minutes is given', () => {
      component.setMinute(10);
      expect(component.activeMinuteMap.get('2')).toBe(true);
    });

    it('should set "minutes" for 3 when 15 Minutes is given', () => {
      component.setMinute(15);
      expect(component.activeMinuteMap.get('3')).toBe(true);
    });

    it('should set "minutes" for 3 and 1 when 20 Minutes is given', () => {
      component.setMinute(20);
      expect(component.activeMinuteMap.get('3')).toBe(true);
      expect(component.activeMinuteMap.get('1.1')).toBe(true);
    });

    it('should set "minutes" for 5 when 25 Minutes is given', () => {
      component.setMinute(25);
      expect(component.activeMinuteMap.get('5')).toBe(true);
    });

    it('should set "minutes" for 5 and 1 when 30 Minutes is given', () => {
      component.setMinute(30);
      expect(component.activeMinuteMap.get('5')).toBe(true);
      expect(component.activeMinuteMap.get('1.1')).toBe(true);
    });

    it('should set "minutes" for 5 and 2 when 35 Minutes is given', () => {
      component.setMinute(35);
      expect(component.activeMinuteMap.get('5')).toBe(true);
      expect(component.activeMinuteMap.get('2')).toBe(true);
    });

    it('should set "minutes" for 5 and 3 when 40 Minutes is given', () => {
      component.setMinute(40);
      expect(component.activeMinuteMap.get('5')).toBe(true);
      expect(component.activeMinuteMap.get('3')).toBe(true);
    });

    it('should set "minutes" for 5, 3 and 1 when 45 Minutes is given', () => {
      component.setMinute(45);
      expect(component.activeMinuteMap.get('5')).toBe(true);
      expect(component.activeMinuteMap.get('3')).toBe(true);
      expect(component.activeMinuteMap.get('1.1')).toBe(true);
    });

    it('should set "minutes" for 5, 3 and 2 when 50 Minutes is given', () => {
      component.setMinute(50);
      expect(component.activeMinuteMap.get('5')).toBe(true);
      expect(component.activeMinuteMap.get('3')).toBe(true);
      expect(component.activeMinuteMap.get('2')).toBe(true);
    });

    it('should set "minutes" for 5, 3 and 2 when 55 Minutes is given', () => {
      component.setMinute(55);
      expect(component.activeMinuteMap.get('5')).toBe(true);
      expect(component.activeMinuteMap.get('3')).toBe(true);
      expect(component.activeMinuteMap.get('2')).toBe(true);
      expect(component.activeMinuteMap.get('1.1')).toBe(true);
    });

    it('should ignore invalid number: 11', () => {
      component.setMinute(11);
      expect(component.activeMinuteMap.get('1.1')).toBe(undefined);
      expect(component.activeMinuteMap.get('1.2')).toBe(undefined);
      expect(component.activeMinuteMap.get('2')).toBe(undefined);
      expect(component.activeMinuteMap.get('3')).toBe(undefined);
      expect(component.activeMinuteMap.get('5')).toBe(undefined);
    });

    it('should not set any field when 0 is given', () => {
      component.setMinute(0);
      expect(component.activeMinuteMap.get('1.1')).toBe(undefined);
      expect(component.activeMinuteMap.get('1.2')).toBe(undefined);
      expect(component.activeMinuteMap.get('2')).toBe(undefined);
      expect(component.activeMinuteMap.get('3')).toBe(undefined);
      expect(component.activeMinuteMap.get('5')).toBe(undefined);
    });

    it('should not set all active if 60 minutes given', () => {
      component.setMinute(60);
      expect(component.activeMinuteMap.get('1.1')).toBe(true);
      expect(component.activeMinuteMap.get('1.2')).toBe(true);
      expect(component.activeMinuteMap.get('2')).toBe(true);
      expect(component.activeMinuteMap.get('3')).toBe(true);
      expect(component.activeMinuteMap.get('5')).toBe(true);
    });

    it('should not set any field when 65 is given', () => {
      component.setMinute(65);
      expect(component.activeMinuteMap.get('1.1')).toBe(undefined);
      expect(component.activeMinuteMap.get('1.2')).toBe(undefined);
      expect(component.activeMinuteMap.get('2')).toBe(undefined);
      expect(component.activeMinuteMap.get('3')).toBe(undefined);
      expect(component.activeMinuteMap.get('5')).toBe(undefined);
    });
  });
});
