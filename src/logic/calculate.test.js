import calculate from './calculate';

describe('calculate', () => {
  it('should clear calculator data when AC button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update next value when a number button is pressed', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '2', operation: '+' });
  });
});
