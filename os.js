import { EOL, cpus, homedir, userInfo } from 'os';

export function os(arg){
  if (!arg){
    console.log('Invalid input\n');
    return;
  }

  if (arg === 'EOL') console.log(JSON.stringify(EOL));
  if (arg === 'cpus') console.log(cpus().length);
  if (arg === 'homedir') console.log(homedir());
  if (arg === 'username') console.log(userInfo().username);
  if (arg === 'architecture') console.log(process.env['PROCESSOR_ARCHITECTURE']);

}