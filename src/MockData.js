import heroBg from './assets/images/hero-bg.jpg'
import presidentImg from './assets/images/president.jpg'
import teamImg from './assets/images/team.jpg';

export const MockData = {
    menuItems: [
        {
            'name': 'accueil',
            'slug': 'accueil',
            'type': 'link'
        },
        {
            'name': 'services',
            'slug': 'services',
            'type': 'link'
        },
        {
            'name': 'nos évènements',
            'slug': 'nos-evenements',
            'type': 'link'
        },
        {
            'name': 'pem n\'zassa',
            'slug': 'pem-n-zassa',
            'type': 'link'
        },
        {
            'name': 'nous contacter',
            'slug': 'nous-contacter',
            'type': 'link'
        },
        {
            'name': 'adhérez à la beluci',
            'slug': 'adherez-a-la-beluci',
            'type': 'button'
        }
    ],
    page: {
        '': {
            sectionList: [
                {
                    name: 'homeHero',
                    backgroundImgUrl: heroBg,
                    title: 'Chambre de commerce belge et luxembougeoise de côte d\'ivoire',
                    description: `La BELUCI a pour mission, entre autres, d’accompagner les sociétés belgo-luxembourgeoises souhaitant s'implanter en Côte d'Ivoire, d'apporter un appui aux entreprises belges installées localement, de soutenir les sociétés ivoiriennes souhaitant entrer en contact et travailler avec des entreprises belgo-luxembourgeoises, de représenter ses adhérents auprès des autorités ivoiriennes mais également de défendre leurs intérêts et de créer des rendez-vous de networking pour faciliter les contacts et ce dans une ambiance agréable. Adhérer à la BELUCI c'est ainsi vous donner la possibilité d’améliorer la compétitivité de votre entreprise, développer de nouvelles opportunités d'affaires et étendre votre réseau.`,
                    buttonText: 'Lire la suite'
                },
                {
                    name: 'homeEvent',
                    title: 'Nos évènements',
                    buttonText: 'Voir tous nos évènements',
                    buttonLink: '/',
                    events: [
                        {
                            image_url: heroBg,
                            title: 'Cocktail de networking spécial mission éconimique belge',
                            description: '',
                        }
                    ]
                },
                {
                    name: 'homePresident',
                    title: 'Mot du président',
                    description: ` « La BELUCI a construit et développé des relations professionnelles  durables depuis près de 40 ans de manière ininterrompue. Le réseau  développé en Côte d'Ivoire englobe les multinationales du BeLux, les  grandes entreprises et PME locales, les incubateurs, les Chambres de  commerces, ainsi que les institutions publiques, parapubliques et non  gouvernementales. En 2022, j'ai eu l'honneur d'intégrer le  Conseil de la BLCCA (Belgian-Luxembourg Chambers of Commerce abroad) en  tant qu'Administrateur, et Maximilien Lemaire, le fondateur de la BELUCI,  est membre du bureau central national de la Chambre de commerce du Grand-Duché  de Luxembourg, ce qui positionne donc La BELUCI également fortement sur la scène  internationale. C'est autour de cet aspect que j'ambitionne  d'orienter mon mandat en tant que Président de la Chambre belge et  luxembourgeoise de Côte d'Ivoire : être au cœur des synergies entre nos  3 pays afin de faire éclore des partenariats fructueux et de développer des alliances toujours plus solides. »`,
                    authorName: 'Pierre DECLERCK',
                    authorJob: 'Président',
                    authorImgUrl: presidentImg,
                },
                {
                    name: 'homeTeamList',
                    title: 'Présentation du conseil d\'administration',
                    teamMemberList: [
                        {
                            name: 'Pierre DECLERCK',
                            job: 'Président',
                            linkedinUrl: '',
                        },
                        {
                            name: 'Paulina ADEMOLA',
                            job: 'Assistante administrative',
                            linkedinUrl: '(+225) 07 07 40 96 72'
                        }
                    ]
                },
                {
                    name: 'homeTeamDetail',
                    title: 'Présentation du conseil d\'administration',
                    imageLandscapeUrl: teamImg,
                    imagePortraitUrl: presidentImg,
                    teamMemberList: [
                        {
                            name: 'Salomé YSEBAERT',
                            job: 'Responsable de l\'implémentation du projet PEM N\'ZASSA',
                            email: 'salmome.beluci@gmail.com',
                            phoneNumber: ''
                        },
                        {
                            name: 'Paulina ADEMOLA',
                            job: 'Assistante administrative',
                            email: 'secretariat.beluci@gmail.com',
                            phoneNumber: '(+225) 07 07 40 96 72'
                        }
                    ]
                }
            ]
        },
        'services': {
            sectionList: [
                {
                    name: 'titleHeader',
                    title: 'Nos Services',
                    backgroundImgUrl: heroBg
                },
                {
                    name: 'serviceSection',
                    title: 'Nous accompagnons nos membres dans le développement de leur entreprise',
                    description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir sur de nouveaux marchés et une toile de contacts professionels pour échanger avec des millires d\'entreprises à traveres le réseau des Chambres de Commerce et d\'industrie de Belgique, au Grand-Duché de Luxembourg et en Côte d\'Ivoire',
                    serviceList: [
                        {
                            number: '01',
                            title: 'Propositions d\'affaires',
                            description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir',
                        },
                        {
                            number: '02',
                            title: 'Networking',
                            description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir',
                        },
                        {
                            number: '03',
                            title: 'Accès continu',
                            description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir',
                        },
                        {
                            number: '04',
                            title: 'Informations & communications',
                            description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir',
                        },
                        {
                            number: '05',
                            title: 'Conseil & Acompagnement',
                            description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir',
                        },
                        {
                            number: '06',
                            title: 'Formations',
                            description: 'La BELUCI est un véritable facilitateur pour s\'ouvrir',
                        }
                    ]
                },
            ]
        },
        'pem-n-zassa': {
            sectionList: [
                {
                    name: 'titleHeader',
                    title: 'PEM N\'ZASSA',
                    backgroundImgUrl: heroBg
                },
                {
                    name: 'pemAboutSection',
                    title: 'A propos du projet :',
                    description: 'Depuis janvier 2024, la BELUCI s\'investit pleinement dans le projet PEM N\'ZASSA, une initiative visant à relier les écosystèmes entrepreneuriaux ivoirien et belge. Financé par l\'Union européenne et piloté par Enabel, l\'Agence belge de développement, ce projet met en avant les entrepreneurs, cherchant à créer des partenariats avantageux pour les entreprises des deux pays. Le PEM N\'ZASSA accompagne les entrepreneurs ivoiriens lors de leurs vovages d\'affaires en Belgique, facilitant ainsi leur intégration dans l\'écosystème belge. La mission de la BELUCI s\'aligne parfaitement avec les objectifs du projet PEM N\'ZASSA. Nous soutenons les sociétés belgo-luxembourgeoises désireuses de s\'implanter en Côte d\'Ivoire, apportons notre soutien aux entreprises belges déjà établies, et œuvrons à favoriser la collaboration entre les entreprises ivoiriennes et celles de la région belgo-luxembourgeoise. Nous organisons également des événements de réseautage visant à faciliter les échanges et à créer des opportunités de collaboration.',
                    backgroundImgUrl: presidentImg
                },
                {
                    name: 'pemFeatureSection',
                    title: 'Qu\'offre exactement le PEM N\'ZASSA ?',
                    featureList: [
                        {
                            number: '01',
                            description: 'Accès à des réseaux d\'entrepreneurs, d\'entreprises et d\'incubateurs en Côte d\'Ivoire et en Belgique.'
                        },
                        {
                            number: '02',
                            description: 'Un matching avec une ou plusieurs entreprises ivoiriennes ou belges après un processus de sélection rigoureux.'
                        },
                        {
                            number: '03',
                            description: 'Mise en relation avec les agences publiques ivoiriennes ou belges.'
                        },
                        {
                            number: '04',
                            description: 'Organisation d\'événements et de rencontres B2B avec des entrepreneurs ivoiriens et belges.'
                        }
                    ],
                    questionList: [
                        'Vous êtes entrepreneur basé en Belgique et intéressé par la Côte d\'Ivoire ?',
                        'Ou entrepreneur ivoirien intéressé par la Belgique ?'
                    ],
                    ctaList: [
                        'Alors, le projet PEM N\'ZASSA est fait pour vous !',
                        'Voici les différentes étapes :'
                    ],
                    stepList: [
                        {
                            number: 'Étape 1',
                            title: 'LE MATCHING',
                            description: 'Après votre inscription, nous vous mettons en relation avec un entrepreneur ivoirien ou belge actif dans votre secteur d\'activité sélectionné par un comité d\'experts. Si vous avez un intérêt mutuel à dévelooper un partenariat nous orgeniconc le vovece d\'affaires de l\'entrenreneur ivoirien en Beloique'
                        },
                        {
                            number: 'Étape 2',
                            title: 'LA RENCONTRE EN BELGIQUE',
                            description: 'Le vovage d\'affaires, entièrement financé par Enabel, vous permet de vous rencontrer directement en Belgique et de participer à plusieurs événements et rencontres B2B avec des entrepreneurs ivoiriens et belges.'
                        },
                        {
                            number: 'Étape 3',
                            title: 'LE SUIVI DU PARTENARIAT',
                            description: 'Le PEM soutient également le partenariat après le voyage d\'affaires. Compte tenu des agendas très chargés des entrepreneurs.l\'accompaanement du proiet reste flexible et adapté aux besoins des participants et de leur perteneriet'
                        },
                    ]
                },
            ]
        }
    }
}