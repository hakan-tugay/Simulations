var program = require('commander');
program
  .version('1.0.0')
  .description('Simulations');

program
  .command('Test')
  .alias('t')
  .description('Testing')
  .action(() =>{

    console.log(111)
  })

program
  .command('Integral')
  .alias('I')
  .action(() =>{
    integralSimulation()
    
  })

program.parse(process.argv);

function integralSimulation(){
    console.log(111)
}

function integrator(x1, x2, sourceFunction){

}

function sourceFunction1(x){
    return 2*x+6;
}

function sourceFunction2(x){
    return 2*x*x+6*x-8;
}

