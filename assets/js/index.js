// Pegando elementos do DOM

const formChamado = document.querySelector('.contact__form')


formChamado.addEventListener('submit', (event) => {
    event.preventDefault();
    Swal.fire({
        title: "Deseja enviar o chamado?",
        text: "Não será possivel apagar depois",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#bdf0e7",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, enviar chamado",
        cancelButtonText: "Cancelar chamado"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "Enviado!",
            text: "Seu chamado foi enviado",
            icon: "success"
        });
    });
})