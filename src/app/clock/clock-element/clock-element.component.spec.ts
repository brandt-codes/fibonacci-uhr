import { ClockElementComponent } from './clock-element.component';

describe('ClockElementComponent', () => {
  let component: ClockElementComponent;

  it('should create', () => {
    component = new ClockElementComponent();
    expect(component).toBeTruthy();
  });

  it('should set default config values', () => {
    component = new ClockElementComponent();
    expect(component.isHourSet).toBe(false);
    expect(component.isMinuteSet).toBe(false);
    expect(component.colorHour).toBe('#ff0000');
    expect(component.colorMinute).toBe('#0000ff');
    expect(component.colorCombined).toBe('#00ff00');
    expect(component.calculatedColor).toBe('#ffffff');
  });

  it('should be possible to set config values', () => {
    component = new ClockElementComponent();
    component.isHourSet = true;
    component.isMinuteSet = true;
    component.colorHour = '#123321';
    component.colorMinute = '#abccba';
    component.colorCombined = '#999999';
  });

  it('should set "calculatedColor" to "colorHour" if only hour is set', () => {
    component = new ClockElementComponent();

    component.isHourSet = true;
    component.isMinuteSet = false;
    component.ngOnChanges({} as any);

    expect(component.calculatedColor).toBe(component.colorHour);
  });

  it('should set "calculatedColor" to "colorMinute" if only minute is set', () => {
    component = new ClockElementComponent();

    component.isHourSet = false;
    component.isMinuteSet = true;
    component.ngOnChanges({} as any);

    expect(component.calculatedColor).toBe(component.colorMinute);
  });

  it('should set "calculatedColor" to "colorCombined" if hour and minute is set', () => {
    component = new ClockElementComponent();

    component.isHourSet = true;
    component.isMinuteSet = true;
    component.ngOnChanges({} as any);

    expect(component.calculatedColor).toBe(component.colorCombined);
  });
});
