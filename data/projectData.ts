export const PROJECT_DATA = [
  {
    id: 0,
    title: '포켓몬도감 팀 프로젝트',
    title_en: 'pokemon',
    subTitle: '짧은 설명',
    description:
      'Pokemon Open API데이터를 비동기적으로 처리하고 Redux Toolkit을 활용한 리액트 프로젝트 입니다. 사용자에게 포켓몬 검색과 정보, 랜덤 선택, 포켓몬 배틀, 나의 포켓몬 리스트 관리 등 다양한 기능을 제공합니다.',
    start_date: '2024. 04. 14',
    end_date: '2024. 04. 21',
    participation: '',
    main_image: '/images/projects/pokemon/pokemon.webp',
    github_url: '',
    demo_url: '',
    skills: [''],
    main_functions: ['', '', '', ''],
    roles: [],
    results: [
      {
        id: 0,
        title: 'React 기반 SPA 개발',
        description:
          'React로 페이지 라우팅, 상태 관리, UI 렌더링 등 서비스 전반 구성하였습니다. 또, 페이지 단위가 많은 구조에서 컴포넌트 분리 전략을 적용해 유지보수성을 향상했습니다.',
      },
      {
        id: 1,
        title: 'Supabase를 활용한 Database연동과 Zustand를 활용한 상태 관리',
        description:
          'Store 단위로 기능 분리하여 상태 흐름을 직관적으로 구성하였습니다.',
      },
      {
        id: 2,
        title: '데이터 처리 및 API 연동 경험',
        description:
          '한국관광공사에서 제공하는 TourAPI 4.0을 연동하여 여러 데이터를 통합하여 구조화하였습니다. 또, 카데고리/지역 등의 검색 조건을 기반으로 다양한 필터링을 구현하였습니다.',
      },
      {
        id: 3,
        title: '협업이 가져오는 생산성 향상',
        description:
          '서로 다른 기능을 구현하지만 같은 목표를 향해 달려가는 팀원들과 소통하고 PR리뷰를 통해 다른 팀원의 코드를 학습과 어떠한 코드가 더 좋을지에 대한 토론을 할 수 있어서 좋았습니다. 또, 협업 도구(GitHub Project, Issue, PR 등)를 사용하여 각 작업할 분할하여 효율적으로 프로젝트에 참여할 수 있었습니다.',
      },
    ],
  },
  {
    id: 1,
    title: '마켓칼리(Karly)',
    title_en: 'karly',
    subTitle: '',
    start_date: '',
    end_date: '',
    participation: '',
    main_image: '/images/projects/karly/karly.webp',
    github_url: '',
    demo_url: '',
    skills: [''],
    main_functions: ['', '', '', ''],
    roles: [],
    results: [
      {
        id: 0,
        title: 'React 기반 SPA 개발',
        description:
          'React로 페이지 라우팅, 상태 관리, UI 렌더링 등 서비스 전반 구성하였습니다. 또, 페이지 단위가 많은 구조에서 컴포넌트 분리 전략을 적용해 유지보수성을 향상했습니다.',
      },
      {
        id: 1,
        title: 'Supabase를 활용한 Database연동과 Zustand를 활용한 상태 관리',
        description:
          'Store 단위로 기능 분리하여 상태 흐름을 직관적으로 구성하였습니다.',
      },
      {
        id: 2,
        title: '데이터 처리 및 API 연동 경험',
        description:
          '한국관광공사에서 제공하는 TourAPI 4.0을 연동하여 여러 데이터를 통합하여 구조화하였습니다. 또, 카데고리/지역 등의 검색 조건을 기반으로 다양한 필터링을 구현하였습니다.',
      },
      {
        id: 3,
        title: '협업이 가져오는 생산성 향상',
        description:
          '서로 다른 기능을 구현하지만 같은 목표를 향해 달려가는 팀원들과 소통하고 PR리뷰를 통해 다른 팀원의 코드를 학습과 어떠한 코드가 더 좋을지에 대한 토론을 할 수 있어서 좋았습니다. 또, 협업 도구(GitHub Project, Issue, PR 등)를 사용하여 각 작업할 분할하여 효율적으로 프로젝트에 참여할 수 있었습니다.',
      },
    ],
  },
  {
    id: 2,
    title: '득근득근',
    title_en: 'dgdg',
    subTitle: '당신의 매일의 운동을 간편하게 기록하고, 성취감을 느껴보세요.',
    start_date: '2024. 08.26',
    end_date: '2024. 09. 24',
    participation: '',
    main_image: '/images/projects/dgdg/dgdg.webp',
    github_url: '',
    demo_url: '',
    skills: [
      'HTML5',
      'CSS Modules',
      'React',
      'TypeScript',
      'React Router',
      'React Query',
      'Zustand',
      'Kakao API',
      'Pocketbase',
    ],
    main_functions: ['', '', '', ''],
    roles: [],
    results: [],
  },
  {
    id: 3,
    title: '폴짝(Polzzak)',
    title_en: 'polzzak',
    subTitle: '국내 여행지 검색 및 일정 관리 웹앱',
    description:
      '여행을 좋아하는 사람들을 위한 국내 여행 추천 및 일정 계획을 세울 수 있는 웹앱 입니다. 한국관광공사에서 제공하는 TourAPI 4.0을 사용하여 국내의 지역 기반 관광 정보 데이터를 불러옵니다. 또, 다른 프로젝트에서 사용하였던 pocketbase가 아닌 supabase를 활용해 DB를 구상하여 사용자 인증, 즐겨찾기, 일정 데이터를 효율적으로 관리합니다. 폴짝은 국내 여행을 준비하는 사용자들이 여행지를 검색하고, 일정을 계획하며, 자신의 여행을 관리할 수 있는 국내 여행 정보 제공 웹앱 입니다. React와 TypeScript, Supabase, Zustand, ShadCN UI를 사용하여 개발 되었습니다.',
    start_date: '2025. 03. 10',
    end_date: '2025. 06. 13',
    participation: '프론트엔드 3명',
    main_image: '/images/projects/polzzak/polzzak.webp',
    github_url: 'https://github.com/polzzak-by-nowashgirls/polzzak',
    demo_url: 'https://polzzak.vercel.app/',
    skills: [
      'JavaScript',
      'React',
      'TypeScript',
      'Zustand',
      'Shadcn UI',
      'Supabase',
      'Vite',
      'Figma',
    ],
    main_functions: [
      '계절 또는 매달 다른 테마의 장소 추천',
      '각 장소/콘텐츠 상세페이지에서 이미지, 소개, 이용 안내 제공',
      '즐겨찾기(찜) 기능, 폴더 관리',
      '개인 일정(일정 계획) 기능',
    ],
    roles: [
      {
        id: 0,
        title: '페이지 레이아웃 제작',
        description:
          '마이 페이지, 폴짝 페이지, 지도 페이지, 검색/추가/수정 페이지 레이아웃 제작하였습니다.',
      },
      {
        id: 1,
        title: '회원가입 기능 구현',
        description:
          '이메일 주소와 비밀번호를 기반으로 회원가입이 진행되며, 회원가입 완료 시 이메일로 전송되어 인증시 회원가입이 완료됩니다.',
      },
      {
        id: 2,
        title: '검색 기능 구현',
        description:
          '검색어, 날짜, 지역(단일 선택), 주제(다중 선택)을 사용하여 원하는 조건의 검색 할 수 있습니다.',
      },
      {
        id: 3,
        title: '콘텐츠 상세 페이지 기능 구현',
        description:
          '검색한 정보의 장소(업체, 축제)의 이미지, 소개, 이용안내 확인할 수 있습니다.',
      },
      {
        id: 4,
        title: '마이페이지 기능 구현',
        description:
          '현재 로그인한 유저의 정보를 출력하고, 기존의 정보(이메일, 비밀번호, 닉네임)를 변경할 수 있습니다.',
      },
      {
        id: 5,
        title: '회원탈퇴, 로그아웃 기능 구현',
        description:
          '로그인 되어있는 계정을 회원탈퇴, 로그아웃을 할 수 있습니다.',
      },
    ],
    results: [
      {
        id: 0,
        title: 'React 기반 SPA 개발',
        description:
          'React로 페이지 라우팅, 상태 관리, UI 렌더링 등 서비스 전반 구성하였습니다. 또, 페이지 단위가 많은 구조에서 컴포넌트 분리 전략을 적용해 유지보수성을 향상했습니다.',
      },
      {
        id: 1,
        title: 'Supabase를 활용한 Database연동과 Zustand를 활용한 상태 관리',
        description:
          'Store 단위로 기능 분리하여 상태 흐름을 직관적으로 구성하였습니다.',
      },
      {
        id: 2,
        title: '데이터 처리 및 API 연동 경험',
        description:
          '한국관광공사에서 제공하는 TourAPI 4.0을 연동하여 여러 데이터를 통합하여 구조화하였습니다. 또, 카데고리/지역 등의 검색 조건을 기반으로 다양한 필터링을 구현하였습니다.',
      },
      {
        id: 3,
        title: '협업이 가져오는 생산성 향상',
        description:
          '서로 다른 기능을 구현하지만 같은 목표를 향해 달려가는 팀원들과 소통하고 PR리뷰를 통해 다른 팀원의 코드를 학습과 어떠한 코드가 더 좋을지에 대한 토론을 할 수 있어서 좋았습니다. 또, 협업 도구(GitHub Project, Issue, PR 등)를 사용하여 각 작업할 분할하여 효율적으로 프로젝트에 참여할 수 있었습니다.',
      },
    ],
  },
  {
    id: 4,
    title: '리그램(RIGRAM)',
    title_en: 'rigram',
    subTitle: '대학교 디지털 졸업앨범 웹 애플리케이션',
    description:
      '1인 프리랜서로 기획, UI/UX 디자인과 프론트엔드/백엔드 개발까지 전 과정을 단독으로 수행한 풀스택 프로젝트 입니다. Next.js + Tailwind CSS + TypeScript + Supabase를 기반으로 회원가입부터 로그인, 사진/동영상 업로드 및 삭제, 조회 기능 등을 구현하여 실제 서비스 수준의 디지털 졸업앨범을 완성했습니다. 이 프로젝트를 통해 기획, 디자인, 개발의 전체 프로세스 경험은 물론, 애자일 기법을 통한 사용자 경험 중심의 UI설계, 문제해결능력 등을 실질적으로 강화할 수 있었습니다.',
    start_date: '2025. 09. 04',
    end_date: '2025. 11. 14',
    participation: '프론트엔드 1명',
    main_image: '/images/projects/rigram/rigram.webp',
    github_url: 'https://github.com/Photobit-RIGRAM/RIGRAM',
    demo_url: 'https://photobit-rigram.vercel.app',
    skills: [
      'Next.js (App Router)',
      'TypeScript',
      'TailwindCSS',
      'Supabase',
      'Vercel',
    ],
    main_functions: [
      '졸업생 등록 및 프로필 수정',
      '졸업연도, 학과별 졸업생 검색 및 필터링',
      '대학교별 졸업 앨범 조회',
      '카테고리별 앨범 사진 업로드 및 필터링',
    ],
    roles: [
      {
        id: 0,
        title: '전체적인 기획 및 디자인과 개발',
        description:
          '고객의 요구사항 분석부터 기능 정의, 화면 설계, UX/UI 디자인, 프런트엔드/백엔드 개발까지 모든 과정을 단독으로 진행하였습니다. 고객과의 지속적인 커뮤니케이션을 기반으로 애자일 방식으로 프로젝트를 운영하였으며, 필요 기능을 협의 후 즉각적으로 반영하거나 수정, 개선하여 최종 서비스를 완성했습니다.',
      },
      {
        id: 1,
        title: '회원가입/로그인 기능 구현',
        description:
          '카테고리로 학교(Admin), 학생(User)를 선택 후, 이메일 주소와 비밀번호를 기반으로 회원가입이 진행됩니다. 중복된 이메일로는 가입할 수 없으며, 학생(User)의 경우 학교의 졸업생으로 등록된 이메일 주소로만 가입합니다.',
      },
      {
        id: 2,
        title: '학과 관리 페이지 기능 구현',
        description:
          '학교별 학과를 관리하는 페이지 입니다. 관리자(Admin)는 학교별 학과와 해당 학과의 교직원, 학생회를 추가 및 삭제, 조회할 수 있습니다. 학생(User)은 학교별 학과를 조회할 수 있습니다.',
      },
      {
        id: 3,
        title: '졸업생 관리 페이지 기능 구현',
        description:
          '학교별 등록된 학과마다 졸업생들을 관리하는 페이지 입니다. 관리자(Admin)는 학교별 학과의 졸업생을 추가 및 삭제, 조회할 수 있습니다. 학생(User)은 등록된 졸업생을 클릭하면 졸업생 상세 페이지로 이동하는데, 해당 졸업생의 상세 정보를 조회할 수 있습니다. 또, 졸업생 리스트에서는 가나다순 정렬과 검색하여 해당 학생을 찾을 수 있습니다.',
      },
      {
        id: 4,
        title: '단체 사진 페이지 기능 구현',
        description:
          '학교별 등록된 학과마다 사진 및 동영상을 관리하는 페이지 입니다. 관리자(Admin)는 학교별 학과의 사진/동영상을 추가 및 삭제, 조회할 수 있습니다. 학생(User)은 자신이 속한 학과의 등록된 사진/동영상을 조회할 수 있습니다. 등록된 사진/동영상은 클릭 시 크게 볼 수 있으며 카테고리별 필터링이 됩니다.',
      },
      {
        id: 5,
        title: '학교 관리 페이지 기능 구현',
        description:
          '학교별 학교의 전경, 연혁, 상징, 임원진을 관리하는 페이지 입니다. 관리자(Admin)는 학교별 전경, 연혁, 상징, 임원진을 추가 및 삭제, 조회를 할 수 있습니다. 학생(User)은 자신의 학교의 전경, 연혁, 상징, 임원진을 조회할 수 있습니다.',
      },
    ],
    results: [
      {
        id: 0,
        title: '1인 개발자로서의 책임감과 의사결정 능력',
        description:
          '개발뿐 아니라 일정 관리, 요구사항분석, UI/UX설계까지 혼자 진행하며 실제 프리랜서 업무와 동일한 프로세스를 수행하였습니다. 1인 개발임에도 협업 가능한 구조와 코딩 컨벤션을 유지하면서 프로젝트 형태를 구축하였습니다.',
      },
      {
        id: 1,
        title: 'TypeScript와 Next.js 기반으로 한 개발',
        description:
          'TypeScript를 사용하여 타입 안정성과 유지보수성을 고려한 코드를 작성하였고, Next.js 환경에서의 App Router를 활용해 구조화된 프로젝트를 구성하고, CSR(Client-Side Rendering)과 SSR(Server-Side Rendering)방식을 이해하였습니다.',
      },
      {
        id: 2,
        title: 'Supabase를 활용한 실전 활용 능력과 Zustand를 활용한 상태 관리',
        description:
          '테이블 설계, Storage 연결, RLS 설정 등 기초적인 백엔드 설계 흐름을 경험하였고, Zustand를 사용하여 Redux보다 더 가볍고 직관적인 상태 관리 방식을 경험하여 앱 전반 상태를 유지하는 법을 배웠습니다.',
      },
    ],
  },
];
