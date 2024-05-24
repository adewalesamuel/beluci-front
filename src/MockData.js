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
                    backgroundImage: heroBg,
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
        }
    }
}