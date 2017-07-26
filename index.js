function duplicate(numArray){
 
    for(var i=0; i<numArray.length; i++){
        //document.write(numArray[i]);
      
      for(var j=1; j<=numArray.length; j++){
             if(numArray[i] == numArray[j+i]){
               //document.write(numArray[i]);
               return true;
            }
        //document.write(numArray[j]);
      }      
    }return false;
}document.write(duplicate([3,7,3,4,1]));