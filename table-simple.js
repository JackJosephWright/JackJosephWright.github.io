function multiples(){
    var t = document.getElementById("ntarget");
    t.innerHTML = getmultiples(document.getElementById('num').value);
    };
function getmultiples(n){
    var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(function(x){return x* n});
    a.innerHTML =genTable(a);

}
function genTable(values){
    var data = values;
    console.log(data);
    var myTable = "<table><tr>";

    // loop through array and generate row-cells
    var perrow = 5; // 5 CELLS PER ROW
    data.forEach((value, i)=>{
        //normal cell
        myTable+=`<td>${value}</td>`;
        // BREAK INTO NEXT ROW
        var next = i + 1;
        if (next%perrow==0 && next!=data.length) { myTable += "</tr><tr>"; }
      });
    // (C3) CLOSE THE TABLE STRING
    myTable += "</tr></table>";

    // (D) ATTACH HTML TO CONTAINER
    document.getElementById("container").innerHTML = myTable;
    
    


}

