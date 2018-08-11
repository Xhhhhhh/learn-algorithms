function bubbleSort(arr){
    if( !arr || arr.length < 2){
        return 
    }
    for(let e = arr.length - 1; e > 0; e--){
        for(let i = 0; i < e; i++){
            if(arr[i] > arr[i+1]){
                swap(arr,i,i+1)
            }
        }
    }
}

function swap(arr,i,j){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

//for test
function comparator(arr){
    arr.sort((a,b) => a - b)
}

//for test 
function generateRandomArray(maxSize,maxValue){
    let arr = new Array(parseInt((maxSize + 1) * Math.random()))
    for(let i = 0; i < arr.length ; i++){
        arr[i] = parseInt(( maxValue + 1) * Math.random()) - parseInt((maxValue * Math.random()))
    }
    return arr
}

//for test 
function copyArr(arr){
    if(!arr){
        return 
    }
    let res = []
    for(let i =0;i<arr.length;i++){
        res[i] = arr[i]
    }
    return res
}

//for test 
function isEqual(arr1,arr2){
    if(!!arr1 && !arr2 || !arr1 && !!arr2){
        return false
    }
    if(!arr1 && !arr2){
        return true
    }
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}

//for test 
function printArray(arr){
    if(!arr){
        return 
    }
    console.log('==========printf=============')
    console.log(JSON.stringify(arr))
}

//for test 
function main(){
    const testTime = 5000
    const maxSize = 100
    const maxValue = 100
    let succeed = true
    for(let i=0;i<testTime;i++){
        let arr1 = generateRandomArray(maxSize,maxValue)
        let arr2 = copyArr(arr1)
        bubbleSort(arr1)
        comparator(arr2)
        if(!isEqual(arr1,arr2)){
            succeed = false
            break;
        }
    }
    let printf = succeed?'success':'failed'
    console.log(printf)
    let arr = generateRandomArray(maxSize,maxValue)
    printArray(arr)
    bubbleSort(arr)
    printArray(arr)
}

main()





