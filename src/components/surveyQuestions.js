export const questions = [
  {
    id: "Poste",
    text: "Zone de l'enquête",
    options: [
      { id: 1, text: "Gare RER C", next: "Q1" },
      { id: 2, text: "Station T12", next: "Q1" },
    ]
  },
  {
    id: "Q1",
    text: "De quelle commune venez vous ?",
    options: [
      { id: 1, text: "Epinay (préciser quartier)", next: "Q1_quartier" },
      { id: 2, text: "Savigny-sur-Orge", next: "Q2" },
      { id: 3, text: "Sainte-Geneviève-des-Bois", next: "Q2" },
      { id: 4, text: "Morsang-sur-Orge", next: "Q2" },
      { id: 5, text: "Evry-Courcouronnes", next: "Q2" },
      { id: 6, text: "Paris (préciser l'arrondissement)", next: "Q1_arrondissement" },
      { id: 7, text: "Viry-Châtillon", next: "Q2" },
      { id: 8, text: "Saint-Michel-sur-Orge", next: "Q2" },
      { id: 9, text: "Villemoisson-sur-Orge", next: "Q2" },
      { id: 10, text: "Autre commune", next: "Q1_autre" }
    ]
  },
  {
    id: "Q1_quartier",
    text: "Précisez le quartier",
    options: [
      { id: 1, text: "Mauregard", next: "Q2" },
      { id: 2, text: "Templiers - Croix-Ronde - Terrasse", next: "Q2" },
      { id: 3, text: "Centre-ville - Hauts Graviers - Petit vaux", next: "Q2" },
      { id: 4, text: "Breuil - Sablons", next: "Q2" },
      { id: 5, text: "Gares", next: "Q2" }
    ]
  },
  {
    id: "Q1_arrondissement",
    text: "Précisez l'arrondissement",
    freeText: true,
    next: "Q2"
  },
  {
    id: "Q1_autre",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "Q2"
  },
  {
    id: "Q2",
    text: "Ce lieu est-il… ?",
    options: [
      { id: 1, text: "Votre domicile", next: "Q3" },
      { id: 2, text: "Votre lieu de travail habituel", next: "Q3" },
      { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q3" },
      { id: 4, text: "Votre établissement scolaire, université", next: "Q3" },
      { id: 5, text: "Un lieu d'achats, courses, …", next: "Q3" },
      { id: 6, text: "Un lieu de loisirs / tourisme / hôtel", next: "Q3" },
      { id: 7, text: "Autre", next: "Q2_autre" }
    ]
  },
  {
    id: "Q2_autre",
    text: "Précisez",
    freeText: true,
    next: "Q3"
  },
  {
    id: "Q3",
    text: "Dans quelle commune vous rendez vous ?",
    options: [
      { id: 1, text: "Epinay (préciser quartier)", next: "Q3_quartier" },
      { id: 2, text: "Massy", next: "Q4" },
      { id: 3, text: "Evry-Courcouronnes", next: "Q4" },
      { id: 4, text: "Paris (préciser l'arrondissement)", next: "Q3_arrondissement" },
      { id: 5, text: "Longjumeau", next: "Q4" },
      { id: 6, text: "Rungis", next: "Q4" },
      { id: 7, text: "Savigny-sur-Orge", next: "Q4" },
      { id: 8, text: "Chilly-Mazarin", next: "Q4" },
      { id: 9, text: "Sainte-Geneviève-des-Bois", next: "Q4" },
      { id: 10, text: "Autre commune", next: "Q3_autre" }
    ]
  },
  {
    id: "Q3_quartier",
    text: "Précisez le quartier",
    options: [
      { id: 1, text: "Mauregard", next: "Q4" },
      { id: 2, text: "Templiers - Croix-Ronde - Terrasse", next: "Q4" },
      { id: 3, text: "Centre-ville - Hauts Graviers - Petit vaux", next: "Q4" },
      { id: 4, text: "Breuil - Sablons", next: "Q4" },
      { id: 5, text: "Gares", next: "Q4" }
    ]
  },
  {
    id: "Q3_arrondissement",
    text: "Précisez l'arrondissement",
    freeText: true,
    next: "Q4"
  },
  {
    id: "Q3_autre",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "Q4"
  },{
    id: "Q4",
    text: "Ce lieu est-il… ?",
    options: [
      { id: 1, text: "Votre domicile", next: "Q5" },
      { id: 2, text: "Votre lieu de travail habituel", next: "Q5" },
      { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q5" },
      { id: 4, text: "Votre établissement scolaire, université", next: "Q5" },
      { id: 5, text: "Un lieu d'achats, courses, …", next: "Q5" },
      { id: 6, text: "Un lieu de loisirs / tourisme / hôtel", next: "Q5" },
      { id: 7, text: "Autre", next: "Q4_autre" }
    ]
  },
  {
    id: "Q4_autre",
    text: "Précisez",
    freeText: true,
    next: "Q5"
  },
  {
    id: "Q5",
    text: "Par quel mode de transport principal êtes-vous arrivés à la gare ?",
    options: [
      { id: 1, text: "A pied exclusivement", next: "Q9" },
      { id: 2, text: "En bus/car", next: "Q9" },
      { id: 3, text: "En voiture conducteur", next: "Q6" },
      { id: 4, text: "En voiture passager (dans une voiture stationnée en gare - covoiturage)", next: "Q9" },
      { id: 5, text: "En voiture passager (dans une voiture non stationnée en gare - dépose)", next: "Q9" },
      { id: 6, text: "En vélo", next: "Q9" },
      { id: 7, text: "En trottinette", next: "Q9" },
      { id: 8, text: "En deux-roues motorisés", next: "Q6" },
      { id: 9, text: "Autre", next: "Q5_autre" }
    ]
  },
  {
    id: "Q5_autre",
    text: "Précisez",
    freeText: true,
    next: "Q9"
  },
  {
    id: "Q6",
    text: "Avez-vous rencontré des difficultés pour vous stationner ?",
    options: [
      { id: 1, text: "Oui", next: "Q7" },
      { id: 2, text: "Non", next: "Q7" }
    ]
  },
  {
    id: "Q7",
    text: "Où avez-vous stationné votre véhicule ?",
    options: [
      { id: 1, text: "Parking du RERC", next: "Q8" },
      { id: 2, text: "Parking du T12", next: "Q8" },
      { id: 3, text: "Parking du centre-commercial Carrefour", next: "Q8" },
      { id: 4, text: "Une des rues proche de la Gare", next: "Q8" },
      { id: 5, text: "Autre", next: "Q7_autre" }
    ]
  },
  {
    id: "Q7_autre",
    text: "Précisez",
    freeText: true,
    next: "Q8"
  },
  {
    id: "Q8",
    text: "Seriez-vous prêt à payer pour stationner, si vous avez la garantie de trouver une place ?",
    options: [
      { id: 1, text: "Oui", next: "Q8_montant" },
      { id: 2, text: "Non", next: "Q9" }
    ]
  },
  {
    id: "Q8_montant",
    text: "Si oui, combien par mois ?",
    freeText: true,
    next: "Q9"
  },
  {
    id: "Q9",
    text: "Quel mode allez-vous utiliser ensuite pour vous rendre à votre destination finale?",
    options: [
      { id: 1, text: "A pied exclusivement", next: "Q10" },
      { id: 2, text: "En bus/car", next: "Q10" },
      { id: 3, text: "En voiture conducteur", next: "Q10" },
      { id: 4, text: "En voiture passager (dans une voiture stationnée en gare - covoiturage)", next: "Q10" },
      { id: 5, text: "En voiture passager (dans une voiture non stationnée en gare - dépose)", next: "Q10" },
      { id: 6, text: "En vélo", next: "Q10" },
      { id: 7, text: "En trottinette", next: "Q10" },
      { id: 8, text: "En deux-roues motorisés", next: "Q10" },
      { id: 9, text: "Autre", next: "Q9_autre" }
    ]
  },
  {
    id: "Q9_autre",
    text: "Précisez",
    freeText: true,
    next: "Q10"
  },
  {
    id: "Q10",
    text: "A quelle fréquence vous rendez vous à la Gare d'Epinay ?",
    options: [
      { id: 1, text: "Tous les jours (7/7j)", next: "Q11" },
      { id: 2, text: "Régulièrement (5-6 fois par semaine)", next: "Q11" },
      { id: 3, text: "Souvent (3-4 fois par semaine)", next: "Q11" },
      { id: 4, text: "De temps en temps (1-2 fois par semaine)", next: "Q11" },
      { id: 5, text: "Occasionnellement (moins d'1 fois par semaine)", next: "Q11" },
      { id: 6, text: "Rarement (1 fois à quelques fois par an)", next: "Q11" },
      { id: 7, text: "C'est la première fois", next: "Q11" }
    ]
  },
  {
    id: "Q11",
    text: "[A REMPLIR PAR ALYCE] S'agit-il d'une Personne à Mobilité Réduite (personne en fauteuil roulant/béquilles/prothèse, personnes âgées, femme enceinte, parent avec pousette, handicap sensoriel) ?",
    options: [
      { id: 1, text: "Oui", next: "end" },
      { id: 2, text: "Non", next: "end" }
    ]
  }
];