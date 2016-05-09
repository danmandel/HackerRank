process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var pos = 0;
    var neg = 0;
    var zer = 0;
    
    for (i=0;i<n;i++){
        if (arr[i]>0){
            pos +=1;
        };
        
        if(arr[i]<0){
            neg += 1;
        };
        
        if (arr[i]===0){
            zer += 1;
        };
         
    };
    console.log(pos/(pos+neg+zer));
    console.log(neg/(pos+neg+zer));
    console.log(zer/(pos+neg+zer));

}