import operate from './operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  it('should perform division correctly', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it('should handle division by 0', () => {
    expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo operation correctly', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('should handle modulo operation when dividing by 0', () => {
    expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unrecognized operation', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
  });
});
