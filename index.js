#! /usr/bin/env node

import process from 'node:process';
import * as url from 'node:url';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const prompt = (val) => console.log(val);
const grabber = (val) => console.log(val.url);

export const start = async () => {
  return yargs(hideBin(process.argv))
    .scriptName('prograbber')
    .usage('$0 [cmd] [args]')
    .help('h')
    .command(
      '$0',
      'Open the questionaaire',
      () => {},
      (argv) => prompt(argv)
    )
    .command({
      command: 'checkout <url>',
      desc: 'Checkout a repo',
      aliases: ['-c'],
      builder: () => {
        return yargs().positional('url', {
          type: 'string',
          describe: 'The url of the repo to checkout'
        });
      },
      handler: async (argv) => grabber({ argv })
    }).argv;
};

if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  start();
}

export default start;
