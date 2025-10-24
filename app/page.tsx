"use client";

import { Header } from "@/components/header";
import { TagLayer } from "@/components/tag-layer";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedProgressBar } from "@/components/animated-progress-bar";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

export default function HomePage() {
  const [activeGallery, setActiveGallery] = useState("apartamentos");
  const [activePlanta, setActivePlanta] = useState("studios-funcionais");
  const [apartmentIndex, setApartmentIndex] = useState(0);
  const [lazerIndex, setLazerIndex] = useState(0);
  const [comodidadesIndex, setComodidadesIndex] = useState(0);
  const [studiosFuncionaisIndex, setStudiosFuncionaisIndex] = useState(0);
  const [studiosLoftIndex, setStudiosLoftIndex] = useState(0);
  const [doisQuartosIndex, setDoisQuartosIndex] = useState(0);
  const [tresQuartosIndex, setTresQuartosIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageGallery, setCurrentImageGallery] = useState<
    | "apartamentos"
    | "lazer"
    | "comodidades"
    | "studios-funcionais"
    | "studios-loft"
    | "dois-quartos"
    | "tres-quartos"
  >("apartamentos");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  const apartments = useMemo(
    () => [
      {
        image: "/65m/grifo_ed_verus_65_sala.png",
        title: "Unidade 65 m²",
        description:
          "Ampla, iluminada e acolhedora: a sala perfeita para compartilhar momentos.",
      },
      {
        image: "/65m/grifo_ed_verus_65_suite.png",
        title: "Unidade 65 m²",
        description:
          "Suíte aconchegante, iluminada e feita para relaxar com estilo.",
      },
      {
        image: "/75m/grifo_ed_verus_75m2.png",
        title: "Unidade 75 m²",
        description:
          "Ambientes integrados, elegantes e pensados para receber com estilo.",
      },
      {
        image: "/95m/grifo_ed_verus_95_sala_estar.png",
        title: "Unidade 95 m²",
        description: "Um espaço amplo e elegante para viver grandes momentos.",
      },
      {
        image: "/95m/grifo_ed_verus_95_sala2.png",
        title: "Unidade 95 m²",
        description:
          "Convivência elevada: cozinha e jantar integrados para receber com estilo.",
      },
      {
        image: "/loft/grifo_ed_verus_Loft.png",
        title: "Loft",
        description:
          "Loft com pé-direito duplo: amplitude e estilo em cada detalhe.",
      },
      {
        image: "/studio/GRIFO_ED_VERUS_STUDIO.png",
        title: "Studio",
        description:
          "Um espaço versátil para viver com estilo e autenticidade.",
      },
    ],
    []
  );

  const lazerItems = useMemo(
    () => [
      {
        image: "/lazer/ED.VERUS.PISCINA.R01.png",
        title: "Piscina Climatizada",
        description:
          "Piscina climatizada com fundo artístico: elegância até nos detalhes",
      },
      {
        image: "/lazer/ED.VERUS.FIREPLACE.R00.png",
        title: "Fireplace",
        description: "Um espaço acolhedor para brindar momentos especiais",
      },
      {
        image: "/lazer/ED.VERUS.QUIOSQUE.png",
        title: "Quiosque",
        description:
          "Ambiente completo com churrasqueira e bar molhado para reunir e brindar",
      },
      {
        image: "/lazer/ED.VERUS.SOLARIUM.png",
        title: "SolÁrio",
        description:
          "Solário, Jacuzzi e Champanheira: relaxamento com exclusividade",
      },
      {
        image: "/lazer/QUADRA.png",
        title: "Quadra",
        description: "Quadra para esporte, diversão e momentos em movimento",
      },
      {
        image: "/lazer/PLAYGROUND.png",
        title: "Playground",
        description: "Para brincar, crescer e se divertir com segurança",
      },
      {
        image: "/lazer/ED.VERUS.KIDS.png",
        title: "Espaço Kids",
        description: "Um universo de diversão e descobertas para os pequenos",
      },
      {
        image: "/lazer/ED.VERUS.ACADEMIA.png",
        title: "Academia",
        description:
          "Espaço completo para corpo em movimento e mente em equilÍbrio",
      },
      {
        image: "/lazer/ED.VERUS.PET.PLACE.png",
        title: "Pet Place",
        description:
          "Porque viver bem também é proporcionar momentos especiais ao seu pet",
      },
      {
        image: "/lazer/ED.VERUS.PET.CARE.png",
        title: "Pet Care",
        description:
          "Mais do que praticidade, um cuidado especial para quem faz parte da família",
      },
      {
        image: "/lazer/ED.VERUS.BEAUTY.png",
        title: "Espaço Beauty",
        description: "Seu refúgio de cuidado e renovação dentro do Verus",
      },
    ],
    []
  );

  const comodidadesItems = useMemo(
    () => [
      {
        image: "/comodidades/ED_VERUS_GOURMET.R00 (2).png",
        title: "EspaÇo Gourmet",
        description: "Conforto e sofisticação para celebrar bons momentos",
      },
      {
        image: "/comodidades/ED.VERUS.COZINHA.GOURMET (1).png",
        title: "Cozinha Gourmet",
        description: "Cenário ideal para receber e celebrar momentos especiais",
      },
      {
        image: "/comodidades/ED.VERUS.COWORKING (1).png",
        title: "Coworking",
        description: "Ambiente ideal para reuniões, estudos e novas ideias",
      },
      {
        image: "/comodidades/ED.VERUS.BIKE (1).png",
        title: "BicicletÁrio",
        description: "Um espaço exclusivo para guardar e cuidar da sua bike",
      },
      {
        image: "/comodidades/ED.VERUS.MARKET (1).png",
        title: "Mini Market",
        description: "Conveniência 24h dentro do seu condomínio",
      },
      {
        image: "/comodidades/ED.VERUS.LAVANDERIA (1).png",
        title: "Lavanderia",
        description: "Mais conforto, menos preocupação",
      },
      {
        image: "/comodidades/ED.VERUS.HALL (1).png",
        title: "Hall de Entrada",
        description: "Elegância e sofisticação logo na chegada",
      },
    ],
    []
  );

  const studiosFuncionais = useMemo(
    () => [
      {
        image: "/studio funcional/studio_terraco.png",
        title: "Studio com TerraÇo",
        description:
          "25 m² internos + 10,25 m² externos que ampliam sua experiência de viver bem",
      },
      {
        image: "/studio funcional/studio_funcional.png",
        title: "Studio Funcional – 25 m²",
        description: "Conforto otimizado com varanda integrada ao ambiente",
      },
    ],
    []
  );

  const studiosLoft = useMemo(
    () => [
      {
        image: "/loft com varanda/loft_varanda.png",
        title: "Loft com varanda",
        description:
          "Design inteligente em 25 m² e pé-direito que chega a 5,7 m, trazendo sofisticação e amplitude.",
      },
    ],
    []
  );

  const doisQuartos = useMemo(
    () => [
      {
        image: "/2qt/2qt_terraco.png",
        title: "2 Quartos e Amplo TerraÇo",
        description:
          "47 m² internos + 29 m² de terraço: mais conforto em cada detalhe",
      },
      {
        image: "/2qt/2qt_suite.png",
        title: "2 Quartos com SuÍte",
        description:
          "65 m² com suíte: o espaço ideal para receber, descansar e aproveitar a vida",
      },
      {
        image: "/2qt/2qt_suite_2.png",
        title: "2 Quartos com SuÍte",
        description: "65 m² que equilibram espaço, conforto e estilo de vida",
      },
    ],
    []
  );

  const tresQuartos = useMemo(
    () => [
      {
        image: "/3qt/3qt_suite.png",
        title: "3 Quartos com SuÍte",
        description:
          "75 m² que unem espaço, privacidade e bem-estar para toda a família",
      },
      {
        image: "/3qt/3qt_2vg.png",
        title: "3 Quartos com SuÍte e 2 Vagas",
        description:
          "88 m² de amplitude, modernidade e praticidade para viver com mais liberdade",
      },
      {
        image: "/3qt/3qt_terraco.png",
        title: "3 Quartos com SuÍte – TerraÇo de 43 m²",
        description:
          "Mais que um apartamento, 131 m² no total para viver intensamente dentro e fora de casa.",
      },
      {
        image: "/3qt/3qt_2vg.png",
        title: "3 Quartos com SuÍte e 2 Vagas",
        description:
          "95 m² planejados para oferecer amplitude, conforto e praticidade no dia a dia",
      },
    ],
    []
  );

  const nextApartment = () => {
    setApartmentIndex((prev) => (prev + 1) % apartments.length);
  };

  const prevApartment = () => {
    setApartmentIndex(
      (prev) => (prev - 1 + apartments.length) % apartments.length
    );
  };

  const nextLazer = () => {
    setLazerIndex((prev) => (prev + 1) % lazerItems.length);
  };

  const prevLazer = () => {
    setLazerIndex((prev) => (prev - 1 + lazerItems.length) % lazerItems.length);
  };

  const nextComodidades = () => {
    setComodidadesIndex((prev) => (prev + 1) % comodidadesItems.length);
  };

  const prevComodidades = () => {
    setComodidadesIndex(
      (prev) => (prev - 1 + comodidadesItems.length) % comodidadesItems.length
    );
  };

  const nextStudiosFuncionais = () => {
    setStudiosFuncionaisIndex((prev) => (prev + 1) % studiosFuncionais.length);
  };

  const prevStudiosFuncionais = () => {
    setStudiosFuncionaisIndex(
      (prev) => (prev - 1 + studiosFuncionais.length) % studiosFuncionais.length
    );
  };

  const nextStudiosLoft = () => {
    setStudiosLoftIndex((prev) => (prev + 1) % studiosLoft.length);
  };

  const prevStudiosLoft = () => {
    setStudiosLoftIndex(
      (prev) => (prev - 1 + studiosLoft.length) % studiosLoft.length
    );
  };

  const nextDoisQuartos = () => {
    setDoisQuartosIndex((prev) => (prev + 1) % doisQuartos.length);
  };

  const prevDoisQuartos = () => {
    setDoisQuartosIndex(
      (prev) => (prev - 1 + doisQuartos.length) % doisQuartos.length
    );
  };

  const nextTresQuartos = () => {
    setTresQuartosIndex((prev) => (prev + 1) % tresQuartos.length);
  };

  const prevTresQuartos = () => {
    setTresQuartosIndex(
      (prev) => (prev - 1 + tresQuartos.length) % tresQuartos.length
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openImageModal = (
    gallery:
      | "apartamentos"
      | "lazer"
      | "comodidades"
      | "studios-funcionais"
      | "studios-loft"
      | "dois-quartos"
      | "tres-quartos",
    index: number
  ) => {
    setCurrentImageGallery(gallery);
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const nextImageInModal = useCallback(() => {
    const galleries = {
      apartamentos: apartments,
      lazer: lazerItems,
      comodidades: comodidadesItems,
      "studios-funcionais": studiosFuncionais,
      "studios-loft": studiosLoft,
      "dois-quartos": doisQuartos,
      "tres-quartos": tresQuartos,
    };
    const currentGallery = galleries[currentImageGallery];
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  }, [
    currentImageGallery,
    apartments,
    lazerItems,
    comodidadesItems,
    studiosFuncionais,
    studiosLoft,
    doisQuartos,
    tresQuartos,
  ]);

  const prevImageInModal = useCallback(() => {
    const galleries = {
      apartamentos: apartments,
      lazer: lazerItems,
      comodidades: comodidadesItems,
      "studios-funcionais": studiosFuncionais,
      "studios-loft": studiosLoft,
      "dois-quartos": doisQuartos,
      "tres-quartos": tresQuartos,
    };
    const currentGallery = galleries[currentImageGallery];
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentGallery.length) % currentGallery.length
    );
  }, [
    currentImageGallery,
    apartments,
    lazerItems,
    comodidadesItems,
    studiosFuncionais,
    studiosLoft,
    doisQuartos,
    tresQuartos,
  ]);

  const getCurrentImageData = () => {
    const galleries = {
      apartamentos: apartments,
      lazer: lazerItems,
      comodidades: comodidadesItems,
      "studios-funcionais": studiosFuncionais,
      "studios-loft": studiosLoft,
      "dois-quartos": doisQuartos,
      "tres-quartos": tresQuartos,
    };
    return galleries[currentImageGallery][currentImageIndex];
  };

  useEffect(() => {
    if (isModalOpen || imageModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, imageModalOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (imageModalOpen) {
          setImageModalOpen(false);
        } else if (isModalOpen) {
          setIsModalOpen(false);
        }
      }
      if (imageModalOpen) {
        if (e.key === "ArrowRight") {
          nextImageInModal();
        } else if (e.key === "ArrowLeft") {
          prevImageInModal();
        }
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, imageModalOpen, nextImageInModal, prevImageInModal]);

  useEffect(() => {
    const preloadImages = () => {
      const allImages = [
        ...apartments.map((item) => item.image),
        ...lazerItems.map((item) => item.image),
        ...comodidadesItems.map((item) => item.image),
        ...studiosFuncionais.map((item) => item.image),
        ...studiosLoft.map((item) => item.image),
        ...doisQuartos.map((item) => item.image),
        ...tresQuartos.map((item) => item.image),
        "/hero_img.png",
        "/buildingcontact.png",
        "/lazer/ED.VERUS.PISCINA.R01.png",
        "/girl.png",
        "/predio2.png",
        "/divider.png",
        "/footerbg.png",
        "/SHADOWUPLEFT.png",
        "/logo_white.svg",
        "/logo_n8.png",
        "/logo_grifo.svg",
        "/arrow.png",
        "/arrowleft.png",
        "/arrowright.png",
        "/arrowup.png",
      ];

      let loadedCount = 0;
      const totalImages = allImages.length;

      allImages.forEach((src) => {
        const img = new window.Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesPreloaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesPreloaded(true);
          }
        };
        img.src = src;
      });
    };

    const timer = setTimeout(() => {
      preloadImages();
    }, 100);

    return () => clearTimeout(timer);
  }, [
    apartments,
    lazerItems,
    comodidadesItems,
    studiosFuncionais,
    studiosLoft,
    doisQuartos,
    tresQuartos,
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

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
          <AnimatedSection animation="fade-in-up" delay={200}>
            <h1 className="font-carla-sans text-4xl  lg:text-8xl font-light text-white leading-tight">
              A verdade em
              <br />
              cada detalhe
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={400}>
            <p className="font-new-black text-base md:text-lg font-normal text-white mt-4 md:mt-6 md:text-start md:flex md:justify-center md:items-center">
              Um projeto que une autenticidade, conforto e<br></br>design
              contemporâneo no coração de São José dos Pinhais
            </p>
          </AnimatedSection>
          <AnimatedSection
            animation="fade-in-up"
            delay={600}
            className="md:flex md:justify-start md:items-start md:ml-[100px]"
          >
            <button
              onClick={() => scrollToSection("projeto")}
              className="group flex items-center space-x-3 mt-4 md:mt-6 font-new-black text-base md:text-lg font-normal text-white border-2 border-white rounded-full px-4 md:px-6 py-2  hover:bg-[#C2816B] hover:border-[#C2816B] transition-all duration-300"
            >
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
          </AnimatedSection>
        </div>
      </div>

      {/* Projeto Section */}
      <section
        id="projeto"
        className="bg-white relative min-h-screen py-16 md:py-24 overflow-hidden"
      >
        <TagLayer title="PROJETO" />

        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Projeto Image - Top Left Corner */}

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20">
          {/* Centered Container with Image and Text */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8  max-w-6xl w-full">
            {/* Building Image - Left Side */}
            <AnimatedSection animation="slide-in-left">
              <div className="flex justify-center lg:min-w-[600px]">
                <Image
                  src="/buildingcontact.png"
                  alt="Verus Building"
                  width={400}
                  height={800}
                  className="w-full max-w-sm lg:max-w-lg h-full object-cover rounded-lg"
                />
              </div>
            </AnimatedSection>

            {/* Text Content - Right Side */}
            <div className="text-left max-w-xl flex flex-col justify-between h-full">
              <AnimatedSection animation="fade-in-up">
                <div className="lg:absolute lg:max-w-[576px] lg:-left-28 lg:top-10 lg:max-h-[200px]">
                  <h2 className="font-carla-sans text-3xl lg:text-2xl xl:text-4xl md:mt-2 font-normal text-gray-800 leading-tight mb-4 ">
                    VERUS, ONDE A VERDADE
                    <br />
                    SE TRANSFORMA EM{" "}
                    <span className="text-[#C2816B]">LAR.</span>
                  </h2>
                  <div className="font-new-black text-sm lg:text-sm xl:text-base font-normal text-gray-600 leading-relaxed mb-8 ">
                    <p className="mb-2">
                      O Verus foi criado para quem busca autenticidade, conforto
                      e valorização. Com plantas inteligentes e áreas completas
                      de lazer e convívio, une design sofisticado, praticidade e
                      bem-estar em um dos endereços mais desejados de São José
                      dos Pinhais.
                    </p>

                    {/* Contact Form */}
                  </div>
                </div>
              </AnimatedSection>

              <div className="min-h-[252px] xl:min-h-[272px] bg-none w-full hidden lg:block"></div>
              <div className="flex flex-col justify-end h-full max-w-[calc(520px-56px)]">
                <p className="font-new-black text-sm lg:text-sm font-normal text-gray-600 leading-relaxed mb-4">
                  Cadastre-se e receba todos os detalhes em primeira mão
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="Nome*"
                        className="w-full px-4 py-1 bg-white border border-[#E6E5EA] rounded-lg text-gray-900 placeholder:text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        placeholder="Telefone"
                        className="w-full px-4 py-1 bg-white border border-[#E6E5EA] rounded-lg text-gray-900 placeholder:text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full px-4 py-1 bg-white border border-[#E6E5EA] rounded-lg text-gray-900 placeholder:text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
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
                    Ao informar meus dados, estou ciente das diretrizes da{" "}
                    <a
                      href="#"
                      className="underline hover:text-[#C2816B] transition-colors"
                    >
                      Política de Privacidade
                    </a>
                  </p>

                  <button
                    type="submit"
                    className="group flex items-center space-x-3 mt-6 font-new-black text-base md:text-lg font-normal text-[#171715] border border-[#171715] rounded-full px-6 py-3 hover:bg-[#C2816B] hover:border-[#C2816B] hover:text-white transition-all duration-300"
                  >
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
                <svg
                  className="w-12 h-12 text-[#3E0D11]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Text - Center */}
            <div className="text-center md:text-left flex-1">
              <p className="font-new-black text-lg md:text-xl font-normal text-white text-center md:text-left">
                Cadastre-se e tenha acesso ao material exclusivo do Verus.
                <br className="md:hidden" />
                Descubra plantas, diferenciais e tudo o que torna este projeto
                único.
              </p>
            </div>

            {/* Download Button - Right */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center space-x-3 font-new-black text-base md:text-lg font-normal text-white border-2 border-white rounded-full px-6 py-3 hover:bg-[#C2816B] hover:border-[#C2816B] transition-all duration-300"
              >
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

      {/* Lazer Section */}
      <section className="relative">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "21/9" }}
        >
          <Image
            src="/lazer/ED.VERUS.PISCINA.R01.png"
            alt="Piscina climatizada Verus"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center px-6 md:px-20">
                <h2 className="font-carla-sans text-2xl md:text-4xl lg:text-6xl font-normal text-white leading-tight">
                  Piscina climatizada com hidromassagem e academia para corpo e
                  mente em equilÍbrio.
                </h2>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section
        id="galeria"
        className="bg-white relative py-16 md:py-24 px-4 md:px-6 lg:px-20 overflow-hidden"
      >
        <TagLayer title="FOTOS">
          <AnimatedSection animation="fade-in-up">
            <div className="flex justify-center items-center">
              <div className="">
                <div className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-6">
                  <div>SEU ESPAÇO DO</div>
                  <span className="text-[#C2816B]">SEU JEITO.</span>
                </div>
                <AnimatedSection animation="fade-in-up" delay={200}>
                  <p className="font-new-black text-base md:text-lg font-normal text-gray-600 max-w-3xl  mb-6">
                    Mais que espaços, o Verus oferece liberdade para viver cada
                    momento do seu jeito — com conforto, lazer e praticidade em
                    harmonia.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </TagLayer>
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover rotate-180"
          quality={100}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="bg-none h-[244px] hidden lg:block"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16 w-full max-w-full">
            <button
              onClick={() => setActiveGallery("apartamentos")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 transition-all duration-300 w-full md:w-auto max-w-full ${
                activeGallery === "apartamentos"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              Apartamentos
            </button>
            <button
              onClick={() => setActiveGallery("lazer")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 transition-all duration-300 w-full md:w-auto max-w-full ${
                activeGallery === "lazer"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              Lazer e Bem-Estar
            </button>
            <button
              onClick={() => setActiveGallery("comodidades")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 transition-all duration-300 w-full md:w-auto max-w-full ${
                activeGallery === "comodidades"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              Comodidades
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto w-full overflow-hidden">
            {activeGallery === "apartamentos" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${apartmentIndex * 100}%)`,
                    }}
                  >
                    {apartments.map((apartment, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() => openImageModal("apartamentos", index)}
                          className="bg-gray-200 rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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

            {activeGallery === "lazer" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${lazerIndex * 100}%)` }}
                  >
                    {lazerItems.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() => openImageModal("lazer", index)}
                          className="bg-gray-200 rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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

            {activeGallery === "comodidades" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${comodidadesIndex * 100}%)`,
                    }}
                  >
                    {comodidadesItems.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() => openImageModal("comodidades", index)}
                          className="bg-gray-200 rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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
      <section id="diferenciais" className="bg-[#3E0D11] relative py-0 md:py-0">
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
              <AnimatedSection animation="fade-in-up">
                <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
                  Tecnologia, conforto e consciência em{" "}
                  <span className="text-[#C2816B]">cada detalhe.</span>
                </h2>
              </AnimatedSection>

              {/* Paragraph */}
              <AnimatedSection animation="fade-in-up" delay={200}>
                <p className="font-new-black text-base md:text-lg font-normal text-white leading-relaxed mb-12">
                  O VERUS foi pensado para oferecer mais do que um bom lugar
                  para viver. Ele entrega soluções modernas, sustentáveis e
                  funcionais, que elevam a experiência de morar com praticidade,
                  segurança e eficiência.
                </p>
              </AnimatedSection>

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
      <section
        id="plantas"
        className="bg-white relative py-16 md:py-24 px-4 md:px-6 lg:px-20 overflow-hidden"
      >
        <TagLayer title="PLANTAS">
          <AnimatedSection animation="fade-in-up">
            <div className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight text-center mb-4 flex justify-center items-start flex-col ">
              <div className="text-start">
                <div>PLANTAS DAS</div>{" "}
                <span className="text-[#C2816B]">UNIDADES</span>
              </div>
            </div>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="font-new-black text-base md:text-lg font-normal text-gray-600 text-start max-w-3xl  mb-12">
                Cada detalhe pensado para traduzir o seu estilo de vida.
                Descubra plantas versáteis que se adaptam aos seus sonhos
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </TagLayer>
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover"
          quality={100}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="w-full bg-none h-[244px] hidden lg:block"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4 flex-wrap w-full max-w-full">
            <button
              onClick={() => setActivePlanta("studios-funcionais")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 py-2 md:py-3 transition-all duration-300 w-full md:w-auto max-w-full ${
                activePlanta === "studios-funcionais"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              Studios Funcionais
            </button>
            <button
              onClick={() => setActivePlanta("studios-loft")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 py-2 md:py-3 transition-all duration-300 w-full md:w-auto max-w-full ${
                activePlanta === "studios-loft"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              Studios Tipo Loft
            </button>
            <button
              onClick={() => setActivePlanta("02-quartos")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 py-2 md:py-3 transition-all duration-300 w-full md:w-auto max-w-full ${
                activePlanta === "02-quartos"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              02 Quartos
            </button>
            <button
              onClick={() => setActivePlanta("03-quartos")}
              className={`font-mirante text-sm md:text-base font-normal border-2 border-[#3E0D11] rounded-full px-4 md:px-8 py-2 md:py-3 transition-all duration-300 w-full md:w-auto max-w-full ${
                activePlanta === "03-quartos"
                  ? "bg-[#3E0D11] text-white"
                  : "bg-transparent text-[#3E0D11] hover:bg-[#3E0D11] hover:text-white"
              }`}
            >
              03 Quartos
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto w-full overflow-hidden">
            {activePlanta === "studios-funcionais" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        studiosFuncionaisIndex * 100
                      }%)`,
                    }}
                  >
                    {studiosFuncionais.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() =>
                            openImageModal("studios-funcionais", index)
                          }
                          className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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

            {activePlanta === "studios-loft" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${studiosLoftIndex * 100}%)`,
                    }}
                  >
                    {studiosLoft.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() => openImageModal("studios-loft", index)}
                          className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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

            {activePlanta === "02-quartos" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${doisQuartosIndex * 100}%)`,
                    }}
                  >
                    {doisQuartos.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() => openImageModal("dois-quartos", index)}
                          className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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

            {activePlanta === "03-quartos" && (
              <div>
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${tresQuartosIndex * 100}%)`,
                    }}
                  >
                    {tresQuartos.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          onClick={() => openImageModal("tres-quartos", index)}
                          className="rounded-lg overflow-hidden aspect-[16/10] mb-6 relative cursor-pointer hover:opacity-90 transition-opacity"
                        >
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
                    <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
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
      <section
        id="localizacao"
        className="bg-white relative py-16 md:py-24 px-4 md:px-6 lg:px-20 overflow-hidden"
      >
        <TagLayer title="PLANTAS">
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-col items-start justify-center">
              <div className="font-carla-sans text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800 leading-tight text-start mb-4">
                VIVA NO CENTRO DE TUDO.
                <br />
                <span className="text-[#C2816B]">VIVA NO SEU TEMPO.</span>
              </div>
            </div>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="font-new-black text-base md:text-lg font-normal text-gray-600  max-w-3xl  mb-12 text-start">
                Viva cercado pelo que realmente importa: cultura, serviços,
                lazer e mobilidade.
                <br />O endereço perfeito para quem quer praticidade no dia a
                dia sem abrir mão de qualidade de vida.
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </TagLayer>
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover rotate-180"
          quality={100}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="bg-none h-[320px] hidden lg:block"></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Google Map - Left Side */}
            <div className="w-full lg:w-[55%] max-w-full">
              <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gray-200 max-w-full">
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
            <div className="w-full lg:w-[45%] space-y-3 max-w-full">
              {/* Bar 1 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-2 md:px-4 flex items-center justify-center min-w-[60px] md:min-w-[70px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">
                    900m
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[70px] md:ml-[85px] truncate">
                  Shopping São José
                </span>
              </div>

              {/* Bar 2 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-2 md:px-4 flex items-center justify-center min-w-[60px] md:min-w-[70px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">
                    4,6km
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[70px] md:ml-[85px] truncate">
                  Aeroporto Afonso Pena
                </span>
              </div>

              {/* Bar 3 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-2 md:px-4 flex items-center justify-center min-w-[60px] md:min-w-[70px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">
                    600m
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[70px] md:ml-[85px] truncate">
                  Supermercado Festval
                </span>
              </div>

              {/* Bar 4 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-2 md:px-4 flex items-center justify-center min-w-[60px] md:min-w-[70px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">
                    450m
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[70px] md:ml-[85px] truncate">
                  Rua XV de Novembro
                </span>
              </div>

              {/* Bar 5 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-2 md:px-4 flex items-center justify-center min-w-[60px] md:min-w-[70px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">
                    2,9km
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[70px] md:ml-[85px] truncate">
                  Parque São José
                </span>
              </div>

              {/* Bar 6 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-4 flex items-center justify-center min-w-[75px]">
                  <span className="font-new-black text-xs md:text-sm text-white font-normal">
                    20 min
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[90px]">
                  Centro de Curitiba
                </span>
              </div>

              {/* Bar 7 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-4 flex items-center justify-center min-w-[85px]">
                  <span className="font-new-black text-xs text-white font-normal">
                    Próximo
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[100px]">
                  BR 376 - Ligação Curitiba / SC
                </span>
              </div>

              {/* Bar 8 */}
              <div className="relative bg-[#3E0D11] rounded-full px-3 md:px-5 py-2 md:py-2.5 flex items-center w-full max-w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#C2816B] rounded-full px-4 flex items-center justify-center min-w-[85px]">
                  <span className="font-new-black text-xs text-white font-normal">
                    Próximo
                  </span>
                </div>
                <span className="font-new-black text-xs md:text-sm text-white font-normal ml-[100px]">
                  Caminho do Vinho
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Divider */}
      <section className="bg-[#3E0D11] py-8 md:py-6 flex items-center justify-center">
        <Image
          src="/logo_white.svg"
          alt="Verus Logo"
          width={200}
          height={65}
          className="h-8 md:h-10 w-auto"
        />
      </section>

      {/* Sobre Section */}
      <section
        id="autoria"
        className="bg-white relative py-16 md:py-24 px-4 md:px-6 lg:px-20 overflow-hidden"
      >
        <TagLayer title="AUTORIA" hasN8Logo={true}>
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-8">
              A <span className="text-[#C2816B]">N8 INCORPORADORA.</span>
            </h2>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="font-new-black text-sm md:text-base lg:text-lg font-normal text-gray-700 leading-relaxed space-y-4 md:space-y-6 mb-6 md:mb-8 max-w-[711px] w-full">
                <p>
                  A N8 Incorporadora nasceu com o propósito de transformar
                  espaços em lugares que fazem sentido para as pessoas. Somos
                  movidos pelo compromisso com a excelência em cada etapa – da
                  concepção do projeto à entrega das chaves.
                </p>
                <p>
                  Com uma atuação sólida no mercado de construção e incorporação
                  imobiliária, desenvolvemos empreendimentos que unem
                  arquitetura inteligente, inovação e qualidade construtiva.
                  Buscamos ir além das expectativas, criando soluções que
                  valorizam o bem-estar, a mobilidade e o investimento dos
                  nossos clientes.
                </p>
                <p>
                  Mais do que construir, acreditamos em criar experiências de
                  vida – com responsabilidade, transparência e um olhar atento
                  ao que realmente importa: pessoas.
                </p>
              </div>

              <a
                href="https://www.n8incorporadora.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 md:space-x-3 font-new-black text-sm md:text-base lg:text-lg font-normal text-[#171715] border border-[#E6E5EA] rounded-full px-4 md:px-6 py-2 md:py-3 hover:bg-[#C2816B] hover:border-[#C2816B] hover:text-white transition-all duration-300 max-w-full"
              >
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
              </a>
            </AnimatedSection>
          </AnimatedSection>
        </TagLayer>
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover rotate-180"
          quality={100}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="bg-none h-[710px] hidden lg:block 1112xl:h-[524px]"></div>
        </div>
        <div>
          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 max-w-6xl mx-auto w-full px-4 md:px-6 lg:px-0">
            {/* Feature 1 */}
            <div className="text-center max-w-full">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/constr.svg"
                  alt="Construção"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 break-words">
                MAIS DE <span className="text-[#C2816B]">3 MIL M²</span>{" "}
                CONSTRUÍDOS
              </h3>
              <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
                Qualidade e solidez reconhecidas no mercado imobiliário
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center max-w-full">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/diamond.svg"
                  alt="Alto Padrão"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 break-words">
                ACABAMENTOS DE{" "}
                <span className="text-[#C2816B]">ALTO PADRÃO</span>
              </h3>
              <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
                Detalhes sofisticados que valorizam cada ambiente
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center max-w-full">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/sust.svg"
                  alt="Sustentabilidade"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 break-words">
                <span className="text-[#C2816B]">SUSTENTABILIDADE</span> EM FOCO
              </h3>
              <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
                Tecnologias que reduzem impacto e otimizam recursos
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center max-w-full">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/valor.svg"
                  alt="Valorização"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-mirante text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 break-words">
                ALTO POTENCIAL DE{" "}
                <span className="text-[#C2816B]">VALORIZAÇÃO</span>
              </h3>
              <p className="font-new-black text-xs md:text-sm lg:text-base font-normal text-gray-600 break-words">
                Planejados para valorizar: localização e arquitetura com retorno
                seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grifo Arquitetura Section */}
      <section className="bg-gray-100 relative py-16 md:py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
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
                ARQUITETURA COM
                <br />
                <span className="text-[#C2816B]">IDENTIDADE LOCAL E</span>
                <br />
                <span className="text-[#C2816B]">VISÃO CONTEMPORÂNEA</span>
              </h2>

              <div className="font-new-black text-base md:text-lg font-normal text-gray-700 leading-relaxed space-y-6 mb-8">
                <p>
                  O projeto Verus é da Grifo Arquitetura. Unimos tradição e
                  contemporaneidade com uma abordagem crítica, funcional e
                  conectada à cidade. Fundada em 2008 pelos arquitetos Fabio,
                  Igor e Suzanna, focamos em projetos autorais que valorizam a
                  experiência urbana e as raízes locais, entregando arquitetura
                  com propósito, autenticidade e significado.
                </p>
              </div>

              <div className="space-y-4">
                <blockquote className="font-new-black text-base md:text-lg font-normal text-gray-700 italic">
                  &quot;Projetamos para pessoas reais, em lugares reais.&quot;
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
      <section className="relative ">
        <Image
          src="/divider.png"
          alt="Divider"
          width={1920}
          height={400}
          className="w-full object-cover min-h-[200px] md:h-[400px]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 max-h-[200px] md:max-h-[400px]">
          <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center leading-tight">
            SEU ESPAÇO
            <br />
            DO SEU JEITO.
          </h2>
        </div>
      </section>

      {/* Obra Section */}
      <section
        id="obras"
        className="bg-white py-16 md:py-24 px-4 md:px-6 lg:px-20 relative overflow-hidden"
      >
        <TagLayer title="OBRA">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-carla-sans text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight mb-4">
              ESTÁGIO DA <span className="text-[#C2816B]">OBRA.</span>
            </h2>

            <p className="font-new-black text-base md:text-lg font-normal text-gray-600 mb-12">
              Atualizado Outubro de 2025.
            </p>
          </AnimatedSection>
        </TagLayer>
        <Image
          src="/SHADOWUPLEFT.png"
          alt="Shadow"
          fill
          className="object-cover "
          quality={100}
        />
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-none h-[160px] hidden lg:block"></div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch w-full">
            {/* Left Side - Progress Bars */}
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <AnimatedProgressBar
                label="Fundação e Estrutura"
                percentage={85}
                delay={0}
              />
              <AnimatedProgressBar
                label="Alvenaria e Vedação"
                percentage={72}
                delay={100}
              />
              <AnimatedProgressBar
                label="Instalações Elétricas"
                percentage={68}
                delay={200}
              />
              <AnimatedProgressBar
                label="Instalações Hidráulicas"
                percentage={55}
                delay={300}
              />
              <AnimatedProgressBar
                label="Acabamentos Internos"
                percentage={42}
                delay={400}
              />
              <AnimatedProgressBar
                label="Acabamentos Externos"
                percentage={38}
                delay={500}
              />
              <AnimatedProgressBar
                label="Paisagismo"
                percentage={25}
                delay={600}
              />
              <AnimatedProgressBar
                label="Entrega Final"
                percentage={15}
                delay={700}
              />

              {/* Paragraph below progress bars */}
              <div className="mt-6">
                <p className="font-new-black text-sm md:text-base font-normal text-gray-600 leading-relaxed text-left">
                  Cada etapa da obra revela um novo capítulo da história do
                  Verus.
                  <br />
                  Acompanhe o progresso e veja o futuro tomando forma diante dos
                  seus olhos.
                </p>
              </div>
            </div>

            {/* Right Side - Building Image */}
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="flex-1">
                <Image
                  src="/predio2.png"
                  alt="Verus Building Construction"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="pt-16 md:pt-20 pb-12 md:pb-8 px-6 md:px-20">
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

              {/* WhatsApp Button */}
              <a
                href="http://wa.me/5541997188421?text=Vim%20do%20Site%20e%20Gostaria%20de%20Saber%20Mais%20sobre%20o%20Verus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 px-6 py-3 border-2 border-[#171715] rounded-lg hover:bg-[#3E0D11] hover:border-[#3E0D11] hover:scale-105 transition-all duration-300 group"
              >
                <span className="font-new-black text-sm md:text-base font-normal text-[#171715] group-hover:text-white transition-colors">
                  Fale pelo
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#171715] group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <span className="font-new-black text-sm md:text-base font-normal text-[#171715] group-hover:text-white transition-colors">
                    WhatsApp
                  </span>
                </div>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/n8.inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/iglogo.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </a>

                <a
                  href="mailto:falecom@n8incorporadora.com"
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src="/maillogo.svg"
                    alt="Email"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Bar */}

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
              <a
                href="#projeto"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Projeto
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a
                href="#galeria"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Galeria
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a
                href="#diferenciais"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Diferenciais
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a
                href="#plantas"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Plantas
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a
                href="#autoria"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Autoria
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a
                href="#localizacao"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Localização
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
              <a
                href="#obras"
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                Obras
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            </nav>

            {/* Contact Button */}
            <a
              href="http://wa.me/5541997188421?text=Vim%20do%20Site%20e%20Gostaria%20de%20Saber%20Mais%20sobre%20o%20Verus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C2816B] hover:bg-[#3E0D11] text-white font-mirante font-normal px-6 md:px-8 py-3 md:py-4 rounded-full hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {imageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-95">
          <button
            onClick={() => setImageModalOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all duration-300 z-20"
            aria-label="Fechar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={prevImageInModal}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
            aria-label="Imagem anterior"
          >
            <Image
              src="/arrowleft.png"
              alt="Arrow Left"
              width={24}
              height={24}
              className="w-6 h-auto"
            />
          </button>

          <button
            onClick={nextImageInModal}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
            aria-label="Próxima imagem"
          >
            <Image
              src="/arrowright.png"
              alt="Arrow Right"
              width={24}
              height={24}
              className="w-6 h-auto"
            />
          </button>

          <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
            <div className="relative w-full aspect-video mb-6">
              <Image
                src={getCurrentImageData().image}
                alt={getCurrentImageData().title}
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            <div className="text-center px-4">
              <h3 className="font-carla-sans text-2xl md:text-3xl font-normal text-white mb-3">
                {getCurrentImageData().title}
              </h3>
              <p className="font-new-black text-base md:text-lg font-normal text-white text-opacity-90">
                {getCurrentImageData().description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-fade-in">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-slide-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#C2816B] text-gray-600 hover:text-white transition-all duration-300 z-10"
              aria-label="Fechar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-8 md:p-12">
              <h2 className="font-carla-sans text-3xl md:text-4xl font-normal text-gray-800 leading-tight mb-4">
                Baixe o Material{" "}
                <span className="text-[#C2816B]">Exclusivo</span>
              </h2>

              <p className="font-new-black text-base md:text-lg font-normal text-gray-600 mb-8">
                Cadastre-se e faça o download do material exclusivo do Verus.
                Descubra as plantas, diferenciais e todos os detalhes que tornam
                este projeto único.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Nome*"
                      className="w-full px-4 py-3 bg-white border border-[#E6E5EA] rounded-lg text-gray-900 placeholder:text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="w-full px-4 py-3 bg-white border border-[#E6E5EA] rounded-lg text-gray-900 placeholder:text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-new-black text-sm font-normal text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-3 bg-white border border-[#E6E5EA] rounded-lg text-gray-900 placeholder:text-[#E6E5EA] focus:outline-none focus:border-[#C2816B] transition-colors"
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
                  Ao informar meus dados, estou ciente das diretrizes da{" "}
                  <a
                    href="#"
                    className="underline hover:text-[#C2816B] transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </p>

                <button
                  type="submit"
                  className="group flex items-center justify-center space-x-3 w-full font-new-black text-base md:text-lg font-normal text-white bg-[#C2816B] border border-[#C2816B] rounded-full px-6 py-3 hover:bg-[#3E0D11] hover:border-[#3E0D11] transition-all duration-300"
                >
                  <span>Baixar Material</span>
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
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#C2816B] hover:bg-[#3E0D11] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-30"
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
  );
}
