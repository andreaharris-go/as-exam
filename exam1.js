const scopes = [1,2,3,4,5]
const input = 7
const result = scopes
  .map(scope => {
    const compareSum = scope >= input ? scope - input : input - scope

    if (scopes.includes(compareSum)) {
      return `${scope}+${compareSum}`
    }
  })
  .filter(v => v !== undefined)

console.log(result)