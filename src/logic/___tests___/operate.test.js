import operate from '../operate';

describe('Tests for operate.js', () => {
  it('test sum 4 + 5', () => {
    const result = operate('4', '5', '+');
    expect(result).toBe('9');
  });
  it('test sum 4 - 5', () => {
    const result = operate('4', '5', '-');
    expect(result).toBe('-1');
  });
  it('test sum 4 * 5', () => {
    const result = operate('4', '5', 'x');
    expect(result).toBe('20');
  });
  it('test sum 20 / 5', () => {
    const result = operate('20', '5', '÷');
    expect(result).toBe('4');
  });
  it('test sum 20 % 5', () => {
    const result = operate('20', '5', '%');
    expect(result).toBe('0');
  });
});
