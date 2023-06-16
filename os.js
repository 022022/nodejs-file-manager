import { EOL, cpus, homedir, userInfo } from 'os';

export function os(arg){
  if (!arg){
    console.log('Invalid input\n');
    return;
  }

  if (arg === 'EOL') console.log(JSON.stringify(EOL));
  if (arg === 'homedir') console.log(homedir());
  if (arg === 'username') console.log(userInfo().username);
  if (arg === 'architecture') console.log(process.env['PROCESSOR_ARCHITECTURE']);

  if (arg === 'cpus') cpusParams();

  console.log('You are currently in ' + process.cwd());

}

function cpusParams(){ // overall amount of CPUS plus model and clock rate (in GHz - speed/1000) for each of them
  const cpusArr =  cpus();
  console.log(`overall amount of CPUS: ${cpusArr.length}`);

  cpusArr.forEach(item =>
    console.log(`model: ${item.model} clock rate: ${item.speed/1000} GHz`)
  )

}
