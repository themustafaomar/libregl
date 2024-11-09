import chalk from 'chalk'

export function log(arg, newLine = true) {
  if (arg.trim().startsWith('⏳')) {
    console.log(chalk.blackBright(`${arg}${newLine ? '\n' : ''}`))
  }
  if (arg.trim().startsWith('->')) {
    console.log(chalk.cyan(`${arg}${newLine ? '\n' : ''}`))
  }
}
