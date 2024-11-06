const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles 00 - 8:00', () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });

  it('Handles 20 - 8:20', () => {
    const timeInWords = convertTimeToWords('8:20');
    expect(timeInWords).toBe("twenty past eight");
  });

  it('Handles after 30 minutes - 8:55', () => {
    const timeInWords = convertTimeToWords('8:55');
    expect(timeInWords).toBe("five to nine");
  });


  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
});
