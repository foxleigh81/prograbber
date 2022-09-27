import inquirer from 'inquirer';

export const prompt = async () => {
  const { project } = await inquirer.prompt([
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of the project?'
    }
  ]);

  return project;
};

if (require.main === module) {
  prompt();
}
