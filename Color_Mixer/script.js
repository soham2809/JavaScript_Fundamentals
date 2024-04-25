var color1=prompt ("Enter the first color");
var color2=prompt ("Enter the second color");
        if (color1=="red"&&color2=="blue"||color1=="blue"&&color2=="red")
        {
            document.write("Pink");
        }
        else if (color1=="red"&&color2=="yellow"||color1=="yellow"&&color2=="red")
        {
            document.write("Orange");
        }
        else if (color1=="blue"&&color2=="yellow"||color1=="yellow"&&color2=="blue")
        {
            document.write("Green");
        }
        else
        {
            document.write("Invalid");
        }