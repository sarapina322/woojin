// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/woojin/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Research, education, leadership, and service portfolio.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/woojin/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research, leadership, and service collected in one place.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/woojin/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Accepted papers, preprints, and manuscript updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/woojin/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/woojin/books/the_godfather/";
            },},{id: "news-received-honors-2020-2-semester-at-korea-university",
          title: 'Received Honors (2020-2 semester) at Korea University.',
          description: "",
          section: "News",},{id: "news-received-the-lee-chai-yeon-scholarship-for-academic-excellence-and-leadership",
          title: 'Received the Lee Chai Yeon Scholarship for academic excellence and leadership.',
          description: "",
          section: "News",},{id: "news-received-the-kuisa-outstanding-member-certificate-from-the-korea-university-global-service-center",
          title: 'Received the KUISA Outstanding Member Certificate from the Korea University Global Service Center....',
          description: "",
          section: "News",},{id: "news-received-high-honors-at-korea-university-2021-2-2022-1-2023-1-and-2023-2-semesters",
          title: 'Received High Honors at Korea University (2021-2, 2022-1, 2023-1, and 2023-2 semesters).',
          description: "",
          section: "News",},{id: "news-completed-an-exchange-semester-at-arizona-state-university",
          title: 'Completed an exchange semester at Arizona State University.',
          description: "",
          section: "News",},{id: "news-received-the-bk21-outstanding-new-student-scholarship",
          title: 'Received the BK21 Outstanding New Student Scholarship.',
          description: "",
          section: "News",},{id: "news-joined-mint-lab-as-an-m-s-student-in-mechanical-engineering-at-korea-university",
          title: 'Joined MINT Lab as an M.S. student in Mechanical Engineering at Korea University....',
          description: "",
          section: "News",},{id: "news-received-the-bk21-graduate-research-scholarship",
          title: 'Received the BK21 Graduate Research Scholarship.',
          description: "",
          section: "News",},{id: "projects-wearable-cardiometabolic-estimation",
          title: 'wearable cardiometabolic estimation',
          description: "kinematics-aware self-supervised learning for wearable-based cardiorespiratory fitness estimation.",
          section: "Projects",handler: () => {
              window.location.href = "/woojin/projects/wearable-cardiometabolic-estimation/";
            },},{id: "projects-frailty-zero-foundation-model",
          title: 'frailty zero foundation model',
          description: "multimodal foundation modeling for frailty assessment and preemptive intervention in aging populations.",
          section: "Projects",handler: () => {
              window.location.href = "/woojin/projects/frailty-zero-foundation-model/";
            },},{id: "projects-smart-catheter-system",
          title: 'smart catheter system',
          description: "closed-loop assistive medical system for neurogenic bladder care.",
          section: "Projects",handler: () => {
              window.location.href = "/woojin/projects/smart-catheter-system/";
            },},{id: "projects-sports-leadership-media-and-industry",
          title: 'sports leadership, media, and industry',
          description: "undergraduate experiences across student leadership, communication, and sports-industry practice.",
          section: "Projects",handler: () => {
              window.location.href = "/woojin/projects/sports-leadership-media-and-industry/";
            },},{id: "projects-international-engagement-and-service",
          title: 'international engagement and service',
          description: "student support, global events, and community-based volunteering.",
          section: "Projects",handler: () => {
              window.location.href = "/woojin/projects/international-engagement-and-service/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/woojin/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/woojin/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/woojin/assets/pdf/woojin_kwon_academic_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%72%61%70%69%6E%61%33%32%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/woojin/feed.xml", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sarapina322", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/www.linkedin.com/in/sarapina322", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/https://orcid.org/0009-0009-7697-0445", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
