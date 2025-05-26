// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do botão "Obter Direções"
    const direcoesBtn = document.getElementById('direcoesBtn');
    if (direcoesBtn) {
        direcoesBtn.addEventListener('click', () => {
            // Endereço do sítio (exemplo, você precisará ajustar para o seu endereço real)
            const endereco = "Rua Exemplo, 123, Bairro Rural, Maringá, Paraná";
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endereco)}`;
            window.open(googleMapsUrl, '_blank');
        });
    }

    // Funcionalidade do Carrossel de Produtos
    const carousel = document.querySelector('#produtos .produto-carousel');
    const prevBtn = document.querySelector('#produtos .prev-btn');
    const nextBtn = document.querySelector('#produtos .next-btn');
    const scrollAmount = 330; // Largura do item + gap (300px + 30px)

    if (carousel && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Funcionalidade do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Simula um envio de formulário
            console.log("Dados do formulário:", { nome, email, mensagem });

            // Aqui você integraria com um serviço de backend (e.g., Formspree, Netlify Forms, ou seu próprio backend)
            // Para este exemplo, vamos apenas simular um sucesso/erro
            const success = Math.random() > 0.3; // 70% de chance de sucesso

            if (success) {
                formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                formMessage.className = 'form-message success';
                contactForm.reset(); // Limpa o formulário
            } else {
                formMessage.textContent = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
                formMessage.className = 'form-message error';
            }
            formMessage.style.display = 'block';

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});