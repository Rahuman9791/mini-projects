


function printPattern()
{
 
    r = parseInt(prompt("Enter the Upper Triangle: "));
    c = parseInt(prompt("Enter the Lower Triangle"));

    let m=1;
    //Upper Triangle
    for(let i=1; i<=r; i++) {
        for(let j=i; j<=r-1; j++) { 
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        for(let k=1; k<=m; k++)  {
            if(k == r) {
                let temp = 0;
                document.write(temp+"&nbsp");
            }
            else {
                document.write(k+"&nbsp");
            }
        }
        for(let rev=m; rev>1; rev--) {
            document.write(rev-1+"&nbsp");
        }
        document.write("<br>");
        m++;
    }
    //Lower Triangle
    for(let i=1; i<=r; i++) {
        for(let j=1; j<=i; j++) {
        document.write("&nbsp;&nbsp;&nbsp;");
        }
        for(let k=1; k<c; k++) {
            document.write(k+"&nbsp");
        }
        for(let rev=c-2; rev>=1; rev--){
            document.write(rev+"&nbsp");
        }
        document.write("<br>");
        c--; 
}
}