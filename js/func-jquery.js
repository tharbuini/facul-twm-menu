$(function(){
    $('.nav-ico').click(
        function(event){
            $(this).toggleClass('active');
            $('.nav-menu').toggleClass('active');
            $('.nav-overlay').toggleClass('active');
            $('.nav-overlay').click(
                function(event){
                    $(this).removeClass('active');
                    $('.nav-menu').removeClass('active');
                    $('.nav-ico').removeClass('active');
                }
            );
        }
    );

    $('.nav-menu li').click(
        function(event){
            $('.nav-submenu ul', this).toggleClass('active');
        }
    )
});

