import React, { useState } from 'react';
import { 
  Flame, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  Code, 
  Copy, 
  Check, 
  Download,
  X,
  Instagram,
  Facebook,
  Award
} from 'lucide-react';

// Images available in public directory
const IMAGES = {
  hero: '/images/hero.jpg',
  limpezaBicos: '/images/limpeza-bicos.jpg',
  kitGas: '/images/kit-gas.jpg',
  laDeVidro: '/images/la-de-vidro.jpg',
  queimadores: '/images/queimadores.jpg',
  instalacao: '/images/instalacao.jpg',
};

const PHONE_NUMBER = '5551985802706';
const PHONE_DISPLAY = '(51) 98580-2706';

export default function App() {
  // Budget simulator state
  const [equipmentType, setEquipmentType] = useState('Cooktop');
  const [brand, setBrand] = useState('Brastemp');
  const [problem, setProblem] = useState('Chama amarela manchando panelas');
  const [neighborhood, setNeighborhood] = useState('Porto Alegre');
  const [clientName, setClientName] = useState('');

  // Service modal state
  const [selectedService, setSelectedService] = useState<null | {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    details: string[];
    benefit: string;
  }>(null);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // GitHub Pages Code Modal state
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js' | 'instrucoes'>('html');
  const [copiedCode, setCopiedCode] = useState(false);

  // Generate customized WhatsApp URL
  const generateWhatsAppUrl = (customMsg?: string) => {
    let msg = customMsg;
    if (!msg) {
      msg = `Olá Carlos! Vi a RT Fogões na internet.\n\nPreciso de orçamento para conserto:\n- Equipamento: ${equipmentType}\n- Marca: ${brand || 'Não informada'}\n- Problema: ${problem}\n- Localidade: ${neighborhood || 'Porto Alegre'}${clientName ? `\n- Meu nome: ${clientName}` : ''}\n\nPoderia me passar uma estimativa ou agendar uma visita?`;
    }
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const services = [
    {
      title: 'Limpeza de bicos e regulagem',
      subtitle: 'Calibração de ar e vazão de gás',
      image: IMAGES.limpezaBicos,
      description: 'Desobstrução minuciosa dos injetores e regulagem da mistura de ar e gás para restabelecer a chama azul pura, forte e estável.',
      details: [
        'Elimina a fumaça preta que suja o fundo das panelas',
        'Acaba com os estalos e chama amarela irregular',
        'Economiza gás aumentando o poder de aquecimento',
        'Regulagem precisa dos registros individuais'
      ],
      benefit: 'Chama azul perfeita, sem manchar panelas e com economia de gás.'
    },
    {
      title: 'Troca de lã de vidro',
      subtitle: 'Isolamento térmico do forno',
      image: IMAGES.laDeVidro,
      description: 'Substituição completa do isolamento térmico interno do forno por manta de lã de vidro de alta densidade.',
      details: [
        'Impede que as laterais do fogão esquentem demais',
        'Protege armários e bancadas de marcenaria contra queima',
        'Forno assa bolos e carnes de forma homogênea e mais rápida',
        'Retém calor interno reduzindo desperdício'
      ],
      benefit: 'Segurança contra superaquecimento de móveis e cozimento homogêneo.'
    },
    {
      title: 'Conversão GLP / Gás natural',
      subtitle: 'Adaptação de botijão para gás encanado',
      image: IMAGES.instalacao,
      description: 'Adaptação técnica de fogões e cooktops para operar com segurança entre Gás Liquefeito de Petróleo (botijão) e Gás Natural canalizado.',
      details: [
        'Troca e redimensionamento milimétrico de injetores (bicos)',
        'Ajuste das válvulas de vazão e queima nos queimadores e forno',
        'Substituição de conexões e registros compatíveis',
        'Teste rigoroso de vazamento com manômetro'
      ],
      benefit: 'Segurança absoluta e chama no ponto exato da pressão do seu prédio.'
    },
    {
      title: 'Instalação técnica segura',
      subtitle: 'Cooktops, fornos e fogões',
      image: IMAGES.hero,
      description: 'Instalação completa e embutimento de cooktops a gás, fogões residenciais e industriais em bancadas de granito e nichos.',
      details: [
        'Utilização de mangueira metálica flexível certificada (NBR 14177)',
        'Instalação de registro de bloqueio de fácil acesso',
        'Fixação com fita de vedação anti-umidade em bancadas',
        'Conferência de ventilação e teste de estanqueidade'
      ],
      benefit: 'Conexão 100% segura dentro das normas dos bombeiros e ABNT.'
    },
    {
      title: 'Troca de kit gás',
      subtitle: 'Mangueira metálica, registro e regulador',
      image: IMAGES.kitGas,
      description: 'Substituição periódica do conjunto regulador de pressão, mangueiras trançadas em aço inoxidável e registros de esfera.',
      details: [
        'Substituição de mangueiras plásticas antigas por malha de inox',
        'Regulador de pressão novo com selo INMETRO',
        'Registro de gás com fechamento rápido de emergência',
        'Eliminação de qualquer suspeita ou cheiro de vazamento'
      ],
      benefit: 'Proteja sua família e sua casa contra riscos de vazamento e fogo.'
    },
    {
      title: 'Troca de espalha chamas e queimadores',
      subtitle: 'Peças novas, trempes e difusores',
      image: IMAGES.queimadores,
      description: 'Substituição de trempes (grades), bacias, difusores e espalha-chamas desgastados, oxidados ou entortados pelo tempo.',
      details: [
        'Peças novas e sob medida para a marca do seu aparelho',
        'Encaixe perfeito que impede a chama de soprar ou vazar',
        'Restaura a estética e o acabamento original do fogão',
        'Maior durabilidade e facilidade na limpeza diária'
      ],
      benefit: 'Seu fogão com visual e potência de novo por uma fração do preço.'
    }
  ];

  const reviews = [
    {
      name: 'Néia Uzon',
      initial: 'N',
      avatarBg: 'bg-sky-500',
      text: 'É difícil achar um profissional que realmente se possa recomendar como o Carlos. Ele me salvou depois de inquilinos detonarem meu cooktop e o deixou em condições de uso pelos novos moradores. Fez milagre! Foi um profissional perfeito como há décadas eu não encontrava. Desafio alguém chamar o Carlos e dizer que não foi bem atendido!',
      source: 'Google Avaliações',
      stars: 5,
      date: 'Cliente Verificada'
    },
    {
      name: 'Virginia Lani',
      initial: 'V',
      avatarBg: 'bg-rose-500',
      text: 'Excelente profissional. Além de ser pontual, foi muito paciente em explicar tanto a causa do problema do meu fogão quanto como cuidar daqui pra frente. O profissional tem pleno domínio sobre o assunto. Pode chamar de olhos fechados. Recomendadíssimo. Obrigada.',
      source: 'Google Avaliações',
      stars: 5,
      date: 'Cliente Verificada'
    },
    {
      name: 'Marcos Silveira',
      initial: 'M',
      avatarBg: 'bg-emerald-600',
      text: 'Fez a conversão para gás natural do meu cooktop Brastemp no mesmo dia em que chamei no WhatsApp. Rápido, limpo, pontual e muito transparente com os valores. Chama azul perfeitinha. Recomendo de olhos fechados em Porto Alegre!',
      source: 'Google Avaliações',
      stars: 5,
      date: 'Cliente Verificado'
    }
  ];

  const faqs = [
    {
      question: 'Vocês atendem em quais regiões de Porto Alegre?',
      answer: 'Atendemos a domicílio em todos os bairros de Porto Alegre (Moinhos de Vento, Bela Vista, Petrópolis, Menino Deus, Centro Histórico, Zona Sul, Zona Norte e demais regiões) e cidades vizinhas da Grande Porto Alegre com agendamento rápido pelo WhatsApp.'
    },
    {
      question: 'Como funciona o orçamento?',
      answer: 'Fazemos uma pré-avaliação rápida pelo WhatsApp! Você nos envia uma foto ou vídeo do seu fogão com o sintoma do defeito e seu bairro. Passamos a estimativa prévia de valores e combinamos o horário mais conveniente para a visita técnica.'
    },
    {
      question: 'O serviço tem garantia?',
      answer: 'Sim! Garantimos total tranquilidade com até 3 meses de garantia formal em todos os reparos e nas peças originais instaladas.'
    },
    {
      question: 'Quais marcas e tipos de equipamentos vocês consertam?',
      answer: 'Atendemos todas as marcas do mercado (Brastemp, Electrolux, Consul, Dako, Fischer, Tramontina, Bosch, Smeg, Venâncio, Tedesco, Progás, etc.). Realizamos consertos em fogões domésticos, cooktops de vidro ou inox, fornos embutidos a gás, fornos guilhotina industriais, chapas de lanche e prensas.'
    },
    {
      question: 'As peças utilizadas são originais?',
      answer: 'Sim, trabalhamos exclusivamente com peças, injetores, registros e acessórios originais homologados e novos para garantir o funcionamento seguro e duradouro do seu equipamento.'
    }
  ];

  const copyPureCode = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Pure HTML for export
  const pureHtmlCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RT Fogões - Conserto e Manutenção a Domicílio em Porto Alegre</title>
  <meta name="description" content="Conserto e manutenção especializada de fogões domésticos e industriais, cooktops e fornos a domicílio em Porto Alegre. Atendimento rápido via WhatsApp!">
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Top Bar -->
  <header class="top-bar">
    <div class="container top-bar-inner">
      <a href="#" class="brand">
        <span class="brand-flame">🔥</span> RT Fogões
      </a>
      <nav class="nav-links">
        <a href="#sobre">Sobre Nós</a>
        <a href="#servicos">Serviços</a>
        <a href="#orcamento">Orçamento</a>
        <a href="#avaliacoes">Avaliações</a>
        <a href="#contato">Contato</a>
      </nav>
      <div class="header-action">
        <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20conserto%20de%20fog%C3%A3o." target="_blank" rel="noopener" class="btn btn-primary">
          WhatsApp: (51) 98580-2706
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="hero-location">Porto Alegre e Região · Atendimento a Domicílio</p>
        <h1 class="hero-title">Conserto de fogões a domicílio em Porto Alegre</h1>
        <p class="hero-lead">
          Manutenção especializada para fogões domésticos e industriais, cooktops e fornos. Atendimento imediato, peças originais e garantia total de até 3 meses.
        </p>
        <div class="hero-actions">
          <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20conserto%20de%20fog%C3%A3o." target="_blank" rel="noopener" class="btn btn-whatsapp-large">
            <span>💬</span> Atendimento imediato pelo WhatsApp
          </a>
          <a href="tel:51985802706" class="phone-link">Ligar: (51) 98580-2706</a>
        </div>
        <div class="hero-badges">
          <span>Atendimento em Domicílio</span>
          <span class="dot">·</span>
          <span>Peças 100% Originais</span>
          <span class="dot">·</span>
          <span>Garantia de 3 Meses</span>
          <span class="dot">·</span>
          <span>5 Estrelas no Google</span>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <img src="images/hero.jpg" alt="Cooktop com chamas azuis perfeitas" class="hero-img">
        <div class="hero-card-floating">
          <strong>Carlos & Equipe RT Fogões</strong>
          <p>Visita pontual e diagnóstico transparente no seu endereço.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sobre Nós -->
  <section id="sobre" class="section section-alt">
    <div class="container">
      <div class="about-grid">
        <div class="about-heading">
          <h2 class="section-title">Somos especialistas em manutenção do seu fogão</h2>
          <p class="about-lead">
            A RT Fogões é uma empresa que está no mercado para auxiliá-lo na manutenção de equipamentos gastronômicos. Dispomos de uma equipe técnica capacitada, apta a realizar reparos em equipamentos como fogões industriais e domésticos, chapas, prensas, fornos guilhotina, cooktops, entre outros.
          </p>
          <p class="about-lead">
            Trabalhamos com conserto de fogões a domicílio em Porto Alegre. Garantimos atendimento imediato, peças e acessórios originais, e serviço com total garantia de até 3 meses.
          </p>
        </div>
        <div class="about-cards">
          <div class="feature-box">
            <h3>Atendimento a Domicílio</h3>
            <p>Economize tempo e esforço. O conserto é realizado com segurança na sua própria residência ou comércio.</p>
          </div>
          <div class="feature-box">
            <h3>Residencial & Gastronômico</h3>
            <p>Especialistas em cooktops, fogões residenciais, fornos, chapas e fogões industriais para restaurantes.</p>
          </div>
          <div class="feature-box">
            <h3>Peças Originais</h3>
            <p>Substituição somente com componentes de procedência com encaixe perfeito e segurança comprovada.</p>
          </div>
          <div class="feature-box">
            <h3>Garantia por Escrito</h3>
            <p>Tranquilidade garantida com até 3 meses de garantia total em serviços e peças substituídas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Serviços -->
  <section id="servicos" class="section">
    <div class="container">
      <div class="section-header-center">
        <h2 class="section-title">Nossos Serviços Especializados</h2>
        <p class="section-subtitle">Soluções completas com rapidez, peças originais e preço justo</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <img src="images/limpeza-bicos.jpg" alt="Limpeza de bicos e regulagem" class="service-img">
          <div class="service-content">
            <h3>Limpeza de bicos e regulagem</h3>
            <p>Desobstrução e regulagem da mistura de ar e gás. Elimina fumaça que mancha panelas e devolve a chama azul forte.</p>
            <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20preciso%20de%20Limpeza%20de%20Bicos%20e%20Regulagem%20de%20chama." target="_blank" class="service-link">Solicitar este serviço →</a>
          </div>
        </div>

        <div class="service-card">
          <img src="images/la-de-vidro.jpg" alt="Troca de lã de vidro" class="service-img">
          <div class="service-content">
            <h3>Troca de lã de vidro</h3>
            <p>Isolamento térmico de forno novo. Evita aquecer armários e bancadas laterais, retém calor e assa de forma uniforme.</p>
            <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20preciso%20de%20Troca%20de%20L%C3%A3%20de%20Vidro%20no%20meu%20forno." target="_blank" class="service-link">Solicitar este serviço →</a>
          </div>
        </div>

        <div class="service-card">
          <img src="images/instalacao.jpg" alt="Conversão GLP / Gás natural" class="service-img">
          <div class="service-content">
            <h3>Conversão GLP / Gás natural</h3>
            <p>Conversão técnica precisa para troca entre botijão de gás e rede encanada, com novos injetores e teste de estanqueidade.</p>
            <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20preciso%20de%20Convers%C3%A3o%20de%20G%C3%A1s%20(GLP%20%2F%20Natural)." target="_blank" class="service-link">Solicitar este serviço →</a>
          </div>
        </div>

        <div class="service-card">
          <img src="images/hero.jpg" alt="Instalação de fogão e cooktop" class="service-img">
          <div class="service-content">
            <h3>Instalação</h3>
            <p>Fixação correta de cooktops e fogões em granito e móveis planejados, com mangueiras flexíveis metálicas aprovadas pela ABNT.</p>
            <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20preciso%20de%20Instala%C3%A7%C3%A3o%20de%20fog%C3%A3o%20%2F%20cooktop." target="_blank" class="service-link">Solicitar este serviço →</a>
          </div>
        </div>

        <div class="service-card">
          <img src="images/kit-gas.jpg" alt="Troca de kit gás" class="service-img">
          <div class="service-content">
            <h3>Troca de kit gás</h3>
            <p>Substituição de reguladores vencidos, registros de esfera e mangueiras trançadas em aço inoxidável para proteção total da família.</p>
            <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20preciso%20de%20Troca%20de%20Kit%20G%C3%A1s." target="_blank" class="service-link">Solicitar este serviço →</a>
          </div>
        </div>

        <div class="service-card">
          <img src="images/queimadores.jpg" alt="Troca de espalha chamas e queimadores" class="service-img">
          <div class="service-content">
            <h3>Troca de espalha chamas e queimadores</h3>
            <p>Substituição de queimadores e espalha-chamas danificados por novos e originais, eliminando sopros e chamas tortas.</p>
            <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20preciso%20de%20Troca%20de%20Espalha%20Chamas%20e%20Queimadores." target="_blank" class="service-link">Solicitar este serviço →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Orçamento Rápido Interativo -->
  <section id="orcamento" class="section section-alt">
    <div class="container max-w-narrow">
      <div class="section-header-center">
        <h2 class="section-title">Solicite seu Orçamento pelo WhatsApp</h2>
        <p class="section-subtitle">Preencha os dados abaixo e inicie a conversa no WhatsApp com tudo pronto</p>
      </div>

      <form id="orcamento-form" class="budget-form">
        <div class="form-group">
          <label for="tipoEquip">Tipo de Equipamento:</label>
          <select id="tipoEquip" class="form-control">
            <option value="Cooktop">Cooktop a gás</option>
            <option value="Fogão residencial de piso">Fogão residencial de piso</option>
            <option value="Fogão de embutir">Fogão de embutir</option>
            <option value="Forno a gás">Forno a gás</option>
            <option value="Fogão industrial / Chapa">Fogão industrial ou Chapa gastronômica</option>
          </select>
        </div>

        <div class="form-group">
          <label for="marcaEquip">Marca do Equipamento:</label>
          <input type="text" id="marcaEquip" class="form-control" placeholder="Ex: Brastemp, Electrolux, Consul, Dako..." value="Brastemp">
        </div>

        <div class="form-group">
          <label for="problemaEquip">Qual o problema apresentado?</label>
          <select id="problemaEquip" class="form-control">
            <option value="Chama amarela manchando as panelas de preto">Chama amarela / manchando panelas</option>
            <option value="Boca entupida ou não acende">Boca entupida / não acende</option>
            <option value="Cheiro de gás ou suspeita de vazamento">Cheiro de gás / vazamento</option>
            <option value="Forno apaga quando solto o botão">Forno apaga sozinho</option>
            <option value="Conversão para gás de rua / GLP">Conversão GLP / Gás Natural</option>
            <option value="Instalação com mangueira de aço">Instalação nova</option>
            <option value="Troca de kit gás ou regulador">Troca de kit gás</option>
            <option value="Outro defeito">Outro defeito</option>
          </select>
        </div>

        <div class="form-group">
          <label for="bairroEquip">Seu Bairro em Porto Alegre / Região:</label>
          <input type="text" id="bairroEquip" class="form-control" placeholder="Ex: Menino Deus, Petrópolis, Moinhos de Vento..." value="Porto Alegre">
        </div>

        <button type="submit" class="btn btn-whatsapp-full">
          Enviar Orçamento no WhatsApp Agora
        </button>
      </form>
    </div>
  </section>

  <!-- Avaliações -->
  <section id="avaliacoes" class="section">
    <div class="container">
      <div class="section-header-center">
        <h2 class="section-title">Avaliações</h2>
        <p class="section-rating-badge">★ Somos 5 estrelas no Google ★</p>
      </div>

      <div class="reviews-grid">
        <div class="review-card">
          <p class="review-text">
            “É difícil achar um profissional que realmente se possa recomendar como o Carlos. Ele me salvou depois de inquilinos detonarem meu cooktop e o deixou em condições de uso pelos novos moradores. Fez milagre! Foi um profissional perfeito como há décadas eu não encontrava. Desafio alguém chamar o Carlos e dizer que não foi bem atendido!”
          </p>
          <div class="review-author">
            <div class="avatar avatar-n">N</div>
            <div>
              <strong>Néia Uzon</strong>
              <span>Google Avaliações</span>
            </div>
          </div>
        </div>

        <div class="review-card">
          <p class="review-text">
            “Excelente profissional. Além de ser pontual, foi muito paciente em explicar tanto a causa do problema do meu fogão quanto como cuidar daqui pra frente. O profissional tem pleno domínio sobre o assunto. Pode chamar de olhos fechados. Recomendadíssimo. Obrigada.”
          </p>
          <div class="review-author">
            <div class="avatar avatar-v">V</div>
            <div>
              <strong>Virginia Lani</strong>
              <span>Google Avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contato Final -->
  <section id="contato" class="section section-contact">
    <div class="container text-center">
      <h2 class="section-title">Contato</h2>
      <p class="contact-lead">Fazemos orçamento pelo WhatsApp, só clicar no botão abaixo:</p>
      <div class="contact-actions">
        <a href="https://wa.me/5551985802706?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20conserto%20de%20fog%C3%A3o." target="_blank" class="btn btn-whatsapp-large">
          Atendimento imediato pelo WhatsApp
        </a>
      </div>
      <p class="contact-phone">Ou ligue diretamente: <a href="tel:51985802706">(51) 98580-2706</a></p>
      <p class="contact-note">Porto Alegre e Região Metropolitana · Atendimento com agendamento pontual</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <strong>RT Fogões, ®</strong>
        <p>Conserto e Manutenção de fogões em Porto Alegre</p>
      </div>
      <div class="footer-links">
        <a href="#contato">Contato</a>
        <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

  // Pure CSS for export
  const pureCssCode = `/* RT Fogões - Estilos Vanilla Modernos e Responsivos */
:root {
  --primary-navy: #0f172a;
  --primary-blue: #0284c7;
  --accent-green: #25d366;
  --accent-green-hover: #1eb956;
  --accent-amber: #d97706;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --bg-page: #fafafa;
  --bg-white: #ffffff;
  --border-color: #e2e8f0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  color: var(--text-main);
  background-color: var(--bg-page);
  line-height: 1.6;
}

h1, h2, h3, .section-title {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--primary-navy);
  line-height: 1.25;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.max-w-narrow {
  max-w: 760px;
  margin-left: auto;
  margin-right: auto;
}

/* Header */
.top-bar {
  background: #ffffff;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
}

.top-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.brand {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--primary-navy);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--primary-navy);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--primary-navy);
  color: #fff;
}

.btn-primary:hover {
  background: #1e293b;
}

.btn-whatsapp-large {
  background: var(--accent-green);
  color: #fff;
  font-size: 1.05rem;
  padding: 0.9rem 1.8rem;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
}

.btn-whatsapp-large:hover {
  background: var(--accent-green-hover);
  transform: translateY(-2px);
}

.btn-whatsapp-full {
  width: 100%;
  background: var(--accent-green);
  color: #fff;
  padding: 1rem;
  font-size: 1.05rem;
  border-radius: 8px;
}

.btn-whatsapp-full:hover {
  background: var(--accent-green-hover);
}

/* Hero */
.hero-section {
  padding: 4.5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
}

.hero-location {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-amber);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.8rem;
}

.hero-title {
  font-size: 2.75rem;
  margin-bottom: 1.25rem;
  text-wrap: balance;
}

.hero-lead {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.phone-link {
  color: var(--primary-navy);
  font-weight: 600;
  text-decoration: none;
}

.hero-badges {
  font-size: 0.85rem;
  color: var(--text-muted);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}

.hero-badges .dot {
  color: #cbd5e1;
}

.hero-image-wrapper {
  position: relative;
}

.hero-img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 20px 35px -10px rgba(0,0,0,0.15);
  display: block;
  object-fit: cover;
}

.hero-card-floating {
  position: absolute;
  bottom: -20px;
  left: 20px;
  background: #ffffff;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border: 1px solid var(--border-color);
  max-width: 320px;
}

.hero-card-floating strong {
  display: block;
  font-size: 0.95rem;
  color: var(--primary-navy);
}

.hero-card-floating p {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

/* Sections */
.section {
  padding: 5rem 0;
}

.section-alt {
  background: #ffffff;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.section-header-center {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
}

.section-rating-badge {
  font-size: 1rem;
  font-weight: 600;
  color: #b45309;
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
}

.about-lead {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.feature-box {
  background: #f8fafc;
  border: 1px solid var(--border-color);
  padding: 1.25rem;
  border-radius: 12px;
}

.feature-box h3 {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.feature-box p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}

.service-img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
}

.service-content {
  padding: 1.5rem;
}

.service-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
}

.service-content p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.service-link {
  color: var(--primary-blue);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

/* Budget Form */
.budget-form {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--primary-navy);
}

.form-control {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-control:focus {
  border-color: var(--primary-blue);
}

/* Reviews */
.reviews-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.review-card {
  background: #ffffff;
  padding: 2.25rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: 0 6px 20px rgba(0,0,0,0.03);
}

.review-text {
  font-size: 1rem;
  font-style: italic;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-n { background: #0284c7; }
.avatar-v { background: #e11d48; }

.review-author strong {
  display: block;
  font-size: 0.95rem;
}

.review-author span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Contact */
.section-contact {
  background: #f1f5f9;
}

.contact-lead {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.contact-actions {
  margin-bottom: 1.5rem;
}

.contact-phone {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.contact-phone a {
  color: var(--primary-navy);
  font-weight: 700;
  text-decoration: none;
}

.contact-note {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Footer */
.site-footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 2.5rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand strong {
  color: #fff;
  font-size: 1.1rem;
}

.footer-brand p {
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #fff;
}

/* Responsividade Mobile */
@media (max-width: 900px) {
  .hero-grid,
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-title {
    font-size: 2.1rem;
  }

  .services-grid,
  .reviews-grid,
  .about-cards {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}
`;

  // Pure JS for export
  const pureJsCode = `// RT Fogões - Lógica Vanilla JS
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orcamento-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const tipo = document.getElementById('tipoEquip').value;
      const marca = document.getElementById('marcaEquip').value || 'Não informada';
      const problema = document.getElementById('problemaEquip').value;
      const bairro = document.getElementById('bairroEquip').value || 'Porto Alegre';

      const texto = \`Olá Carlos! Vi a RT Fogões na internet.\\n\\nPreciso de um orçamento:\\n- Equipamento: \${tipo}\\n- Marca: \${marca}\\n- Problema: \${problema}\\n- Bairro: \${bairro}\\n\\nPoderia me passar uma previsão e agendar a visita?\`;

      const url = \`https://wa.me/5551985802706?text=\${encodeURIComponent(texto)}\`;
      window.open(url, '_blank');
    });
  }

  // Smooth scroll para links internos
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
`;

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 flex flex-col font-sans">
      
      {/* Top Banner Notice: Info for user portfolio */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Atendimento técnico a domicílio em Porto Alegre e Região Metropolitana</span>
            <span className="text-slate-500">·</span>
            <span className="text-amber-400 font-medium">Garantia total de 3 meses</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowCodeModal(true)} 
              className="text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 px-3 py-1 rounded border border-amber-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Ver Código Puro (GitHub Pages)</span>
            </button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar Contract (1 Row, 3 Zones) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single Brand element */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-slate-950 block leading-tight">
                RT Fogões
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase block -mt-0.5">
                Conserto e Manutenção
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean typography, no pills) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#sobre" className="hover:text-slate-950 transition-colors">Sobre Nós</a>
            <a href="#servicos" className="hover:text-slate-950 transition-colors">Serviços</a>
            <a href="#orcamento" className="hover:text-slate-950 transition-colors">Simulador de Orçamento</a>
            <a href="#avaliacoes" className="hover:text-slate-950 transition-colors">Avaliações 5★</a>
            <a href="#duvidas" className="hover:text-slate-950 transition-colors">Dúvidas Frequentes</a>
            <a href="#contato" className="hover:text-slate-950 transition-colors">Contato</a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Atendimento WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-50 px-3 py-1.5 rounded border border-amber-200/60">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Porto Alegre e Região Metropolitana · A Domicílio</span>
                </div>

                <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 leading-[1.12] tracking-tight [text-wrap:balance]">
                  Conserto de fogões a domicílio em Porto Alegre
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Manutenção técnica especializada para fogões domésticos e industriais, cooktops e fornos. Garantimos atendimento imediato, peças e acessórios 100% originais e serviço com garantia total de até 3 meses.
                </p>

                {/* Primary CTA Block */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all text-center"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Atendimento imediato pelo WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors text-center"
                  >
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span>Ligar: {PHONE_DISPLAY}</span>
                  </a>
                </div>

                {/* Unboxed Metadata Trust Indicators */}
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200">
                  <span className="flex items-center gap-1.5 font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Atendimento no seu endereço
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Peças 100% originais
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-800">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    Garantia de 3 meses
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-amber-700 font-semibold">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    5 Estrelas no Google
                  </span>
                </div>

              </div>

              {/* Right Column: Hero Visual Asset */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                  <img
                    src={IMAGES.hero}
                    alt="Cooktop de inox com chamas azuis acesas em perfeito funcionamento"
                    className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1 text-amber-500 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                          ))}
                          <span className="text-xs font-bold text-slate-900 ml-1">5.0</span>
                        </div>
                        <p className="font-semibold text-sm text-slate-950">Carlos & Equipe RT Fogões</p>
                        <p className="text-xs text-slate-600">Conserto rápido, seguro e sem sujeira na sua cozinha</p>
                      </div>
                      <a 
                        href="#orcamento"
                        className="shrink-0 px-3 py-1.5 text-xs font-semibold rounded bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                      >
                        Cotar Agora
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: SOBRE NÓS (From Screenshot 4 & 5) */}
        <section id="sobre" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left side: Editorial Prose */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Excelência e Tradição
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                  Somos especialistas em manutenção do seu fogão
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  <p>
                    A <strong className="text-slate-900 font-semibold">RT Fogões</strong> é uma empresa que está no mercado para auxiliá-lo na manutenção de equipamentos gastronômicos. Dispomos de uma equipe técnica capacitada, apta a realizar reparos em equipamentos como fogões industriais e domésticos, chapas, prensas, fornos guilhotina, cooktops, entre outros.
                  </p>
                  <p>
                    Trabalhamos com <strong className="text-slate-900 font-semibold">conserto de fogões a domicílio em Porto Alegre</strong>. Garantimos atendimento imediato, peças e acessórios originais, e serviço com total garantia de até 3 meses.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={generateWhatsAppUrl("Olá! Gostaria de entender mais sobre o atendimento a domicílio da RT Fogões.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <span>Falar diretamente com o técnico no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right side: Bento Grid of Proof & Differentiators */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-1">
                    Atendimento a Domicílio
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Você não precisa transportar seu fogão pesado. Realizamos todo o conserto no conforto da sua casa ou estabelecimento em Porto Alegre.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-1">
                    Garantia Total de 3 Meses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serviço sério com garantia por escrito em peças e mão de obra. Se houver qualquer detalhe, retornamos sem custo.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-1">
                    Peças & Acessórios Originais
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Trabalhamos com queimadores, injetores e registros originais das principais marcas para garantir chama perfeita e durabilidade.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-1">
                    Residencial & Gastronômico
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ampla experiência com fogões residenciais, cooktops, bem como fornos industriais, prensas e chapas para restaurantes.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: SERVIÇOS (From Screenshot 3 & 4) */}
        <section id="servicos" className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Catálogo de Soluções
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Serviços Especializados
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Soluções rápidas e com segurança para qualquer defeito no seu fogão ou cooktop
              </p>
            </div>

            {/* Grid of the 6 core services from user screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-slate-800 border border-slate-200 shadow-sm">
                      Serviço #{index + 1}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-editorial text-xl font-bold text-slate-950 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-amber-700 font-semibold mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                        {service.details.slice(0, 2).map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Ver detalhes</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={generateWhatsAppUrl(`Olá! Gostaria de um orçamento para o serviço: ${service.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Pedir Orçamento</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Industrial / Commercial notice */}
            <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-bold text-slate-900 text-base">
                  Possui restaurante, lanchonete ou cozinha industrial?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Consertamos chapas de lanche, prensas, fornos guilhotina e fogões industriais de alta pressão com atendimento prioritário para seu comércio não parar.
                </p>
              </div>
              <a
                href={generateWhatsAppUrl("Olá Carlos! Preciso de manutenção urgente para equipamento gastronômico / comercial em Porto Alegre.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-colors"
              >
                Atendimento Comercial
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 4: SIMULADOR DE ORÇAMENTO WHATSAPP (Interactive helper) */}
        <section id="orcamento" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                Agilidade & Praticidade
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Simulador de Orçamento
              </h2>
              <p className="text-slate-600 text-base">
                Selecione as características do seu equipamento e inicie a conversa no WhatsApp já com todas as informações organizadas para um retorno instantâneo.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(generateWhatsAppUrl(), '_blank');
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Tipo de Equipamento */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Tipo de Equipamento
                    </label>
                    <select
                      value={equipmentType}
                      onChange={(e) => setEquipmentType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Cooktop a Gás">Cooktop a Gás</option>
                      <option value="Fogão de Piso 4 Bocas">Fogão de Piso 4 Bocas</option>
                      <option value="Fogão de Piso 5 ou 6 Bocas">Fogão de Piso 5 ou 6 Bocas</option>
                      <option value="Fogão de Embutir">Fogão de Embutir</option>
                      <option value="Forno a Gás de Embutir">Forno a Gás de Embutir</option>
                      <option value="Fogão Industrial / Chapa / Prensa">Fogão Industrial / Chapa / Prensa</option>
                    </select>
                  </div>

                  {/* Marca */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Marca do Fogão / Cooktop
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Brastemp, Electrolux, Consul, Dako..."
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Problema Apresentado */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Qual o defeito ou necessidade?
                    </label>
                    <select
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Chama amarela manchando panelas">Chama amarela manchando panelas</option>
                      <option value="Boca entupida ou chama muito baixa">Boca entupida / chama baixa</option>
                      <option value="Cheiro de gás ou suspeita de vazamento">Cheiro de gás / vazamento</option>
                      <option value="Forno apaga quando solto o botão">Forno apaga sozinho</option>
                      <option value="Conversão de gás (Botijão para Gás de Rua)">Conversão para Gás Natural / GLP</option>
                      <option value="Instalação com mangueira de aço">Instalação nova de cooktop/fogão</option>
                      <option value="Troca de lã de vidro do forno">Troca de lã de vidro do forno</option>
                      <option value="Troca de queimadores e espalha chamas">Troca de queimadores/espalha-chamas</option>
                      <option value="Outro defeito">Outro defeito</option>
                    </select>
                  </div>

                  {/* Bairro / Localidade */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Seu Bairro em Porto Alegre ou Região
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Petrópolis, Bela Vista, Menino Deus, Centro..."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                </div>

                {/* Nome do Cliente Opcional */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Seu Nome (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Como podemos lhe chamar?"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Preview da Mensagem */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Prévia da mensagem no WhatsApp:
                  </p>
                  <p className="text-xs text-slate-700 font-mono whitespace-pre-line bg-slate-50 p-3 rounded border border-slate-100">
                    {`Olá Carlos! Vi a RT Fogões na internet.\nPreciso de orçamento para conserto:\n- Equipamento: ${equipmentType}\n- Marca: ${brand || 'Não informada'}\n- Problema: ${problem}\n- Localidade: ${neighborhood || 'Porto Alegre'}${clientName ? `\n- Meu nome: ${clientName}` : ''}\nPoderia me passar uma estimativa ou agendar uma visita?`}
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Enviar Orçamento no WhatsApp Agora</span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  Resposta rápida no horário comercial · Sem compromisso · Atendimento a domicílio
                </p>

              </form>
            </div>

          </div>
        </section>

        {/* SECTION 5: AVALIAÇÕES (Screenshots 1 & 2) */}
        <section id="avaliacoes" className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                Confiança Comprovada
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Avaliações
              </h2>
              <div className="flex items-center justify-center gap-2 text-slate-900 font-medium">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="font-semibold text-slate-950">Somos 5 estrelas no Google</span>
              </div>
            </div>

            {/* Testimonials cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((rev, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.stars)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold text-base flex items-center justify-center shadow-sm`}>
                      {rev.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-950">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <span>{rev.source}</span>
                        <span>·</span>
                        <span className="text-emerald-700 font-medium">{rev.date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Trust Banner */}
            <div className="mt-12 text-center">
              <a
                href={generateWhatsAppUrl("Olá Carlos! Vi as ótimas avaliações da RT Fogões no Google e gostaria de um atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
              >
                <span>Mais de 10 anos prestando serviços pontuais e honestos em Porto Alegre</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 6: DÚVIDAS FREQUENTES (FAQ) */}
        <section id="duvidas" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Tire suas Dúvidas
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-600 text-base">
                Informações claras e transparentes para a sua tranquilidade
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 7: CONTATO (From Screenshot 2) */}
        <section id="contato" className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                  Atendimento Imediato
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                  Contato
                </h2>
                <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                  Fazemos orçamento pelo WhatsApp, só clicar no botão abaixo:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5 text-center"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Atendimento imediato pelo WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors text-center"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
                  <div>
                    <strong className="block text-slate-200">Região de Cobertura:</strong>
                    <span>Porto Alegre e Grande Porto Alegre a domicílio</span>
                  </div>
                  <div>
                    <strong className="block text-slate-200">Horário de Atendimento:</strong>
                    <span>Segunda a Sábado, com agendamento flexível</span>
                  </div>
                </div>
              </div>

              {/* Cooktop photo with blue flame highlight from Screenshot 2 */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
                  <img
                    src={IMAGES.hero}
                    alt="Cooktop de 5 queimadores com chamas azuis perfeitas"
                    className="w-full h-80 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Chama azul, sem fuligem e sem risco.</p>
                    <p className="text-slate-300 text-xs mt-0.5">Segurança máxima para a sua família ou negócio.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER (From Screenshot 1: RT Fogões, ® · Contato · Facebook · Instagram) */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            
            <div className="text-center md:text-left">
              <span className="font-editorial text-xl font-bold text-white tracking-tight">
                RT Fogões, ®
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Conserto e Manutenção de fogões em Porto Alegre
              </p>
            </div>

            {/* Links as present in original website footer */}
            <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>

            <button
              onClick={() => setShowCodeModal(true)}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 cursor-pointer bg-slate-900 px-3 py-1.5 rounded border border-slate-800"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Arquivos HTML/CSS/JS (GitHub Pages)</span>
            </button>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} RT Fogões. Todos os direitos reservados. Porto Alegre - RS.</p>
            <p>Desenvolvido para portfólio e hospedagem no GitHub Pages.</p>
          </div>
        </div>
      </footer>

      {/* MODAL: SERVICE DETAILS */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-52 bg-slate-100 overflow-hidden relative">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                  {selectedService.subtitle}
                </span>
                <h3 className="font-editorial text-xl font-bold leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="bg-emerald-50 border border-emerald-200/80 p-3 rounded-xl">
                <p className="text-xs font-semibold text-emerald-900">
                  ★ Benefício Principal:
                </p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  {selectedService.benefit}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  O que está incluso:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedService.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <a
                  href={generateWhatsAppUrl(`Olá Carlos! Gostaria de agendar o serviço: ${selectedService.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* MODAL: EXPORT CODE FOR GITHUB PAGES (Vanilla HTML/CSS/JS) */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 text-slate-200 rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl border border-slate-800 relative">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">
                    Código Vanilla para GitHub Pages (HTML, CSS e JS Puros)
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  100% puro, sem frameworks e sem compilação. Pronto para subir no seu repositório do GitHub!
                </p>
              </div>

              <button
                onClick={() => setShowCodeModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="px-6 pt-3 flex items-center justify-between border-b border-slate-800 bg-slate-950/40">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCodeTab('html')}
                  className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
                    activeCodeTab === 'html' 
                      ? 'bg-slate-800 text-amber-400 border-t-2 border-amber-400' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  index.html
                </button>
                <button
                  onClick={() => setActiveCodeTab('css')}
                  className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
                    activeCodeTab === 'css' 
                      ? 'bg-slate-800 text-amber-400 border-t-2 border-amber-400' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  style.css
                </button>
                <button
                  onClick={() => setActiveCodeTab('js')}
                  className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
                    activeCodeTab === 'js' 
                      ? 'bg-slate-800 text-amber-400 border-t-2 border-amber-400' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  script.js
                </button>
                <button
                  onClick={() => setActiveCodeTab('instrucoes')}
                  className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors cursor-pointer ${
                    activeCodeTab === 'instrucoes' 
                      ? 'bg-slate-800 text-emerald-400 border-t-2 border-emerald-400' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Passo a Passo GitHub Pages
                </button>
              </div>

              {activeCodeTab !== 'instrucoes' && (
                <button
                  onClick={() => {
                    const code = activeCodeTab === 'html' ? pureHtmlCode : activeCodeTab === 'css' ? pureCssCode : pureJsCode;
                    copyPureCode(code);
                  }}
                  className="px-3 py-1.5 mb-2 rounded bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Arquivo</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Tab content */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-950/80 font-mono text-xs">
              {activeCodeTab === 'html' && (
                <pre className="text-slate-300 leading-relaxed selection:bg-amber-500 selection:text-black">
                  {pureHtmlCode}
                </pre>
              )}

              {activeCodeTab === 'css' && (
                <pre className="text-slate-300 leading-relaxed selection:bg-amber-500 selection:text-black">
                  {pureCssCode}
                </pre>
              )}

              {activeCodeTab === 'js' && (
                <pre className="text-slate-300 leading-relaxed selection:bg-amber-500 selection:text-black">
                  {pureJsCode}
                </pre>
              )}

              {activeCodeTab === 'instrucoes' && (
                <div className="font-sans text-sm text-slate-300 space-y-6">
                  <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
                    <h4 className="text-white font-bold text-base mb-2">
                      🚀 Como publicar no GitHub Pages em 3 minutos:
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                      <li>
                        Crie um repositório no seu GitHub (exemplo: <code className="text-amber-400 bg-slate-900 px-1 py-0.5 rounded">rt-fogoes-landing</code>).
                      </li>
                      <li>
                        Crie os 3 arquivos na raiz do repositório:
                        <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-xs text-slate-400">
                          <li><code className="text-amber-400">index.html</code> (com o conteúdo da aba index.html)</li>
                          <li><code className="text-amber-400">style.css</code> (com o conteúdo da aba style.css)</li>
                          <li><code className="text-amber-400">script.js</code> (com o conteúdo da aba script.js)</li>
                        </ul>
                      </li>
                      <li>
                        Crie uma pasta chamada <code className="text-amber-400">images/</code> e coloque as fotos (ou baixe da pasta public/images desta aplicação).
                      </li>
                      <li>
                        No GitHub, vá em <strong>Settings</strong> &gt; <strong>Pages</strong>.
                      </li>
                      <li>
                        Em <strong>Branch</strong>, selecione <code className="text-emerald-400">main</code> ou <code className="text-emerald-400">master</code> e pasta <code className="text-emerald-400">/ (root)</code>, e clique em <strong>Save</strong>.
                      </li>
                      <li>
                        Pronto! O GitHub gerará um link gratuito como <code className="text-amber-400">https://seu-usuario.github.io/rt-fogoes-landing/</code> para você colocar no seu portfólio e enviar para clientes!
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-emerald-200 text-xs">
                    💡 <strong>Dica para Portfólio:</strong> Esta landing page possui código semântico, acessibilidade, responsividade para smartphones, formulário inteligente que formata a mensagem para o WhatsApp e velocidade máxima de carregamento.
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
              <span>Também geramos os arquivos na pasta <code className="text-amber-400">/public/vanilla/</code> do projeto</span>
              <button
                onClick={() => setShowCodeModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
              >
                Fechar Visualizador
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
