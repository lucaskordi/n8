'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HomePage() {
  const [activeGallery, setActiveGallery] = useState('apartamentos')
  const [activePlanta, setActivePlanta] = useState('studios-funcionais')
  const [apartmentIndex, setApartmentIndex] = useState(0)
  const [lazerIndex, setLazerIndex] = useState(0)
  const [comodidadesIndex, setComodidadesIndex] = useState(0)
  const [studiosFuncionaisIndex, setStudiosFuncionaisIndex] = useState(0)
  const [studiosLoftIndex, setStudiosLoftIndex] = useState(0)
  const [doisQuartosIndex, setDoisQuartosIndex] = useState(0)
  const [tresQuartosIndex, setTresQuartosIndex] = useState(0)

  const apartments = [
    {
      image: "/65m/grifo_ed_verus_65_sala.png",
      title: "Unidade 65 m²",
      description: "Ampla, iluminada e acolhedora: a sala perfeita para compartilhar momentos."
    },
    {
      image: "/65m/grifo_ed_verus_65_suite.png",
      title: "Unidade 65 m²",
      description: "Suíte aconchegante, iluminada e feita para relaxar com estilo."
    },
    {
      image: "/75m/grifo_ed_verus_75m2.png",
      title: "Unidade 75 m²",
      description: "Ambientes integrados, elegantes e pensados para receber com estilo."
    },
    {
      image: "/95m/grifo_ed_verus_95_sala_estar.png",
      title: "Unidade 95 m²",
      description: "Um espaço amplo e elegante para viver grandes momentos."
    },
    {
      image: "/95m/grifo_ed_verus_95_sala2.png",
      title: "Unidade 95 m²",
      description: "Convivência elevada: cozinha e jantar integrados para receber com estilo."
    },
    {
      image: "/loft/grifo_ed_verus_Loft.png",
      title: "Loft",
      description: "Loft com pé-direito duplo: amplitude e estilo em cada detalhe."
    },
    {
      image: "/studio/GRIFO_ED_VERUS_STUDIO.png",
      title: "Studio",
      description: "Um espaço versátil para viver com estilo e autenticidade."
    }
  ]

  const lazerItems = [
    {
      image: "/lazer/ED.VERUS.PISCINA.R01.png",
      title: "Piscina Climatizada",
      description: "Piscina climatizada com fundo artístico: elegância até nos detalhes"
    },
    {
      image: "/lazer/ED.VERUS.FIREPLACE.R00.png",
      title: "Fireplace",
      description: "Um espaço acolhedor para brindar momentos especiais"
    },
    {
      image: "/lazer/ED.VERUS.QUIOSQUE.png",
      title: "Quiosque",
      description: "Ambiente completo com churrasqueira e bar molhado para reunir e brindar"
    },
    {
      image: "/lazer/ED.VERUS.SOLARIUM.png",
      title: "Solário",
      description: "Solário, Jacuzzi e Champanheira: relaxamento com exclusividade"
    },
    {
      image: "/lazer/QUADRA.png",
      title: "Quadra",
      description: "Quadra para esporte, diversão e momentos em movimento"
    },
    {
      image: "/lazer/PLAYGROUND.png",
      title: "Playground",
      description: "Para brincar, crescer e se divertir com segurança"
    },
    {
      image: "/lazer/ED.VERUS.KIDS.png",
      title: "Espaço Kids",
      description: "Um universo de diversão e descobertas para os pequenos"
    },
    {
      image: "/lazer/ED.VERUS.ACADEMIA.png",
      title: "Academia",
      description: "Espaço completo para corpo em movimento e mente em equilíbrio"
    },
    {
      image: "/lazer/ED.VERUS.PET.PLACE.png",
      title: "Pet Place",
      description: "Porque viver bem também é proporcionar momentos especiais ao seu pet"
    },
    {
      image: "/lazer/ED.VERUS.PET.CARE.png",
      title: "Pet Care",
      description: "Mais do que praticidade, um cuidado especial para quem faz parte da família"
    },
    {
      image: "/lazer/ED.VERUS.BEAUTY.png",
      title: "Espaço Beauty",
      description: "Seu refúgio de cuidado e renovação dentro do Verus"
    }
  ]

  const comodidadesItems = [
    {
      image: "/comodidades/ED_VERUS_GOURMET.R00 (2).png",
      title: "EspaÇo Gourmet",
      description: "Conforto e sofisticação para celebrar bons momentos"
    },
    {
      image: "/comodidades/ED.VERUS.COZINHA.GOURMET (1).png",
      title: "Cozinha Gourmet",
      description: "Cenário ideal para receber e celebrar momentos especiais"
    },
    {
      image: "/comodidades/ED.VERUS.COWORKING (1).png",
      title: "Coworking",
      description: "Ambiente ideal para reuniões, estudos e novas ideias"
    },
    {
      image: "/comodidades/ED.VERUS.BIKE (1).png",
      title: "BicicletÁrio",
      description: "Um espaço exclusivo para guardar e cuidar da sua bike"
    },
    {
      image: "/comodidades/ED.VERUS.MARKET (1).png",
      title: "Mini Market",
      description: "Conveniência 24h dentro do seu condomínio"
    },
    {
      image: "/comodidades/ED.VERUS.LAVANDERIA (1).png",
      title: "Lavanderia",
      description: "Mais conforto, menos preocupação"
    },
    {
      image: "/comodidades/ED.VERUS.HALL (1).png",
      title: "Hall de Entrada",
      description: "Elegância e sofisticação logo na chegada"
    }
  ]

  const studiosFuncionais = [
    {
      image: "/studio funcional/studio_terraco.png",
      title: "Studio com TerraÇo",
      description: "25 m² internos + 10,25 m² externos que ampliam sua experiência de viver bem"
    },
    {
      image: "/studio funcional/studio_funcional.png",
      title: "Studio Funcional – 25 m²",
      description: "Conforto otimizado com varanda integrada ao ambiente"
    }
  ]

  const studiosLoft = [
    {
      image: "/loft com varanda/loft_varanda.png",
      title: "Loft com varanda",
      description: "Design inteligente em 25 m² e pé-direito que chega a 5,7 m, trazendo sofisticação e amplitude."
    }
  ]

  const doisQuartos = [
    {
      image: "/2qt/2qt_terraco.png",
      title: "2 Quartos e Amplo TerraÇo",
      description: "47 m² internos + 29 m² de terraço: mais conforto em cada detalhe"
    },
    {
      image: "/2qt/2qt_suite.png",
      title: "2 Quartos com SuÍte",
      description: "65 m² com suíte: o espaço ideal para receber, descansar e aproveitar a vida"
    },
    {
      image: "/2qt/2qt_suite_2.png",
      title: "2 Quartos com SuÍte",
      description: "65 m² que equilibram espaço, conforto e estilo de vida"
    }
  ]

  const tresQuartos = [
    {
      image: "/3qt/3qt_suite.png",
      title: "3 Quartos com SuÍte",
      description: "75 m² que unem espaço, privacidade e bem-estar para toda a família"
    },
    {
      image: "/3qt/3qt_2vg.png",
      title: "3 Quartos com SuÍte e 2 Vagas",
      description: "88 m² de amplitude, modernidade e praticidade para viver com mais liberdade"
    },
    {
      image: "/3qt/3qt_terraco.png",
      title: "3 Quartos com SuÍte – TerraÇo de 43 m²",
      description: "Mais que um apartamento, 131 m² no total para viver intensamente dentro e fora de casa."
    },
    {
      image: "/3qt/3qt_2vg.png",
      title: "3 Quartos com SuÍte e 2 Vagas",
      description: "95 m² planejados para oferecer amplitude, conforto e praticidade no dia a dia"
    }
  ]

  const nextApartment = () => {
    setApartmentIndex((prev) => (prev + 1) % apartments.length)
  }

  const prevApartment = () => {
    setApartmentIndex((prev) => (prev - 1 + apartments.length) % apartments.length)
  }

  const nextLazer = () => {
    setLazerIndex((prev) => (prev + 1) % lazerItems.length)
  }

  const prevLazer = () => {
    setLazerIndex((prev) => (prev - 1 + lazerItems.length) % lazerItems.length)
  }

  const nextComodidades = () => {
    setComodidadesIndex((prev) => (prev + 1) % comodidadesItems.length)
  }

  const prevComodidades = () => {
    setComodidadesIndex((prev) => (prev - 1 + comodidadesItems.length) % comodidadesItems.length)
  }

  const nextStudiosFuncionais = () => {
    setStudiosFuncionaisIndex((prev) => (prev + 1) % studiosFuncionais.length)
  }

  const prevStudiosFuncionais = () => {
    setStudiosFuncionaisIndex((prev) => (prev - 1 + studiosFuncionais.length) % studiosFuncionais.length)
  }

  const nextStudiosLoft = () => {
    setStudiosLoftIndex((prev) => (prev + 1) % studiosLoft.length)
  }

  const prevStudiosLoft = () => {
    setStudiosLoftIndex((prev) => (prev - 1 + studiosLoft.length) % studiosLoft.length)
  }

  const nextDoisQuartos = () => {
    setDoisQuartosIndex((prev) => (prev + 1) % doisQuartos.length)
  }

  const prevDoisQuartos = () => {
    setDoisQuartosIndex((prev) => (prev - 1 + doisQuartos.length) % doisQuartos.length)
  }

  const nextTresQuartos = () => {
    setTresQuartosIndex((prev) => (prev + 1) % tresQuartos.length)
  }

  const prevTresQuartos = () => {
    setTresQuartosIndex((prev) => (prev - 1 + tresQuartos.length) % tresQuartos.length)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 h-16 md:h-20">
        {/* Background Blur Effect */}
        <div 
          className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, rgba(62, 13, 17, 0.9), rgba(62, 13, 17, 0.6), rgba(62, 13, 17, 0.3), rgba(62, 13, 17, 0.1), rgba(62, 13, 17, 0))'
          }}
        ></div>
        
        {/* Header Content */}
        <div className="relative w-full px-4 md:px-[100px]">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo and Navigation Group */}
            <div className="flex items-center space-x-4 md:space-x-12">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/logo_white.svg"
                  alt="Verus Logo"
                  width={160}
                  height={52}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              
              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-4 md:space-x-6">
              <a href="#projeto" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Projeto
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#galeria" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Galeria
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#diferenciais" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Diferenciais
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#plantas" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Plantas
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#autoria" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Autoria
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#localizacao" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Localização
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#obras" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Obras
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              </nav>
            </div>
            
            {/* Contact Button */}
            <button className="bg-[#C2816B] hover:bg-[#3E0D11] text-white font-mirante font-normal px-3 md:px-6 py-2 md:py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm md:text-base">
              Entrar em Contato
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/hero_img.png"
          alt="Verus Building"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        
        {/* Hero Content */}
        <div className="absolute top-1/2 left-4 md:left-[130px] transform -translate-y-1/2 z-10 px-4 md:px-0">
          <h1 className="font-carla-sans text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight">
            A verdade em<br />
            cada detalhe
          </h1>
          <p className="font-new-black text-base md:text-lg font-normal text-white mt-4 md:mt-6 md:ml-[190px]">
          Um projeto que une autenticidade, conforto e<br>
          </br>design contemporâneo no coração de São José dos Pinhais
          </p>
          <button className="group flex items-center space-x-3 mt-4 md:mt-6 font-new-black text-base md:text-lg font-normal text-white border-2 border-white rounded-full px-4 md:px-6 py-2 md:py-3 hover:bg-[#C2816B] hover:border-[#C2816B] transition-all duration-300 md:ml-[190px]">
            <span>Saiba Mais</span>
            <div className="group-hover:rotate-45 transition-transform duration-300">
              <Image
                src="/arrow.png"
                alt="Arrow"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Projeto Section */}
      <section id="projeto" className="bg-white relative min-h-screen">
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover"
          quality={100}
        />
        
        {/* Projeto Image - Top Left Corner */}
        <div className="absolute top-[10px] left-[20px] md:left-[130px] z-50">
          <Image
            src="/projeto.png"
            alt="Projeto"
            width={900}
            height={900}
            className="w-[120px] md:w-[540px] h-auto"
          />
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20">
          
          {/* Centered Container with Image and Text */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 max-w-6xl w-full">
            {/* Building Image - Left Side */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/buildingcontact.png"
                alt="Verus Building"
                width={400}
                height={800}
                className="w-full max-w-sm lg:max-w-md h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Text Content - Right Side */}
            <div className="text-left max-w-xl flex flex-col justify-between h-full">
              <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-8">
                VERUS, ONDE A VERDADE<br />
                SE TRANSFORMA EM <span className="text-[#C2816B]">LAR.</span>
              </h2>
              
              <div className="font-new-black text-sm md:text-base font-normal text-gray-600 leading-relaxed mb-8">
                <p className="mb-6">
                O Verus foi criado para quem busca autenticidade, conforto e valorização.
Com plantas inteligentes e áreas completas de lazer e convívio, une design sofisticado, praticidade e bem-estar em um dos endereços mais desejados de São José dos Pinhais.


                </p>
                <p className="mb-8">
                Cadastre-se e receba todos os detalhes em primeira mão
                </p>
                
                {/* Contact Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                        Nome
                      </label>
                      <input 
                        type="text" 
                        placeholder="Nome*" 
                        className="w-full px-4 py-3 bg-white border border-[#E6E5EA] rounded-lg text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input 
                        type="tel" 
                        placeholder="Telefone" 
                        className="w-full px-4 py-3 bg-white border border-[#E6E5EA] rounded-lg text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input 
                        type="email" 
                        placeholder="E-mail" 
                        className="w-full px-4 py-3 bg-white border border-[#E6E5EA] rounded-lg text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#C2816B] border-[#E6E5EA] rounded focus:ring-[#C2816B]"
                    />
                    <label className="font-new-black text-sm font-normal text-gray-700">
                      Eu concordo em receber comunicações
                    </label>
                  </div>
                  
                  <p className="font-new-black text-xs font-normal text-gray-500">
                    Ao informar meus dados, estou ciente das diretrizes da <a href="#" className="underline hover:text-[#C2816B] transition-colors">Política de Privacidade</a>
                  </p>
                  
                  <button type="submit" className="group flex items-center space-x-3 mt-6 font-new-black text-base md:text-lg font-normal text-[#171715] border border-[#171715] rounded-full px-6 py-3 hover:bg-[#C2816B] hover:border-[#C2816B] hover:text-white transition-all duration-300">
                    <span>Quero Saber Mais</span>
                    <div className="group-hover:rotate-45 transition-transform duration-300">
                      <Image
                        src="/arrow.png"
                        alt="Arrow"
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-[#3E0D11] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Download Icon - Left */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-[#3E0D11]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Text - Center */}
            <div className="text-center md:text-left flex-1">
              <p className="font-new-black text-lg md:text-xl font-normal text-white flex items-center justify-center md:justify-start gap-2">
              Cadastre-se e tenha acesso ao material exclusivo do Verus. <br></br>
Descubra plantas, diferenciais e tudo o que torna este projeto único.

                <Image
                  src="/logo_white.svg"
                  alt="Verus Logo"
                  width={80}
                  height={26}
                  className="h-6 w-auto"
                  style={{ marginLeft: '20px' }}
                />
              </p>
            </div>
            
            {/* Download Button - Right */}
            <div className="flex-shrink-0">
              <button className="group flex items-center space-x-3 font-new-black text-base md:text-lg font-normal text-white border-2 border-white rounded-full px-6 py-3 hover:bg-[#C2816B] hover:border-[#C2816B] transition-all duration-300">
                <span>Baixe Agora</span>
                <div className="group-hover:rotate-45 transition-transform duration-300">
                  <Image
                    src="/arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-200">
        <div className="relative w-full bg-gray-200 overflow-hidden" style={{aspectRatio: '21/9'}}>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </div>
              <p className="text-gray-600 font-new-black text-lg">Video Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="bg-white relative py-16 md:py-24 px-6 md:px-20">
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover rotate-180"
          quality={100}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight text-center mb-8">
            SEU ESPAÇO DO<br />
            <span className="text-[#C2816B]">SEU JEITO.</span>
          </h2>

          <p className="font-new-black text-base md:text-lg font-normal text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Mais que espaços, o Verus oferece liberdade para viver cada momento do seu jeito — com conforto, lazer e praticidade em harmonia.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16">
            <button 
              onClick={() => setActiveGallery('apartamentos')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activeGallery === 'apartamentos' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              Apartamentos
            </button>
            <button 
              onClick={() => setActiveGallery('lazer')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activeGallery === 'lazer' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              Lazer e Bem-Estar
            </button>
            <button 
              onClick={() => setActiveGallery('comodidades')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activeGallery === 'comodidades' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              Comodidades
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {activeGallery === 'apartamentos' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${apartmentIndex * 100}%)` }}
                  >
                    {apartments.map((apartment, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={apartment.image}
                            alt={apartment.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevApartment}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {apartments[apartmentIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {apartments[apartmentIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextApartment}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}

            {activeGallery === 'lazer' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${lazerIndex * 100}%)` }}
                  >
                    {lazerItems.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevLazer}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {lazerItems[lazerIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {lazerItems[lazerIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextLazer}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}

            {activeGallery === 'comodidades' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${comodidadesIndex * 100}%)` }}
                  >
                    {comodidadesItems.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevComodidades}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {comodidadesItems[comodidadesIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {comodidadesItems[comodidadesIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextComodidades}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="bg-[#3E0D11] relative">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <Image
              src="/girl.png"
              alt="Verus"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex items-center py-16 px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl">
              {/* Headline */}
              <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
                Tecnologia, conforto e consciência em <span className="text-[#C2816B]">cada detalhe.</span>
              </h2>

              {/* Paragraph */}
              <p className="font-new-black text-base md:text-lg font-normal text-white leading-relaxed mb-12">
                O VERUS foi pensado para oferecer mais do que um bom lugar para viver. Ele entrega soluções modernas, sustentáveis e funcionais, que elevam a experiência de morar com praticidade, segurança e eficiência.
              </p>

              {/* Topics List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Topic 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon1.png"
                      alt="Fechadura digital"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Fechadura digital nas unidades
                  </span>
                </div>

                {/* Topic 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon2.png"
                      alt="Vídeo porteiro"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Vídeo porteiro integrado
                  </span>
                </div>

                {/* Topic 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon3.png"
                      alt="Ar-condicionado"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Infraestrutura para ar-condicionado (multi split)
                  </span>
                </div>

                {/* Topic 4 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon4.png"
                      alt="Aquecimento a gás"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Infraestrutura para aquecimento a gás
                  </span>
                </div>

                {/* Topic 5 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon5.png"
                      alt="Automação residencial"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Infraestrutura para automação residencial
                  </span>
                </div>

                {/* Topic 6 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon6.png"
                      alt="Fogão de indução"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Ponto para fogão de indução
                  </span>
                </div>

                {/* Topic 7 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon7.png"
                      alt="Forro de gesso"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Forro rebaixado em gesso em todo o apartamento
                  </span>
                </div>

                {/* Topic 8 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon8.png"
                      alt="Pé-direito"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Pé-direito de 2,50 m
                  </span>
                </div>

                {/* Topic 9 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon9.png"
                      alt="Esquadrias"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Esquadrias de alumínio de alta qualidade
                  </span>
                </div>

                {/* Topic 10 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon10.png"
                      alt="Piso laminado"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Piso laminado nos quartos
                  </span>
                </div>

                {/* Topic 11 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon11.png"
                      alt="Captação de água pluvial"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Captação de água pluvial para áreas comuns
                  </span>
                </div>

                {/* Topic 12 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon12.png"
                      alt="Energia solar"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Energia solar para abastecimento de áreas comuns
                  </span>
                </div>

                {/* Topic 13 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8">
                    <Image
                      src="/icons/icon13.png"
                      alt="Delivery box"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-white">
                    Caixa de correio com delivery box inteligente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plantas Section */}
      <section id="plantas" className="bg-white relative py-16 md:py-24 px-6 md:px-20">
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover"
          quality={100}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight text-center mb-8">
            PLANTAS DAS <span className="text-[#C2816B]">UNIDADES</span>
          </h2>

          <p className="font-new-black text-base md:text-lg font-normal text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Cada detalhe pensado para traduzir o seu estilo de vida. Descubra plantas versáteis que se adaptam aos seus sonhos
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16 flex-wrap">
            <button 
              onClick={() => setActivePlanta('studios-funcionais')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activePlanta === 'studios-funcionais' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              Studios Funcionais
            </button>
            <button 
              onClick={() => setActivePlanta('studios-loft')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activePlanta === 'studios-loft' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              Studios Tipo Loft
            </button>
            <button 
              onClick={() => setActivePlanta('02-quartos')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activePlanta === '02-quartos' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              02 Quartos
            </button>
            <button 
              onClick={() => setActivePlanta('03-quartos')}
              className={`font-mirante text-base md:text-lg font-normal border-2 border-[#3E0D11] rounded-full px-8 py-3 transition-all duration-300 w-full md:w-auto ${
                activePlanta === '03-quartos' 
                  ? 'bg-[#3E0D11] text-white' 
                  : 'bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white'
              }`}
            >
              03 Quartos
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {activePlanta === 'studios-funcionais' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${studiosFuncionaisIndex * 100}%)` }}
                  >
                    {studiosFuncionais.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevStudiosFuncionais}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {studiosFuncionais[studiosFuncionaisIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {studiosFuncionais[studiosFuncionaisIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextStudiosFuncionais}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}

            {activePlanta === 'studios-loft' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${studiosLoftIndex * 100}%)` }}
                  >
                    {studiosLoft.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevStudiosLoft}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {studiosLoft[studiosLoftIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {studiosLoft[studiosLoftIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextStudiosLoft}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}

            {activePlanta === '02-quartos' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${doisQuartosIndex * 100}%)` }}
                  >
                    {doisQuartos.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevDoisQuartos}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {doisQuartos[doisQuartosIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {doisQuartos[doisQuartosIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextDoisQuartos}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}

            {activePlanta === '03-quartos' && (
              <div>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${tresQuartosIndex * 100}%)` }}
                  >
                    {tresQuartos.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={prevTresQuartos}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowleft.png"
                      alt="Arrow Left"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>

                  <div className="flex-1 text-center">
                    <h3 className="font-carla-sans text-xl md:text-2xl font-normal text-[#C2816B] mb-2">
                      {tresQuartos[tresQuartosIndex].title}
                    </h3>
                    <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                      {tresQuartos[tresQuartosIndex].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextTresQuartos}
                    className="flex-shrink-0 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src="/arrowright.png"
                      alt="Arrow Right"
                      width={24}
                      height={24}
                      className="w-5 h-auto"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="bg-white relative py-16 md:py-24 px-6 md:px-20">
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover rotate-180"
          quality={100}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight text-center mb-8">
            VIVA NO CENTRO DE TUDO.<br />
            <span className="text-[#C2816B]">VIVA NO SEU TEMPO.</span>
          </h2>

          <p className="font-new-black text-base md:text-lg font-normal text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Viva cercado pelo que realmente importa: cultura, serviços, lazer e mobilidade.<br />
            O endereço perfeito para quem quer praticidade no dia a dia sem abrir mão de qualidade de vida.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Google Map - Left Side */}
            <div className="flex-1">
              <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6891234567!2d-49.2054321!3d-25.5326789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3d8c8c8c8c8%3A0x1234567890abcdef!2sR.%20Ver%C3%ADssimo%20Marques%2C%201753%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR%2C%2083005-410!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Location Bars - Right Side */}
            <div className="flex-1 space-y-4">
              {/* Bar 1 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[80px]">
                  <span className="font-new-black text-sm md:text-base text-white font-normal">900m</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[100px]">Shopping São José</span>
              </div>

              {/* Bar 2 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[80px]">
                  <span className="font-new-black text-sm md:text-base text-white font-normal">4,6km</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[100px]">Aeroporto Afonso Pena</span>
              </div>

              {/* Bar 3 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[80px]">
                  <span className="font-new-black text-sm md:text-base text-white font-normal">600m</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[100px]">Supermercado Festval</span>
              </div>

              {/* Bar 4 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[80px]">
                  <span className="font-new-black text-sm md:text-base text-white font-normal">450m</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[100px]">Rua XV de Novembro</span>
              </div>

              {/* Bar 5 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[80px]">
                  <span className="font-new-black text-sm md:text-base text-white font-normal">2,9km</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[100px]">Parque São José</span>
              </div>

              {/* Bar 6 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[90px]">
                  <span className="font-new-black text-sm md:text-base text-white font-normal">20 min</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[110px]">Centro de Curitiba</span>
              </div>

              {/* Bar 7 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[100px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">Próximo</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[120px]">BR 376 - Ligação Curitiba / SC</span>
              </div>

              {/* Bar 8 */}
              <div className="relative bg-[#3E0D11] rounded-full px-6 py-4 flex items-center">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-6 flex items-center justify-center min-w-[100px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">Próximo</span>
                </div>
                <span className="font-new-black text-sm md:text-base text-white font-normal ml-[120px]">Caminho do Vinho</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Divider */}
      <section className="bg-[#3E0D11] py-4 md:py-6 flex items-center justify-center">
        <Image
          src="/logo_white.svg"
          alt="Verus Logo"
          width={200}
          height={65}
          className="h-8 md:h-10 w-auto"
        />
      </section>

      {/* Sobre Section */}
      <section id="autoria" className="bg-white py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Tag */}
          <div className="flex items-center mb-8 md:mb-12">
            <div className="w-3 h-3 bg-[#C2816B] rounded-full mr-3"></div>
            <div className="border border-[#171715] rounded-full px-4 py-1">
              <span className="font-mirante text-xs text-[#171715] font-normal">SOBRE</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Side - Logo */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo_n8.png"
                  alt="N8 Incorporadora"
                  width={160}
                  height={160}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1">
              <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-8">
                A <span className="text-[#C2816B]">N8 INCORPORADORA.</span>
              </h2>

              <div className="font-new-black text-base md:text-lg font-normal text-gray-700 leading-relaxed space-y-6 mb-8">
                <p>
                  A N8 Incorporadora nasceu com o propósito de transformar espaços em lugares que fazem sentido para as pessoas. Somos movidos pelo compromisso com a excelência em cada etapa – da concepção do projeto à entrega das chaves.
                </p>
                <p>
                  Com uma atuação sólida no mercado de construção e incorporação imobiliária, desenvolvemos empreendimentos que unem arquitetura inteligente, inovação e qualidade construtiva. Buscamos ir além das expectativas, criando soluções que valorizam o bem-estar, a mobilidade e o investimento dos nossos clientes.
                </p>
                <p>
                  Mais do que construir, acreditamos em criar experiências de vida – com responsabilidade, transparência e um olhar atento ao que realmente importa: pessoas.
                </p>
              </div>

              <button className="group flex items-center space-x-3 font-new-black text-base md:text-lg font-normal text-[#171715] border border-[#E6E5EA] rounded-full px-6 py-3 hover:bg-[#C2816B] hover:border-[#C2816B] hover:text-white transition-all duration-300">
                <span>Conheça</span>
                <div className="group-hover:rotate-45 transition-transform duration-300">
                  <Image
                    src="/arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-20">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/constr.svg"
                  alt="Construção"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-base md:text-lg font-semibold text-gray-800 mb-2">
                MAIS DE <span className="text-[#C2816B]">3 MIL M²</span> CONSTRUÍDOS
              </h3>
              <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                Qualidade e solidez reconhecidas no mercado imobiliário
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/diamond.svg"
                  alt="Alto Padrão"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-base md:text-lg font-semibold text-gray-800 mb-2">
                ACABAMENTOS DE <span className="text-[#C2816B]">ALTO PADRÃO</span>
              </h3>
              <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                Detalhes sofisticados que valorizam cada ambiente
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/sust.svg"
                  alt="Sustentabilidade"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-base md:text-lg font-semibold text-gray-800 mb-2">
                <span className="text-[#C2816B]">SUSTENTABILIDADE</span> EM FOCO
              </h3>
              <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                Tecnologias que reduzem impacto e otimizam recursos
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/valor.svg"
                  alt="Valorização"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-base md:text-lg font-semibold text-gray-800 mb-2">
                ALTO POTENCIAL DE <span className="text-[#C2816B]">VALORIZAÇÃO</span>
              </h3>
              <p className="font-new-black text-sm md:text-base font-normal text-gray-600">
                Planejados para valorizar: localização e arquitetura com retorno seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grifo Arquitetura Section */}
      <section className="bg-gray-100 relative py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Tag */}
          <div className="flex items-center mb-8 md:mb-12">
            <div className="w-3 h-3 bg-[#C2816B] rounded-full mr-3"></div>
            <div className="border border-[#171715] rounded-full px-4 py-1">
              <span className="font-mirante text-xs text-[#171715] font-normal">SOBRE</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Side - Grifo Logo */}
            <div className="flex-shrink-0 lg:w-1/3">
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/logo_grifo.svg"
                  alt="Grifo Arquitetura"
                  width={200}
                  height={200}
                  className="w-40 h-40 md:w-48 md:h-48 object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 lg:w-2/3">
              <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-8">
                ARQUITETURA COM<br />
                <span className="text-[#C2816B]">IDENTIDADE LOCAL E</span><br />
                <span className="text-[#C2816B]">VISÃO CONTEMPORÂNEA</span>
              </h2>

              <div className="font-new-black text-base md:text-lg font-normal text-gray-700 leading-relaxed space-y-6 mb-8">
                <p>
                  O projeto Verus é da Grifo Arquitetura. Unimos tradição e contemporaneidade com uma abordagem crítica, funcional e conectada à cidade. Fundada em 2008 pelos arquitetos Fabio, Igor e Suzanna, focamos em projetos autorais que valorizam a experiência urbana e as raízes locais, entregando arquitetura com propósito, autenticidade e significado.
                </p>
              </div>

              <div className="space-y-4">
                <blockquote className="font-new-black text-base md:text-lg font-normal text-gray-700 italic">
                  "Projetamos para pessoas reais, em lugares reais."
                </blockquote>
                <p className="font-new-black text-base md:text-lg font-normal text-gray-700">
                  Grifo Arquitetura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider with Text */}
      <section className="relative">
        <Image
          src="/divider.png"
          alt="Divider"
          width={1920}
          height={400}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center leading-tight">
            SEU ESPAÇO<br />
            DO SEU JEITO.
          </h2>
        </div>
      </section>

      {/* Obra Section */}
      <section id="obras" className="bg-white py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-4">
            ESTÁGIO DA <span className="text-[#C2816B]">OBRA.</span>
          </h2>
          
          <p className="font-new-black text-base md:text-lg font-normal text-gray-600 mb-12">
            Atualizado Outubro de 2025.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Side - Progress Bars */}
            <div className="flex-1 space-y-6">
              {/* Progress Bar 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Fundação e Estrutura</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              {/* Progress Bar 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Alvenaria e Vedação</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>

              {/* Progress Bar 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Instalações Elétricas</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '68%'}}></div>
                </div>
              </div>

              {/* Progress Bar 4 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Instalações Hidráulicas</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">55%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '55%'}}></div>
                </div>
              </div>

              {/* Progress Bar 5 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Acabamentos Internos</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '42%'}}></div>
                </div>
              </div>

              {/* Progress Bar 6 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Acabamentos Externos</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">38%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '38%'}}></div>
                </div>
              </div>

              {/* Progress Bar 7 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Paisagismo</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>

              {/* Progress Bar 8 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">Entrega Final</span>
                  <span className="font-new-black text-sm md:text-base font-normal text-gray-700">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#3E0D11] h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>

              {/* Paragraph below progress bars */}
              <div className="mt-8">
                <p className="font-new-black text-base md:text-lg font-normal text-gray-600 leading-relaxed text-left">
                  Cada etapa da obra revela um novo capítulo da história do Verus.<br />
                  Acompanhe o progresso e veja o futuro tomando forma diante dos seus olhos.
                </p>
              </div>
            </div>

            {/* Right Side - Building Image */}
            <div className="flex-1">
              <Image
                src="/predio2.png"
                alt="Verus Building Construction"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information Bar */}
      <section className="bg-gray-50 py-8 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo_n8.png"
                alt="N8 Incorporadora"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="font-new-black text-sm md:text-base font-normal text-[#171715]">Fale pelo</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#171715]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-[#171715]">WhatsApp</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:ml-8">
                <span className="font-new-black text-sm md:text-base font-normal text-[#171715]">Telefone</span>
                <span className="font-new-black text-sm md:text-base font-normal text-[#171715]">41 9 9718-8421</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#171715] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#171715]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              
              <div className="w-10 h-10 border border-[#171715] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#171715]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                </svg>
              </div>
              
              <div className="w-10 h-10 border border-[#171715] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#171715]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <Image
          src="/footerbg.png"
          alt="Footer Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        
        <div className="relative z-10 py-16 md:py-20 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Verus Logo */}
            <div className="mb-12">
              <Image
                src="/logo_white.svg"
                alt="Verus Logo"
                width={200}
                height={65}
                className="h-12 md:h-14 w-auto mx-auto"
              />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
              <a href="#projeto" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Projeto
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#galeria" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Galeria
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#diferenciais" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Diferenciais
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#plantas" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Plantas
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#autoria" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Autoria
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#localizacao" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Localização
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a href="#obras" className="font-mirante text-white font-normal relative group text-sm md:text-base">
                Obras
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            </nav>

            {/* Contact Button */}
            <button className="bg-[#C2816B] hover:bg-[#3E0D11] text-white font-mirante font-normal px-6 md:px-8 py-3 md:py-4 rounded-full hover:scale-105 transition-all duration-300 text-sm md:text-base">
              Entrar em Contato
            </button>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        aria-label="Voltar ao topo"
      >
        <Image
          src="/arrowup.png"
          alt="Arrow Up"
          width={24}
          height={24}
          className="w-5 h-auto"
        />
      </button>
    </main>
  )
}