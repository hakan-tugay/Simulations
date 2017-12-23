var program = require('commander');
var rndm = require('random-number');
var _ = require('lodash');


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
    const result = integrator(0,1000,sourceFunction4)
    console.log('Integral', result)
}

function integrator(x1, x2, sourceFunction){
    const y1 = sourceFunction(x1)
    const y2 = sourceFunction(x2)

    console.log('Y values:', y1, y2)
    const totalRectangleArea = Math.max(y1, y2) * Math.abs(x1 - x2) 
    const xGenerator = rndm.generator({
      min: x1,
      max:  x2,
      integer: false
    })

    const yGenerator = rndm.generator({
      min: 0,
      max:  Math.max(y1, y2),
      integer: false
    })

    let hits = 0

    const sampleSize = 10000000
    _.times(sampleSize, n=>{
      const randomX = xGenerator()
      const randomY = yGenerator()
      //console.log(randomX, randomY)

      const yOfRandomX = sourceFunction(randomX)

      if(randomY < yOfRandomX){
        hits++
        //console.log(randomX, randomY, yOfRandomX, 'Hit')
      }  
    })
    
    let hitRatio = hits / sampleSize;
    console.log('Hits', hitRatio, totalRectangleArea)
    let integralArea = totalRectangleArea * hitRatio
    return integralArea
}

function sourceFunction1(x){
    return 2*x+6;
}

function sourceFunction2(x){
    return 2*x*x+6*x+8;
}

function sourceFunction3(x){
  return Math.pow(2, x)
}

function sourceFunction4(x){
  return Math.pow(1/2, x)
}

