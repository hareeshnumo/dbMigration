const greet=(name, env)=>{
    console.log(`hi ${name} from ${environment}`);
}


var arguments = process.argv
const environment=arguments[2];
const nameData=arguments[3];
greet(nameData, environment)