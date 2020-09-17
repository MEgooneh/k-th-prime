
function prime_function(){
var prime_count = 0 ;
var check ; 
var input = document.getElementById("Input").value ; 
for(let i = 2 ; i <= 10e6 ; i++){
    check = 0 ; 
    for(let j = 2 ; j**2 <= i ; j++ ){
        if(i%j == 0){
            check = 1 ;         
            break ; 
        }
    }
    if(check !== 1){
        prime_count++ ; 
    }
    if(prime_count == input){
        var output = input+"اُمین عدد اول :" + i ; 
        document.getElementById("Output").innerHTML = output ;  
        break ; 
    }
}
}


































/*var prime_count = 0 ;
var check ;  
for(let i = 1 ; i <= 10e4 ; i++){
    check = 0 ; 
    for(let j = 2 ; j**2 <= i ; j++ ){
        if(i%j == 0){
            check = 1 ;         
            break ; 
        }
    }
    if(check !== 1){
        prime_count++ ; 
    }
    if(prime_count == 100 && check!== 1){
        console.log("100omin adad aval: " , i) ; 
        break ; 
    }
}*/