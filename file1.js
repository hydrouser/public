// This is file 1. It does a lot of things, including reporting that it is 
// indeed file 1 and that it does a lot of things. Not many files can do as 
// many things as file 1. Pundits will try to downplay these things as 
// insignificant, but they are just jealous of the sheer capacity of file 1's 
// performance in a wide variety of things that it can do.
//
// Here is some code to prove it:
////////////////////////////////////////////////

function doImportantThings(todo) {
    if ( todo.getStatus("NEED TO BE DONE") == true ) {
        var things = todo.getThings("NEED TO BE DONE");
        things.do( { quickly: "please" } );
    } else {
        patMyselfOnTheBack();
        brag();
    }
}

function doMoreThings(bigList) {
    for thing in bigList:
        doImportantThings(thing)
}       
