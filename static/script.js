$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false
    });


    $('#autoestima-form').submit(function(e){
        e.preventDefault();

        var nome = $('#nome').val();

        // Modificação aqui para enviar o nome corretamente
        $.ajax({
            type: 'POST',
            url: '/obter_mensagem',
            data: {nome: nome},
            success: function(response) {
                exibirMensagem(response.mensagem);
            },
            error: function(error) {
                console.log(error);
            }
        });

        $('.slider').slick('slickPause');

        setTimeout(function(){
            $('.slider').slick('slickNext');
            $('#mensagem-positiva').removeClass('mostrar');
            $('.slider').slick('slickPlay');
        },4000);
    });

    // Função para exibir mensagem positiva
    function exibirMensagem(mensagem) {
        $('#mensagem-positiva').text(mensagem).addClass('mostrar');
    }
});
