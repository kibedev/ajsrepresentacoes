"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CountUp from "./CountUp";

interface Brand {
  src: string;
  alt: string;
  cat: string;
  desc: string;
  tags: string[];
}

const brands: Brand[] = [
  {
    src: "/parceiros/rinaldi.png", alt: "Rinaldi", cat: "Pneus",
    desc: "Um dos maiores fabricantes brasileiros de pneus para motocicletas. Linha completa para uso urbano, trail e alta performance — qualidade reconhecida em todo o país.",
    tags: ["Pneus de moto", "Linha completa", "Fabricação nacional"],
  },
  {
    src: "/parceiros/delta.png", alt: "Delta", cat: "Capas de Chuva",
    desc: "Especialista em capas de chuva para motociclistas, com modelos desenvolvidos para proteção real contra intempéries, durabilidade e praticidade no dia a dia.",
    tags: ["Capas de chuva", "Proteção", "Motociclistas"],
  },
  {
    src: "/parceiros/control.png", alt: "Control Seals", cat: "Retentores e Vedações",
    desc: "Especialista em retentores e sistemas de vedação para motores e suspensões, garantindo proteção contra vazamentos e maior vida útil dos componentes.",
    tags: ["Retentores", "Vedações", "Suspensão"],
  },
  {
    src: "/parceiros/rafaela.png", alt: "FAR Rafaela", cat: "Amortecedores",
    desc: "Amortecedores e componentes de suspensão para motocicletas, oferecendo estabilidade, conforto e segurança em diferentes condições de pilotagem.",
    tags: ["Amortecedores", "Suspensão", "Conforto"],
  },
  {
    src: "/parceiros/ebf.png", alt: "EBF Helmets", cat: "Capacetes",
    desc: "Capacetes desenvolvidos com tecnologia e design, unindo segurança certificada e estilo para o motociclista exigente.",
    tags: ["Capacetes", "Segurança", "Certificado"],
  },
  {
    src: "/parceiros/stallion.png", alt: "Stallion", cat: "Moto Peças",
    desc: "Linha ampla de peças e acessórios para motos, atendendo desde a manutenção básica até a personalização, com bom custo-benefício.",
    tags: ["Moto peças", "Acessórios", "Custo-benefício"],
  },
  {
    src: "/parceiros/coyote.png", alt: "Coyote", cat: "Acessórios",
    desc: "Acessórios e itens de performance para o universo das duas rodas, com identidade forte e foco no público que busca atitude e estilo.",
    tags: ["Acessórios", "Performance", "Estilo"],
  },
  {
    src: "/parceiros/circuit.png", alt: "Circuit Equipment", cat: "Equipamentos",
    desc: "Equipamentos e acessórios para pilotagem, desenvolvidos para oferecer proteção e desempenho dentro e fora das pistas.",
    tags: ["Equipamentos", "Proteção", "Performance"],
  },
  {
    src: "/parceiros/renascenca.png", alt: "Renascença", cat: "Retrovisores",
    desc: "Retrovisores projetados para sua segurança, com qualidade comprovada e ampla gama de modelos para diferentes motocicletas.",
    tags: ["Retrovisores", "Segurança", "Qualidade"],
  },
  {
    src: "/parceiros/zouil.png", alt: "Zouil", cat: "Acessórios",
    desc: "Acessórios e itens de reposição para motos, combinando praticidade e qualidade para o dia a dia do lojista e do motociclista.",
    tags: ["Acessórios", "Reposição", "Praticidade"],
  },
];

export default function MarcasGrid() {
  const [active, setActive] = useState<Brand | null>(null);
  // Keep last brand in ref so panel content stays rendered during fade-out transition
  const lastBrand = useRef<Brand | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (active) lastBrand.current = active;

  function openBrand(brand: Brand) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(brand);
  }

  function scheduleClose() {
    timerRef.current = setTimeout(() => setActive(null), 120);
  }

  function cancelClose() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <>
      <div
        className={`marcas-grid-wrap${active ? " is-open" : ""}`}
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <div className="marcas-grid">
          {brands.map((brand) => (
            <div
              key={brand.alt}
              className={`marca-card${active?.alt === brand.alt ? " is-active" : ""}`}
              onMouseEnter={() => openBrand(brand)}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <div className="marca-detail" aria-hidden={active ? "false" : "true"}>
          <div className="detail-logo">
            {lastBrand.current && (
              <img
                src={lastBrand.current.src}
                alt={lastBrand.current.alt}
                className="detail-logo-img"
              />
            )}
          </div>
          <div className="detail-info">
            {lastBrand.current && (
              <>
                <div className="detail-cat">{lastBrand.current.cat}</div>
                <h3 className="detail-name">{lastBrand.current.alt}</h3>
                <p className="detail-desc">{lastBrand.current.desc}</p>
                <div className="detail-tags">
                  {lastBrand.current.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="marcas-footer">
        <div className="marcas-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
            </div>
            <div className="stat-num"><CountUp end={10} suffix="+" /></div>
            <div className="stat-label">Marcas representadas</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="stat-num"><CountUp end={3} /></div>
            <div className="stat-label">Estados de atuação</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M8 14l-2 6 6-2 6 2-2-6"/>
              </svg>
            </div>
            <div className="stat-num"><CountUp end={18} suffix="+" /></div>
            <div className="stat-label">Anos de experiência</div>
          </div>
        </div>
        <a href="#contact" className="marcas-cta">
          Fale com a gente
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </>
  );
}
