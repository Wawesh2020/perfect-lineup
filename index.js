
function validateLineup(lineup) {
  // returns false when the lineup includes too many players from a single team

  const getPlayers = lineup
    .map(lineup => lineup.teamId)
    .sort((a, b) => a - b)
  let count = 0

  for (let i = 0; i < getPlayers.length; i++) {
    if (count >= 2) return false
    if (getPlayers[i] === getPlayers[i + 1]) count++
  }

  const morePlayers = lineup
    .map(lineup => lineup.gameId)
    .sort((a, b) => a - b)

  count = 0
  for (let i = 0; i < morePlayers.length; i++) {
    if (count >= 3) return false

    if (morePlayers[i] === morePlayers[i + 1]) count++
  }


  const fewPlayers = lineup
    .map(lineup => lineup.position)
    .sort()

  // console.log(fewPlayers)
  count = 0

  for (let i = 0; i < fewPlayers.length; i++) {
    if (fewPlayers[i] === fewPlayers[i + 1]) count++
  }
  if (count < 2 || count > 2) return false

  // 'P', 'C', '1B', '2B', '3B', 'SS'

  const getSalary = lineup.map(lineup => lineup.salary)
  const totalSalary = getSalary.reduce((acc, salary) => acc + salary, 0)

  if (totalSalary > 45000) return false

  return true
}


module.exports = validateLineup
