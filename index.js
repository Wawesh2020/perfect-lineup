function validateLineup(lineup)
{
  const getPlayers = lineup
    .filter(lineup => lineup === 12)
    .map(lineup => lineup.teamId)





  const getSalary = lineup.map(lineup => lineup.salary)
  const totalSalary = getSalary.reduce((acc, salary) => acc + salary, 0)

  if (totalSalary > 45000) return false

  return true
}




module.exports = validateLineup
