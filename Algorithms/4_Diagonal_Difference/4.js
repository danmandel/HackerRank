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
    var a = [];
    
    var lr = 0;
    var rl = n;
    
    var lr_diagonal = 0;
    var rl_diagonal = 0;
    
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    for(i=0;i<n;i++){
        lr_diagonal += a[i][i]; 
        rl_diagonal += a[i][n-i-1];
    };
    
    if(lr_diagonal>rl_diagonal){
        absolute_difference = lr_diagonal-rl_diagonal
    }else{
        absolute_difference = rl_diagonal-lr_diagonal};
    
    //absolute_difference = Math.abs(lr_diagonal-rl_diagonal)
    
    console.log(absolute_difference);
}
