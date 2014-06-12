function loaded(){
  alert("Javascript loaded!");
}
//**********************************
// This function changes the class value of table cells in accordance with the pattern of a 7 segment display. Refer hints 
function illuminate(num)
    {
        num = Number(num); //turns the input into a number
      if (num.length >3){
        alert("Please enter 3 digits.");
      }
      //return a pattern based on the number
        var pattern = ["yyyyyyx", "xyyxxxx", "yyxyyxy", "yyyyxxy", "xyyxxyy", "yxyyxyy", "yxyyyyy", "yyyxxxx", "yyyyyyy", "yyyyxyy","xxxxxxx"];
        return pattern[num];
        }
        
        
 //************************************   


// This function extracts digits from an input text and illuminates based on the digits based
function getDigits()
    {
  
        var text=document.getElementById('input1').value;
      if (text.length >3){
        alert("Please enter 3 digits or less.");
      }
      else{
        res=[];
        for (var i =0; i<text.length; i++){
            var ch = text[i];
            
            if (ch >='0' && ch<='9'){    //if its a number...
                illuminate[ch]; 
//run the illuminate function which returns a pattern
                res.push(illuminate(ch)); //put the returned value into an array
            }
            
        }
        return res;  //return the array
    }
    }
//********************************
function resetIllum(){
  //gets the pattern
  var reset = illuminate(10);
  var num = [0,1,2];
  for(var each in num){
    console.log(num[each]);
    for(var i in reset){
      console.log(reset[i]);
      document.getElementById('seg'+num[each]+'_'+i).className = reset[i];
    }
    
    
  }
  
}
//*********************************
//function: takes the array of patterns and changes the class on the table for each of the cells
function illumAction(){
  resetIllum();
  var lit = getDigits();
  console.log("The array:"+lit);
  for (var each in lit){
       for (var i in lit[each]){                  document.getElementById('seg'+each+'_'+i).className = lit[each][i];
       }
       }
  
  
//console.log(each);
  
  

}



illumAction();
