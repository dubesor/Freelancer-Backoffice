
// Script zum Merken der Menüauswahl			
document.addEventListener("DOMContentLoaded", function() {
    var currentPath = window.location.pathname;

    var menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(function(item) {
        var itemPath = new URL(item.href).pathname; // Extraktet den URL namen vom Linkattribut
        if (itemPath === currentPath) {
            item.classList.add("active");
        }
    });
});


// Hamburger Menü für Mobile
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});



// Zeigt Hochscrollknopf wenn man 300px runtergescrollt hat
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// Hochscroll-Funktion
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Email Anti-Spam script
    var user = 'office';
    var domain = 'freelancer-backoffice.de';
    var elem = document.createElement('a');
    elem.href = 'mailto:' + user + '@' + domain;
    elem.innerText = user + '@' + domain;
    document.body.appendChild(elem);
        }
    });
});
