function convertMilesToKm(miles) {
  try {
    if (typeof miles === 'number' && miles >= 0) {
      return miles * 1.60934;
    } else {
      throw new Error('Внеси валидна бројка за милји (не смее да е негативна или текст).');
    }
  } catch (error) {
    return ' Грешка: ' + error.message;
  }
}

function convertCelsiusToFahrenheit(celsius) {
  try {
    if (typeof celsius === 'number') {
      return (celsius * 9 / 5) + 32;
    } else {
      throw new Error('Внеси валиден број за Целзиус.');
    }
  } catch (error) {
    return ' Грешка: ' + error.message;
  }
}

function convertPoundsToKilogram(pounds) {
  try {
    if (typeof pounds === 'number' && pounds >= 0) {
      return pounds * 0.453592;
    } else {
      throw new Error('Внеси валиден број за фунти (не смее да е негативен или текст).');
    }
  } catch (error) {
    return ' Грешка: ' + error.message;
  }
}

function convertFeetToMetres(feet) {
  try {
    if (typeof feet === 'number' && feet >= 0) {
      return feet * 0.3048;
    } else {
      throw new Error('Внеси валиден број за стапки (не смее да е негативен или текст).');
    }
  } catch (error) {
    return ' Грешка: ' + error.message;
  }
}

module.exports = {
  convertMilesToKm,
  convertCelsiusToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMetres
};
