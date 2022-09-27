import inquirer from 'inquirer';
import { simpleGit } from 'simple-git';

export const grabProject = async () => {
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
  grabProject();
}
