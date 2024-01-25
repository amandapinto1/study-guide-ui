export const getWeekDaysFromSchedule = (schedule, disciplina) => {
  let days = 0;
  let totalHours = 0;
  const daysOfWeek = [];

  for (const day in schedule) {
    if (day === "weekDays" || day === "hoursPerDay") continue;
    if (Array.isArray(schedule[day])) {
      const totalLessons = schedule[day].filter(
        (lesson) => lesson.subject === disciplina
      );
      if (totalLessons.length > 0) {
        days++;
        daysOfWeek.push(day);

        // Calcula a quantidade total de horas para esse dia e disciplina
        totalHours += totalLessons.reduce((acc, lesson) => {
          const initialTimeParts = lesson.initialTime.split(/[:]/);
          const finalTimeParts = lesson.finalTime.split(/[:]/);

          const initialDate = new Date(
            1970,
            0,
            1,
            parseInt(initialTimeParts[0]),
            parseInt(initialTimeParts[1])
          );
          const finalDate = new Date(
            1970,
            0,
            1,
            parseInt(finalTimeParts[0]),
            parseInt(finalTimeParts[1])
          );

          return acc + (finalDate - initialDate) / (1000 * 60 * 60);
        }, 0);
      }
    }
  }

  return {
    hoursPerDay: schedule?.hoursPerDay,
    totalHours: formatHoursAndMinutes(totalHours),
    days,
    daysOfWeek,
    totalDaysOfWeek: schedule?.weekDays,
  };
};

function formatHoursAndMinutes(decimalHours) {
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60); // Arredondamento corrigido

  if (minutes === 60) {
    return `${hours + 1}h00min`;
  }

  return `${hours}h${minutes}min`;
}

export const totalHoursPerWeek = (schedule) => {
  let totalHours = 0;

  for (const day in schedule) {
    if (Array.isArray(schedule[day])) {
      if (day === "weekDays" || day === "hoursPerDay") continue;
      totalHours += schedule[day].reduce((acc, lesson) => {
        // Corrige a criação de instâncias de Date com horas e minutos
        const initialTimeParts = lesson.initialTime.split(/[:]/);
        const finalTimeParts = lesson.finalTime.split(/[:]/);

        const initialDate = new Date(
          1970,
          0,
          1,
          parseInt(initialTimeParts[0]),
          parseInt(initialTimeParts[1])
        );
        const finalDate = new Date(
          1970,
          0,
          1,
          parseInt(finalTimeParts[0]),
          parseInt(finalTimeParts[1])
        );

        return acc + (finalDate - initialDate) / (1000 * 60 * 60);
      }, 0);
    }
  }

  var total = formatHoursAndMinutes(totalHours);
  return {
    totalHoursPerWeek: total,
    hoursPerDay: schedule.hoursPerDay,
  };
};
