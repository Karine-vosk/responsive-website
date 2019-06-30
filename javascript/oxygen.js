$(document).ready(function(){

    let found = $(".found");
    let first =  $(".first");

    found.hover(function(event) {
        $(this).find(".dropdown").css({
        "opacity": "1",
        "margin-top": "15px",
        })
    });

    found.mouseleave(function(event){
        $(this).find(".dropdown").css({
            "opacity": "0",
            "top": "15px",
        })
    });

    first.hover(function(){
        $(this).find("a").css("opacity", "1");
    });

    first.mouseleave(function(){
        $(this).find("a").css("opacity", "0.5");
    });

    first.click(function(){
        first.find("a").removeClass("active");
        if($(this).find("a")) {
            $(this).find("a").addClass("active");
        }
    });

    $(".jq_hover").find("a").hover(function(){
        $(this).css({
            "box-shadow": "0 12px 16px 0 rgba(0,0,0,0.24)",
        })
    });

    $(".jq_hover").find("a").mouseleave(function(){
        $(this).css({
            "box-shadow":"none",
        })
    });

    $(".button_learn").find("a").hover(function(){
        $(this).css({
            "text-decoration":"none",
            "color": "#fff",
            "opacity": "0.9",
        })
    });

    $(".button_learn").find("a").mouseleave(function(){
        $(this).css({
            "opacity": "1",
        })
    });

    $("#background_video").hover(function(){
        $(".over").css({
            "backgroundColor": "rgba(0,0,0,0.7)",
        });

        $("#background_video").find("a").css({
            "width": "110px",
            "height": "110px",
            "border-radius": "50%",
        })
    });


    $("#background_video").mouseleave(function(){
        $(".over").css({
            "backgroundColor": "rgba(0,0,0,0.5)",
        });
        $("#background_video").find("a").css({
            "width": "100px",
            "height": "100px",
        })
    });

    $(".sign_inp, #btn_sign").focus(function(){
        $(this).css({
            "outline": "none",

        })
    });

    $(".sign_inp").focus(function(){
        $(this).css({
            "background-color": "rgba(255, 255, 255, 0.3)",
        })
    });


    $(".sign_inp").blur(function(){
        $(this).css({
            "backgroundColor": "rgba(255, 255, 255, 0.2)",
        })
    });

    /*when click on video*/
    $("#video_play").click(function(){
        $('body').css({'overflow':'hidden'});
        $("#absolute_div").show();
        $("#video_cont").show();
    });

    $("#modal_hide").click(function(){
        $('body').css({'overflow':'auto'});
        $("#absolute_div").hide();
        $("#video")[0].pause();
    });

    $("#absolute_div").dblclick(function(){
        $("#video_cont").hide();
        $('body').css({'overflow':'auto'});
        $("#absolute_div").hide();
        $("#video")[0].pause();

    });
    /*page scroll, button top*/

    let counterWork = false;

    $(window).scroll(function(){
        if($("body").scrollTop() > 20 || $(document).scrollTop() > 20) {

            $("#joystick").css({
                "display": "block",
            })
        }
        else{
            $("#joystick").css({
                "display": "none",
            })
        }
        //inform_content
        if($("body").scrollTop() > 650 || $(document).scrollTop() > 650) {

            $(".column").css({
                "opacity":"1",
            })
        }

        if($("body").scrollTop() > 1300 || $(document).scrollTop() > 1300) {
            $('.side_header:first-child').animate({ "margin-left":"0"}, 3000);
            $('.side_header:nth-child(2)').delay(1000).animate({ "margin-left":"0"}, 3000);
            $('.side_header:nth-child(3)').delay(1500).animate({ "margin-left":"0"}, 3000);
        }

        if($("body").scrollTop() > 2200 || $(document).scrollTop() > 2200) {
            if (counterWork === false){
                counterWork = true;
                $('.span_number').each(function(){
                    $(this).prop('Counter',0).animate({
                        Counter:$(this).attr('data-count')
                    },{
                        duration: 4000,
                        easing: 'swing',
                        step: function(now){
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        }


    });

    $("#joystick").click(function(){
        //alert("kkk")
        //$("body").scrollTop(0);
        //$(window).scrollTop(0)
        $('html, body').animate({ scrollTop:0 }, 'slow');
    });

    /* carousel*/
    $(".click_circle").click(function(){
        let tiv =Number( $(this).attr("name"));
        let mrgLeft =$(".three_viewport").width();
        $('#carousel_viewport').css({'margin-left': -tiv*mrgLeft});
        $(".click_circle").removeClass("push");
        $(this).addClass("push");
    });

    /*animation button*/
    $(".animate_span").hover(function(){
        $(this).find("a").css({
            "text-decoration": "none",
            "color": "rgb(0,0,0)"
        })
    });

    $(".animate_span").mouseleave(function(){
        $(".animate_href").css({
            "text-decoration": "none",
            "color": "#b3b3b3",
        })
    });

    $(".animate_span").click(function(){

        $(".animate_href").removeClass("href_js");
        $(this).find(".animate_href").addClass("href_js");
        $(".animate_span").removeClass("click_js");
        $(this).addClass("click_js");

        /*show text*/
        let move =Number($(this).attr("name"));
        $("[data-switch]").css({
            "display":"none",
        });

        $("[data-switch='"+move+"']").css({
            "display":"block",
        })

    });

    $(".animate_span").mouseleave(function(){

        $(this).find(".animate_href").css({
            "color": "#b3b3b3",

        });
        $(this).css({
                "backgroundColor": "#f2f2f2",
                "border-radius":"none",
        })

    });

    $(".circle").click(function(){
        // if mouse hover then add .flipping class
        $(this).toggleClass("flipping");

    });

    $(".modal_js").focusin(function(){
        $(this).css({
            "background-color":"#eeeeee",
            "outline": "none",
        })
    });

    $(".modal_js").focusout(function(){
        $(this).css({
            "background-color":"white",
        })
    });

    $(window).click(function(ev){
        if( $(ev.target).attr("id")=== "modal_form" || $(ev.target).closest('#modal_form').length === 1){
            return;
        }
        else if( $(ev.target).attr("id") === "login_a"){
            $("#modal_form").css({
                "display": "block",
                "margin-top": "-32px"
            });
            return;
        }

        $("#modal_form").css({
            "display": "none",
            "margin-top": "50px"
        })

    });

    //let open = $("i").is("[name='bac']");

    $(".open_icon").click(function(){

        $(".close_icon").css({
            "display": "block",
        });
        $('#login').css({
            "display": "none"
        });
        $(".open_icon").css({
            "display": "none",
        });
        $(".menu_icon").css({
            "background-color":"#808080",
        });
        $("#menu").addClass('show_menu');

    });

    $(".close_icon").click(function(){
        $(".open_icon").css({
            "display": "block",
        });
        $(".close_icon").css({
            "display": "none",
        });
        $('#login').css({
            "display": "inline-block"
        });
        $("#menu").removeClass('show_menu');
        $(".menu_icon").css({
            "background-color":"transparent",
        })
    });

    $('.button_learn').click(function(e){
        e.preventDefault();
    })

});




