        var myIndex = 2;
        carousel();
        
        function carousel()
        {
          var i;
          var x = document.getElementsByClassName("imageslides");
          for (i = 0; i < x.length; i++)
          {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 2000); 
        }