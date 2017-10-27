export default {
  parseDateToSpanish (mlDate) {
    var date = new Date(mlDate).toString()
    var arrayDate = date.split(' ')
    return arrayDate[0]
      .replace('Mon', 'Lunes')
      .replace('Tue', 'Martes')
      .replace('Wed', 'Miércoles')
      .replace('Thu', 'Jueves')
      .replace('Fri', 'Viernes') + ' ' +
      arrayDate[2] + ' ' +
      arrayDate[1]
      .replace('Jan', 'Enero')
      .replace('Feb', 'Febrero')
      .replace('Mar', 'Marzo')
      .replace('Apr', 'Abril')
      .replace('May', 'Mayo')
      .replace('Jun', 'Junio')
      .replace('Jul', 'Julio')
      .replace('Aug', 'Agosto')
      .replace('Sep', 'Septiembre')
      .replace('Oct', 'Octubre')
      .replace('Nov', 'Noviembre')
      .replace('Dec', 'Diciembre') + ' ' +
      arrayDate[3] + ' ' +
      arrayDate[4]
  }
}
