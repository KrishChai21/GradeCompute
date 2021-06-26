function gradeCalculator()
{
    var m = document.querySelector(".IM").value;
    var c = document.querySelector(".CG").value;
    if(m>50 || c>10)
    {
        alert("Error! Please enter valid data");
    }

    else
    {
        document.querySelector("h3").style.display="block";
        document.querySelector("h4").style.display="block";
        document.querySelector("h5").style.display="block";
        var total = (1.5*m) + (2.5*c);
        document.querySelector("h3").innerHTML= "Your total marks are " + total;

        if(total>=89.5)
        {
            document.querySelector("h4").innerHTML= "You got an A+, great job!";
            document.querySelector("h5").innerHTML= "Online exam registration can RIP";
        }

        else if(total>=79.5 && total<89.5)
        {
            document.querySelector("h4").innerHTML= "You got an A, good job!";
            var rem1 =  Math.round((90-2.5*c)*2/3);
            document.querySelector("h5").innerHTML= "You need " + rem1 + " marks in online exam to get an A+";
        }

        else if(total>=69.5 && total<79.5)
        {
            document.querySelector("h4").innerHTML= "You got a B, good job!";
            var rem2 =  Math.round((80-2.5*c)*2/3);
            document.querySelector("h5").innerHTML= "You need " + rem2 + " marks in online exam to get an A";
        }

        else if(total>=59.5 && total<69.5)
        {
            document.querySelector("h4").innerHTML= "You got a C";
            var rem3 =  Math.round((70-2.5*c)*2/3);
            document.querySelector("h5").innerHTML= "You need " + rem3 + " marks in online exam to get a B";
        }

        else if(total>=49.5 && total<59.5)
        {
            document.querySelector("h4").innerHTML= "You got a D";
            var rem4 =  Math.round((60-2.5*c)*2/3);
            document.querySelector("h5").innerHTML= "You need " + rem4 + " marks in online exam to get a C";
        }

        else if(total>=39.5 && total<49.5)
        {
            document.querySelector("h4").innerHTML= "You got an E";
            var rem5 =  Math.round((50-2.5*c)*2/3);
            document.querySelector("h5").innerHTML= "You need " + rem5 + " marks in online exam to get a D";
        }

        else
        {
            document.querySelector("h4").innerHTML= "You got a F, better luck next time";
            var rem6 =  Math.round((40-2.5*c)*2/3);
            document.querySelector("h5").innerHTML= "You need " + rem6 + " marks in online exam to pass";
        }

    }
}

function reset()
{
    document.querySelector("h3").style.display="none";
    document.querySelector("h4").style.display="none";
    document.querySelector("h5").style.display="none";
    document.querySelector(".IM").value="none";
    document.querySelector(".CG").value="none";
}  
