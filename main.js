const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 5;
    } else if (day === 'Wednesday') {
      return 7;
    } else if (day === 'Thursday') {
      return 8;
    } else if (day === 'Friday') {
      return 3;
    } else if (day === 'Saturday') {
      return 6;
    } else if (day === 'Sunday') {
      return 5;
    }
  };
  
  const getActualSleepHours = () => 
  getSleepHours('Monday') + 
  getSleepHours('Tuesday') + 
  getSleepHours('Wednesday') + 
  getSleepHours('Thursday') + 
  getSleepHours('Friday') + 
  getSleepHours('Saturday') + 
  getSleepHours('Sunday')
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You have got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      consple.log('You have got ' + (idealSleepHours - actualSleepHours) + ' hours more sleep than needed');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than needed. You should get some rest');
    }
  }
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  