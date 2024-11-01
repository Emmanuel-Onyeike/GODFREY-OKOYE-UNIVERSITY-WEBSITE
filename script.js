$(document).ready(function() {
    $('#menu-button').on('click', function() {
        $('#mobileModal').modal('show');
    });

    $('#mobileModal').on('show.bs.modal', function () {
        $(this).find('.modal-content').addClass('animated');
    });

    $('#mobileModal').on('hide.bs.modal', function () {
        $(this).find('.modal-content').removeClass('animated');
    });
});
$(document).ready(function() {
    $('#search-input').on('input', function() {
        let value = $(this).val().toLowerCase();
        if (value) {
            $('#search-results').show();
        } else {
            $('#search-results').hide();
        }
    });

    $('#search-results li a').on('click', function() {
        $('#search-input').val($(this).text()); 
        $('#search-results').hide(); 
       
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.search-container').length) {
            $('#search-results').hide(); 
        }
    });
});
$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('body').addClass('scrolled'); 
        } else {
            $('body').removeClass('scrolled'); 
        }
    });
});
$(document).ready(function() {
    $('body').addClass('loaded'); 
});
const text = "Godfrey Okoye University Enugu is a private university belonging to the Catholic  Diocese of Enugu, Nigeria. It is the first university established by a Catholic Diocese in Africa. The university received its operational licence from the National Universities Commission (NUC) in 2009, and so commenced full academic activities in the 2009/2010 academic session with two faculties and with 214 students. Currently, it offers undergraduate programmes in five faculties: Arts, Education, Law, Management and Social Sciences, Natural and Applied Sciences.";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 50); 
    }
}

window.onload = typeText; 
