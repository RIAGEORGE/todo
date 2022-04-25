function getdata(){
var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState==4 && this.status==200){
                    display(this.responseText)
                    var response= JSON.parse(this.responseText);
                }
            };
            xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
            xhttp.send();
        }
        function display(data){
            var list = JSON.parse(data);
            let table = document.getElementById("todotable");
        
            for(var i=0;i<list.length;i++){
                let rowcount = table.rows.length;
                var row = table.insertRow(rowcount);
                var cell1 = row.insertCell(0);
                var element= document.createElement("input");
                element.type="checkbox";
        
                var cell2 = row.insertCell(1);
                cell2.innerHTML=list[i].title;
        
                
        
                if(list[i].completed==true){
                    element.setAttribute("checked","true");
                    element.setAttribute("disabled","true");
                }
                element.addEventListener('change',(event)=>{
                    if(event.currentTarget.checked){
                        count++;
                        checkCounter();
                    }
                    else{
                        count--;
                    }
                })
                cell1.appendChild(element);
        
        
            }
        
        }
        
        var count =0;       
                      
        function checkCounter(){

            let promise = new Promise(function(resolve,reject){
                if(count==5){
                    resolve("Congrats");
                }
        
            })
            promise.then(function(s){
                alert(s);
            })
        
        }      

                    
                    
                    document.getElementById("div1").innerHTML=output;

        