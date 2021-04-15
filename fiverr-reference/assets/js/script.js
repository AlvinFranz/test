$(document).ready(function() { 
    const movement = 100;
    const first_index = 0;
    let last_index = (($('.story-section_content').length)-1) * (-100);
    let index = 0;

    $('.arrow-left').click(function() { 
        index += movement;
        index > first_index ? index = last_index : null;
        $('.story-section_content').css('transform', 'translateX('+index+'%)');
    })

    $('.arrow-right').click(function() { 
        index -= movement;
        index < last_index ?  index = first_index : null;
        $('.story-section_content').css('transform', 'translateX('+index+'%)');
    })

    //auto loop slideshow
    function slide() { 
        index -= 100;
        index < last_index ?  index = first_index : null;
        $('.story-section_content').css('transform', 'translateX('+index+'%)');
    }
    // 7 seconds interval before slide
    setInterval(slide, 7000);

});