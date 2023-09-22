//receives a function and calls it
function receivesAFunction(mafia){
   mafia();
}
function mafia() {
    return 'spy'
}
//returns a function with no arguments
function returnsANamedFunction(){
    const morning = function breakfast(){
        return 'tea and bread'
    }
    return morning
}
//returns an anonymous functions with no arguments
function returnsAnAnonymousFunction(){
    return(function (){
        return 'rice and beans'
    })
}
