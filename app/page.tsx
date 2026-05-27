import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <Image
            src="/imagens/assets/logo-header.png"
            alt="JS Representações logo"
            width={44}
            height={44}
            style={{ objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(76,175,26,0.5))" }}
            priority
          />
          <div className="nav-logo-text">
            JS Representações
          </div>
        </a>
        <div className="nav-links">
          <a href="#about">História</a>
          <a href="#marcas">Marcas</a>
          <a href="#pillars">Pilares</a>
          <a href="#trust">Confiança</a>
          <a href="#coverage">Atuação</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">Desde 2007 no segmento de motopeças</div>
            <h1>
              Excelência em <em>Representação</em> Comercial
            </h1>
            <p className="hero-subtitle">
              Mais de 18 anos conectando as melhores marcas do Brasil aos
              lojistas de Pernambuco, Paraíba e Alagoas. Não somos apenas
              representantes — somos consultores especialistas no segmento de
              duas rodas.
            </p>
            <a href="#about" className="hero-cta">
              Conheça nossa história
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3l5 5-5 5M3 8h10" />
              </svg>
            </a>
          </div>

          {/* CARD DO ANDERSON */}
          <div className="profile-card">
            <div className="profile-photo-wrap">
              <Image
                src="/imagens/anderson/anderson-watermark.png"
                alt="Anderson Santana"
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
            <div className="profile-info">
              <div className="profile-name">Anderson Santana</div>
              <div className="profile-role">Fundador &amp; Consultor Especialista</div>
              <div
                className="profile-role"
                style={{
                  marginTop: "3px",
                  fontSize: "0.7rem",
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Especialista em Motopeças · Desde 2007
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <div className="stat-num">18+</div>
                  <div className="stat-label">Anos como representante</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">3</div>
                  <div className="stat-label">Estados atendidos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">28</div>
                  <div className="stat-label">Anos no segmento</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">Top 10</div>
                  <div className="stat-label">Dos melhores do Brasil</div>
                </div>
              </div>
              <div className="logo-area">
                <Image
                  src="/imagens/assets/logo-header.png"
                  alt="JS Representações"
                  width={52}
                  height={52}
                  style={{
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 10px rgba(76,175,26,0.5))",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div className="logo-sub" style={{ marginTop: "6px" }}>
                  JS Representações
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text reveal reveal-left">
              <div className="section-tag">Nossa história</div>
              <h2>Uma trajetória construída com dedicação e conhecimento</h2>
              <p>
                Anderson Santana começou sua jornada no mundo das duas rodas aos
                16 anos, em Catende, interior de Pernambuco. Desde então, nunca
                fez outra coisa: sua vida inteira foi dedicada ao segmento de
                motopeças.
              </p>
              <p>
                Em 2007, quando atuava como gerente de uma concessionária Honda,
                recebeu o convite que mudaria sua trajetória. Aceitou o desafio
                de trabalhar como preposto e começar do zero — construindo
                carteira de clientes, dominando produtos e, principalmente,
                aprendendo a entender pessoas.
              </p>
              <p>
                Após superar a perda da principal pasta do escritório em
                2010/2011, Anderson tinha duas escolhas: recuar ou avançar.
                Escolheu avançar. Foi a feiras e convenções em São Paulo, firmou
                novas parcerias, abriu a JS Representações e foi conquistando,
                uma a uma, as melhores marcas do setor.
              </p>
            </div>
            <div className="reveal reveal-right" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
              <div className="quote-block">
                <p>
                  &ldquo;Hoje não me considero um representante, mas sim um
                  Consultor de Vendas — um especialista no segmento de motopeças
                  que estuda muito e tem um perfil de sempre auxiliar o cliente
                  no que ele está precisando.&rdquo;
                </p>
                <div className="quote-author">
                  — Anderson Santana, fundador da JS Representações
                </div>
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Hoje, a JS Representações representa 10 dos melhores portfólios
                do Brasil, atendendo lojistas em Pernambuco, Paraíba e Alagoas
                com a mesma postura que sempre norteou Anderson:{" "}
                <strong>respeito, transparência e honestidade</strong>. O
                cliente sai de cada negociação com a certeza de que fez a
                escolha certa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS REPRESENTADAS */}
      <section className="marcas-section" id="marcas">
        <div className="marcas-inner">
          <div className="marcas-header">
            <div className="reveal reveal-left">
              <div className="section-tag">Portfólio de marcas</div>
              <h2>Marcas líderes que <em>confiam</em> no nosso trabalho.</h2>
            </div>
            <p className="marcas-lead reveal reveal-right" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
              Representamos no Nordeste fabricantes consolidados em pneus,
              amortecedores, retentores, retrovisores e acessórios para o
              segmento de duas rodas.
            </p>
          </div>

          <div className="marcas-grid">
            {[
              { src: "/parceiros/rinaldi.png", alt: "Rinaldi" },
              { src: "/parceiros/delta.png", alt: "Delta" },
              { src: "/parceiros/control.png", alt: "Control Seals" },
              { src: "/parceiros/rafaela.png", alt: "FAR Rafaela" },
              { src: "/parceiros/ebf.png", alt: "EBF" },
              { src: "/parceiros/stallion.png", alt: "Stallion" },
              { src: "/parceiros/coyote.png", alt: "Coyote" },
              { src: "/parceiros/circuit.png", alt: "Circuit Equipment" },
              { src: "/parceiros/renascenca.png", alt: "Renascença" },
              { src: "/parceiros/zouil.png", alt: "Zouil" },
            ].map(({ src, alt }, i) => (
              <div
                key={alt}
                className="reveal"
                style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}
              >
                <div className="marca-card">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 20vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="marcas-footer reveal" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            <div className="marcas-stats">
              <div>
                <div className="marcas-stat-num">10+</div>
                <div className="marcas-stat-lbl">Marcas representadas</div>
              </div>
              <div>
                <div className="marcas-stat-num">3</div>
                <div className="marcas-stat-lbl">Estados de atuação</div>
              </div>
              <div>
                <div className="marcas-stat-num">18+</div>
                <div className="marcas-stat-lbl">Anos de experiência</div>
              </div>
            </div>
            <a href="#contact" className="marcas-cta">
              Fale com a gente
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="pillars" id="pillars">
        <div className="section-inner">
          <div className="section-tag reveal">Os 3 pilares</div>
          <h2 className="reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>O que nos define</h2>
          <p className="pillars-lead reveal" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            Em mais de 18 anos de estrada, três valores essenciais emergem da
            história de Anderson e guiam cada negociação da JS Representações.
          </p>
          <div className="pillars-grid reveal" style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
            <div className="pillar-card">
              <div className="pillar-img">
                <Image src="/imagens/assets/brain.png" alt="Expertise" width={110} height={110} />
              </div>
              <div className="pillar-content">
                <div className="pillar-tag">01 · Expertise</div>
                <div className="pillar-title">Expertise Construída na Prática</div>
                <p className="pillar-text">
                  Desde os 16 anos no segmento de duas rodas, Anderson acumula um
                  conhecimento que vai além de catálogos. Ele treina equipes,
                  orienta o posicionamento de produtos e oferece consultoria
                  estratégica — porque entende o mercado de dentro para fora.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-img">
                <Image src="/imagens/assets/handshake.png" alt="Relacionamento" width={110} height={110} />
              </div>
              <div className="pillar-content">
                <div className="pillar-tag">02 · Parceria</div>
                <div className="pillar-title">Relacionamento e Confiança Duradouros</div>
                <p className="pillar-text">
                  Foram os laços cultivados em feiras, convenções e visitas que
                  abriram as melhores portas. A JS Representações não vende apenas
                  peças — constrói parcerias. Cada cliente é tratado com respeito
                  e honestidade, garantindo que todo negócio feito seja um bom
                  negócio.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-img">
                <Image src="/imagens/assets/airplane.png" alt="Resolutividade" width={110} height={110} />
              </div>
              <div className="pillar-content">
                <div className="pillar-tag">03 · Presença</div>
                <div className="pillar-title">Resolutividade e Presença Constante</div>
                <p className="pillar-text">
                  Semanas viajando, quilômetros rodados — Anderson sempre esteve
                  onde o cliente precisava. Sua postura é de resolver pendências,
                  não de adiar. Uma orientação rápida, um treinamento
                  personalizado ou um conselho certeiro: a JS Representações está
                  sempre presente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANÇA */}
      <section className="trust" id="trust">
        <div className="section-inner">
          <div className="section-tag reveal">Por que nos escolher</div>
          <h2 className="reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>Razões para confiar na JS Representações</h2>
          <div className="trust-grid">
            <div className="reveal" style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
              <div className="trust-card">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="trust-title">Portfólio premium</div>
                <p className="trust-text">
                  Trabalhamos apenas com 10 dos melhores portfólios do Brasil —
                  marcas selecionadas pela qualidade, garantia e suporte ao
                  lojista.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <div className="trust-card">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <div className="trust-title">Treinamento e suporte técnico</div>
                <p className="trust-text">
                  Além de representar, oferecemos treinamento de equipes e
                  orientação sobre posicionamento de produto — seu time preparado
                  vende mais e melhor.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <div className="trust-card">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="trust-title">Transparência em cada etapa</div>
                <p className="trust-text">
                  Negociações claras, condições honestas e respostas rápidas. Você
                  sempre saberá exatamente o que está comprando e por quê.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
              <div className="trust-card">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div className="trust-title">Atendimento ágil e resolutivo</div>
                <p className="trust-text">
                  Nenhuma pendência fica em aberto. Nosso compromisso é resolver —
                  não apenas encaminhar — qualquer demanda do cliente com
                  agilidade.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <div className="trust-card">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="trust-title">Cobertura regional consolidada</div>
                <p className="trust-text">
                  Pernambuco, Paraíba e Alagoas atendidos com profundidade e
                  frequência — conhecemos cada praça, cada lojista, cada
                  oportunidade de mercado.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <div className="trust-card">
                <div className="trust-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="trust-title">Consultoria especializada</div>
                <p className="trust-text">
                  Nosso diferencial está na consultoria: auxiliamos na estratégia
                  de compras, mix de produtos e rentabilidade da sua loja de
                  motopeças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <div className="coverage" id="coverage">
        <div className="coverage-inner">
          <div className="reveal reveal-left">
            <div className="section-tag" style={{ color: "var(--gold)" }}>
              Área de atuação
            </div>
            <h2>Nordeste com <em>presença</em> de verdade</h2>
            <p className="coverage-sub">
              Representação ativa nos três estados com visitas frequentes e
              atendimento personalizado.
            </p>
            <div className="chips">
              <span className="chip"><span>📍</span> Pernambuco</span>
              <span className="chip"><span>📍</span> Paraíba</span>
              <span className="chip"><span>📍</span> Alagoas</span>
            </div>
          </div>

          <div className="area-map reveal reveal-right" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
            <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa do Nordeste com Pernambuco, Paraíba e Alagoas destacados">
              <defs>
                <linearGradient id="stateGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2f4f17" />
                  <stop offset="100%" stopColor="#1a2b0c" />
                </linearGradient>
                <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" />
                </filter>
              </defs>

              {/* Background context states */}
              <path className="map-state" d="M 40,80 L 130,75 L 145,180 L 130,310 L 60,330 L 40,260 Z" />
              <path className="map-state" d="M 130,75 L 290,65 L 360,75 L 380,175 L 350,210 L 220,215 L 145,180 Z" />
              <path className="map-state" d="M 360,75 L 470,90 L 500,135 L 490,195 L 410,205 L 380,175 Z" />
              <path className="map-state" d="M 340,400 L 395,395 L 405,455 L 360,470 L 335,440 Z" />
              <path className="map-state" d="M 60,330 L 130,310 L 220,330 L 290,360 L 340,400 L 335,440 L 360,470 L 380,535 L 280,560 L 130,545 L 50,490 L 35,400 Z" />

              {/* Active highlighted states */}
              <path className="map-state map-active" d="M 360,210 L 410,205 L 490,195 L 510,225 L 490,260 L 430,265 L 360,250 L 350,225 Z" />
              <path className="map-state map-active" d="M 145,210 L 220,215 L 350,225 L 360,250 L 430,265 L 490,260 L 495,310 L 470,335 L 350,335 L 220,325 L 130,315 L 130,275 Z" />
              <path className="map-state map-active" d="M 350,335 L 470,335 L 480,390 L 425,405 L 395,395 L 340,400 L 330,365 Z" />

              {/* Background state labels */}
              <text className="map-label" x="78" y="200" textAnchor="middle">PI</text>
              <text className="map-label" x="245" y="155" textAnchor="middle">CE</text>
              <text className="map-label" x="440" y="155" textAnchor="middle">RN</text>
              <text className="map-label" x="180" y="465" textAnchor="middle">BA</text>
              <text className="map-label" x="370" y="440" textAnchor="middle">SE</text>

              {/* Active state labels */}
              <text className="map-label map-active" x="435" y="240" textAnchor="middle">PARAÍBA</text>
              <text className="map-label map-active" x="260" y="280" textAnchor="middle">PERNAMBUCO</text>
              <text className="map-label map-active" x="410" y="375" textAnchor="middle">ALAGOAS</text>

              {/* Decorative coast line */}
              <path className="map-coast" d="M 510,100 Q 540,200 530,300 Q 520,400 480,470" />

              {/* Pin – João Pessoa, PB */}
              <g transform="translate(495, 222)">
                <circle className="pin-pulse" r="7" />
                <circle className="pin-dot-outer" r="7" />
                <circle className="pin-dot-inner" r="2.5" />
              </g>
              <text x="510" y="226" className="map-label map-active" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>João Pessoa</text>

              {/* Pin – Recife, PE */}
              <g transform="translate(490, 295)">
                <circle className="pin-pulse pin-pulse-d1" r="7" />
                <circle className="pin-dot-outer" r="7" />
                <circle className="pin-dot-inner" r="2.5" />
              </g>
              <text x="505" y="299" className="map-label map-active" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>Recife</text>

              {/* Pin – Maceió, AL */}
              <g transform="translate(465, 372)">
                <circle className="pin-pulse pin-pulse-d2" r="7" />
                <circle className="pin-dot-outer" r="7" />
                <circle className="pin-dot-inner" r="2.5" />
              </g>
              <text x="480" y="376" className="map-label map-active" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>Maceió</text>

              {/* Compass corner */}
              <g transform="translate(50, 555)">
                <text className="map-corner">NORDESTE · BR</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="final-cta" id="contact">
        <div className="section-tag reveal">Entre em contato</div>
        <h2 className="reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>Pronto para fazer um bom negócio?</h2>
        <p className="reveal" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
          Fale com Anderson Santana e descubra como a JS Representações pode
          fortalecer o estoque e as vendas da sua loja.
        </p>
        <div className="btn-group reveal" style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
          <a href="https://wa.me/5581993546117" className="btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.832L.06 23.455a.75.75 0 0 0 .914.914l5.623-1.45A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.72-.52-5.27-1.43l-.38-.22-3.34.86.86-3.34-.22-.38A9.951 9.951 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:andersonjsrepresentacoes@gmail.com"
            className="btn-secondary"
          >
            Enviar e-mail
          </a>
          <a
            href="https://www.instagram.com/js.representacaoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary btn-instagram"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          &copy; 2025 <strong>JS Representações</strong>. Todos os direitos
          reservados. Segmento de motopeças — Nordeste do Brasil.
        </p>
      </footer>
    </>
  );
}
