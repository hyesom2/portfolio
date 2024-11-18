interface portfolioDataTypes {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  githubURL?: string;
};

const portfolioData: portfolioDataTypes[] = [
  {
    id: 0,
    title: "포켓몬도감 팀 프로젝트",
    description: "포켓몬 OpenAPI와 Redux Toolkit을 활용한 리액트 프로젝트로, 비동기적 데이터 호출, 포켓몬 검색/선택, 랜덤 선택, 배틀, 나의 포켓몬 리스트 관리등 다양한 기능을 제공합니다.",
    image: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
    url: "https://pokemon-api-project-nine.vercel.app/",
    githubURL: "https://github.com/henny1105/pokemon_api_project",
  },
  {
    id: 1,
    title: "마켓칼리 팀 프로젝트",
    description: "적응형 웹 사이트로 마켓컬리 클론 코딩 입니다.",
    image: "/assets/data/images/karly.webp",
    url: "https://sibi11jo.netlify.app/",
    githubURL: "https://github.com/FRONTENDSCHOOL10/sibi11jo",
  },
      {
    id: 2,
    title: "득근득근",
    description: "",
    image: "/assets/data/images/dgdg.webp",
    url: "https://dgdg-ooo.netlify.app/start",
    githubURL: "https://github.com/FRONTENDSCHOOL10/5unwan",
  },
  {
    id: 3,
    title: "마켓칼리 개인 프로젝트",
    description: "",
    image: "/assets/data/images/karly_react.webp",
    url: "",
    githubURL: "https://github.com/hyesom2/react_karly",
  },
  {
    id: 4,
    title: "포트폴리오 사이트",
    description: "",
    image: "/assets/data/images/portfolio.webp",
    url: "",
    githubURL: "https://github.com/hyesom2/portfolio",
  },
  {
    id: 5,
    title: "JMINI 쇼핑몰",
    description: "",
    image: "/assets/data/images/jmini.webp",
    url: "https://jmini.co.kr/",
    githubURL: "https://github.com/hyesom2/portfolio",
  },
];

export default portfolioData;