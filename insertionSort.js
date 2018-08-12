function insertionSort(arr){
    if(!arr || arr.length < 2){
        return
    }

    for(let i=1;i<arr.length;i++){
        for(let j = i - 1;j >= 0 && arr[j] > arr[j+1]; j--){
            swap(arr,j,j+1)
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
    arr.sort((a,b)=>a-b)
}

//for test 
function generateRandomArray(maxSize,maxValue){
    let arr = new Array(parseInt((maxSize + 1) * Math.random()))
    for(let i = 0; i< arr.length; i++){
        arr[i] = parseInt(( maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random())
    }
    return arr
}

//for test 
function copyArray(arr){
    if(!arr){
        return 
    }
    return [...arr]
}

//for test 
function isEqual(arr1,arr2){
    if(!!arr1 && !arr2 || !arr2 && !!arr2){
        return false
    }
    if(!arr1 && !arr2){
        return true
    }
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}

//for test 
function printfArray(arr){
    if(!arr){
        return
    }
    console.log(JSON.stringify(arr))
}

function main(){
    const testTime = 500000
    const maxSize = 100
    const maxValue = 100
    let succeed = true
    for(let i = 0; i < testTime; i++){
        let arr1 = generateRandomArray(maxSize,maxValue)
        let arr2 = copyArray(arr1)
        insertionSort(arr1)
        comparator(arr2)
        if(!isEqual(arr1,arr2)){
            succeed = false
            break
        }
    }
    let prinft = succeed?'success':'failed'
    console.log(prinft)
    let arr = generateRandomArray(maxSize,maxValue)
    printfArray(arr)
    insertionSort(arr)
    printfArray(arr)    
}

main()


