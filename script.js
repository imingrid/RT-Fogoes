// RT Fogões - Script Vanilla para GitHub Pages
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orcamento-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const tipo = document.getElementById('tipoEquip').value;
      const marca = document.getElementById('marcaEquip').value || 'Não informada';
      const problema = document.getElementById('problemaEquip').value;
      const bairro = document.getElementById('bairroEquip').value || 'Porto Alegre';

      const texto = `Olá Carlos! Vi a RT Fogões na internet.\n\nPreciso de um orçamento:\n- Equipamento: ${tipo}\n- Marca: ${marca}\n- Problema: ${problema}\n- Bairro: ${bairro}\n\nPoderia me passar uma estimativa de valor e agendar a visita?`;

      const url = `https://wa.me/5551985802706?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
