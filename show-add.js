 <script defer>
        var card = document.querySelector('.card');
        var class_mostrar = document.querySelector(".esconder");

        card.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            mostrar()
        })

        function mostrar() {
            class_mostrar.classList.remove('esconder')
            
            setTimeout( () => {
                class_mostrar.classList.add('esconder')
            }, 3000)
        }
    </script>
