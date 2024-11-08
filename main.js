$(document).ready('form');

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeNovaTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');
        const tarefaGrifada = $('.marcar-tarefa');

        $(`<span>${nomeNovaTarefa}</span>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nova-tarefa').val('');

    $('ul').on('click','li',function() {
        $(this).addClass('marcar-tarefa');
    })

    })