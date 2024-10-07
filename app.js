const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
  let primeArray = []

function primeNumArr(arr){
    for(let i=0 ; i<arr.length; i++){
        let count = 0
        for(let j=0;j<=arr[i];j++){
            if(arr[i] % j == 0){
                count ++
            }
        }
        if(count <= 2){
            primeArray.push(arr[i])
        }
    }
    console.log(primeArray)
}

 primeNumArr(numbers)

 function maximumArr(primeArray){
    let maximumVal = primeArray[0]

    for(let i=0;i<primeArray.length;i++){
        if(primeArray[i]>= maximumVal){
            maximumVal = primeArray[i]
        }
    }
    console.log(`maximum value = ${maximumVal}`)
 }

 function minimumArr(primeArray){
    let minimumVal = primeArray[0]

    for(let i=0;i<primeArray.length;i++){
        if(primeArray[i]<= minimumVal){
            minimumVal = primeArray[i]
        }
    }
    console.log(`minimum value = ${minimumVal}`)
 }

 function sumArr(primeArray){
    let sumofArr = 0;
    for(let i=0;i<primeArray.length;i++){
        sumofArr += primeArray[i]
    }
    console.log(`sum of primearray = ${sumofArr}`)
 }

 minimumArr(primeArray)
 maximumArr(primeArray)
 sumArr(primeArray)