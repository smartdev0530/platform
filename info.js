let info = {
  name: "David Reid",
  logo_name: "David Reid",
  flat_picture: require("./src/assets/developer-team.svg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am a Full-stack and Smart Contract developer, who has 7 years of strong experience on | NodeJS | ReactJS | VueJS | MongoDB | Blockchain. Always be hungry for learning new technology & improving myself. especially on blockchain scope. Have been developing lots of  programing languages, frameworks, libraries, platforms. Over the last 2 years, mainly focusing on blockchain technology, Solidity | Web3 | Ether | Polka | Solana | Solana-Web3. Even also good at both of JavaScript and typescript, have experience on | Android | PHP | MySQL | Laravel | YII2 | Phaser | Drupal | Django | Olympus DAO | WordPress | UnityGame, So hopefully it would be helpful for you. From these above experience, it would be great if we can build relationship and can make things together",
  links: {
    github: "https://github.com/smartdev0530",
    angellist: "https://angel.co/u/xin_john",
    resume:
      "https://drive.google.com/file/d/1EB-F-YQZGH01FV0GGe34FuZWh1FvwsyM/view"
      ,
    discord:
      "https://discord.gg/C8JqnjAq"
      ,
    telegram:
      "https://t.me/lucky_punk"
  },
  education: [
    {
      name: "Ontario Tech UNIVERSITY",
      place: "Ontario, Canada",
      date: "May 2008 - Jun 2016",
      degree: "Bachelor of Engineering",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "Artificial Intelligence",
        "Software Engineering",
        "Algorithms",
        "Computer Vision",
        "Music Data Mining",
        ,
        "OS"
      ]
    }
  ],
  experience: [
    {
      name: "Blockchain Lead Developer",
      place: "Bitfia Labs PTE LTD, Singapore",
      date: "Feb 2021 - Jan 2022",
      position: "Lead smart contract developer",
      description:
        "Improved functionalities and pipeline integration by designing and implementing Smart Contract Security Audit from SlowMist",
      skills: ["Blockchain", "Smart contracts", "Solidity", "Web3.js", "React.js", "Typescript"]
    },
    {
      name: "Blockchain developer",
      place: "Konfidio, Berline, Germany",
      date: "Aug 2019 — Jun 2020",
      position: "Smart contract developer",
      description:
        "Built and launched Smart Contracts for Genesis NFT, Pode and Marketplace as well. Prefer to use ERC-721 based NFT rather than ERC-1155",
      skills: ["NFT", "Smart contracts", "Solidity", "IPFS", "Typescript", "Node.js", "Python"]
    },
    {
      name: "Senior Full stack developer",
      place: "Swivelt, Tokyo, Janpan",
      date: "Mar 2016 — Oct 2018",
      position: "Full stack developer",
      description:
        "Consulted regularly with a number of companies and contacted them to build smart solutions for build user-friendly web apps and mobile apps and tried to increase revenue with great efforts",
      skills: ["React/Redux", "Node.js", "AWS", "Express", "GraphQ;"]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "C",
        "C++",
        "Java",
        "Python",
        "Javascript",
        "TypeScript",
        "SQL",
        "NoSQL",
        "Ruby",
        "Solidity",
        "Rust",
        "Go/Golang"
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Keras",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "LibROSA",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Blockchain technologies",
      info: ["Smart contracts", "Solidity", "Rust", "Ether.js", "Web3.js", "Typescript", "Javascript", "Hardhat/Truffle/Remix", "Wax"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "Neo4j", "PostgreSQL"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    }
  ],
  portfolio: [
    {
      name: "Olympus DAO Fork",
      pictures: [
        {
          img: require("./src/assets/portfolio/templar/templar-1.jpg")
        },
        {
          img: require("./src/assets/portfolio/templar/templar-2.jpg")
        },
        {
          img: require("./src/assets/portfolio/templar/templar-3.jpg")
        },
        {
          img: require("./src/assets/portfolio/templar/templar-4.jpg")
        }
      ],
      technologies: ["Solidity", "Typescript", "React", "Tailwind CSS", "GrapQL", "Redux"],
      category: "Dao Dapp",
      date: "Aug, 2021 - Jan, 2022",
      github:
        "https://github.com/TemplarDAO",
      visit: "https://templar.finance",
      description:
        "Templar is the first decentralized reserve currency protocol available on the Binance Smart Chain based on the TEM token. Each TEM token is backed by a basket of assets (e.g. BNB, BUSD, TEM-BUSD LP) in the Templar treasury, giving it an intrinsic value that it cannot fall below. Templar also introduces unique economic and game-theoretic dynamics into the market through staking and bonding."
    },
    {
      name: "Metaverse DAO",
      pictures: [
        {
          img: require("./src/assets/portfolio/metaverse/logo.png")
        },
        {
          img: require("./src/assets/portfolio/metaverse/one.png")
        },
        {
          img: require("./src/assets/portfolio/metaverse/two.png")
        },
        {
          img: require("./src/assets/portfolio/metaverse/three.png")
        },
      ],
      technologies: ["React", "Solidity", "NFT", "Web3.js", "Git"],
      category: "Metaverse Game Dapp",
      date: "Jun, 2021 - Dec  ,Aug 2021",
      github: "https://github.com/johni1228/metaverse-contract.git",
      visit: "https://metareserve.finance/",
      description:
        "MetaReserve is a Decentralized Reserve Currency Protocol that aims to take the lead in setting a new benchmark in the wild west world of Decentralized Finance (DeFi)."
    },
    {
      name: "Leda NFT Marketplace",
      pictures: [
        {
          img: require("./src/assets/portfolio/leda/one.png")
        },
        {
          img: require("./src/assets/portfolio/leda/two.png")
        }
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Typescript",
        "EVM network",
        "Solidity",
        "Web3.js"
      ],
      category: "NFT Marketplace Dapp",
      github: "https://github.com/johni1228/Custom_opensea",
      date: "Oct, 2020 - Nov, 2020",
      visit: "https://leda.jup.io/",
      description:
        "Leda is an NFT marketplace, that uses the Jupiter blockchain. A Non-Fungible Token (NFT) (or called Singleton Asset Token on Jupiter) is a unit of data stored on a blockchain that certifies a digital asset to be unique and therefore not interchangeable."
    },
    {
      name: "Borealisswap Dex",
      pictures: [
        {
          img: require("./src/assets/portfolio/borealis/swap.png")
        },
        {
          img: require("./src/assets/portfolio/borealis/info.png")
        },
        {
          img: require("./src/assets/portfolio/borealis/home.png")
        }
      ],
      technologies: ["React", "Tailwind CSS", "Typescript", "Javascript", "Node.js", "Ether.js", "StoryBook", "Solidity"],
      category: "Dapp",
      date: "Mar, 2020 - July, 2020",
      github: "https://github.com/johni1228/borealis-sdk.git",
      visit: "https://beta.borealisswap.fi",
      description:
        "This is decentralized exchange on Aurora network, which is layer 2."
    },
    {
      name: "Casino Game",
      pictures: [
        {
          img: require("./src/assets/portfolio/luckychip/one.png")
        },
        {
          img: require("./src/assets/portfolio/luckychip/two.png")
        },
        {
          img: require("./src/assets/portfolio/luckychip/three.png")
        },
        {
          img: require("./src/assets/portfolio/luckychip/home.png")
        }
      ],
      technologies: ["React", "Tailwind CSS", "Typescript", "Javascript", "Node.js", "Ether.js", "StoryBook", "Solidity"],
      category: "Dapp",
      date: "Mar, 2020 - July, 2020",
      github: "https://github.com/luckychip-io",
      visit: "https://luckychip.io",
      description:
        "This is a sort of casino Dapp game for dice."
    },
    
  ],
  portfolio_web: [
    {
      name: "United hardscapes",
      title: "Web development",
      pictures: [
        {
          img: require("./src/assets/designs/hardscape/home.png"),
          title: "Home"
        },
        {
          img: require("./src/assets/designs/hardscape/one.png"),
          title: "What is hardscape"
        },
        {
          img: require("./src/assets/designs/hardscape/two.png"),
          title: "How to work"
        },
        {
          img: require("./src/assets/designs/hardscape/three.png"),
          title: "Order"
        }
      ],
      technologies: ["Next.js", "Angular", "Rxjs", "Tailwind CSS", "Typescript", "Nest.js", "PostgreSQL", "AWS", "Git"],
      category: "Full stack development",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Hardscape Architect will consult you about your project and create a detailed 2D Digital Blueprint so that you could get an overall idea of material costs."
    },
    {
      name: "Guitar",
      title: "Guitar Web Application",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
        }
      ],
      technologies: ["PHP", "SASS/SCSS", "Laravel", "MySQL", "HTML", "JQuery"],
      category: "Web development",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "This is a website of guitar shopping"
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
        }
      ],
      technologies: ["Angular", "Typescript", "Node.js", "MongoDB"],
      category: "Web development",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, David Reid has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Dr. Ashok Sanghani",
      position: "CEO",
      company: "Bitfia",
      location: "Singapore, Singapore"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Liam Jin",
      position: "CTO",
      company: "Konfidio",
      location: "Berline, Germany"
    },
    {
      title:
        "He has gained great knowledge and experience of Blockchain, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Liam Jin",
      position: "CTO",
      company: "Swivelt",
      location: "Tokyo, Japan"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Raymond FEGington",
      position: "Director",
      company: "Universe",
      location: "France"
    }
  ]
};

export default info;
