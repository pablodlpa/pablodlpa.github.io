// Add a publication by copying one entry. `year` is omitted for manuscripts under review.
// Wrap italic parts of a title in *asterisks*.
export type Publication = {
  authors: string;
  year?: number;
  title: string;
  venue: string;
  details?: string;
  url?: string;
  status: 'published' | 'in-review' | 'preprint';
};

export const publications: Publication[] = [
  {
    authors: 'Thonis, A, et al.',
    title: 'Is species distribution modelling converging as a field? Consensus and divergence among teams in a blinded experiment.',
    venue: 'Global Change Biology',
    status: 'in-review',
  },
  {
    authors: 'Peña-Aguilera, P. (corresponding author) & Jiménez-Valverde, A.',
    title: 'Harmonizing AUC reveals hidden biases in species distribution model transferability.',
    venue: 'Methods in Ecology and Evolution',
    status: 'in-review',
  },
  {
    authors: 'Peña-Aguilera, P. (corresponding author), Parisy, B., Stewart, L., Vesterinen, E., Wirta, H. & Roslin, T.',
    year: 2026,
    title: 'Differential patterns in β-diversity among plants, soil fungi and insects across two subarctic landscapes.',
    venue: 'Global Ecology and Biogeography',
    details: '35(11), e70325',
    url: 'https://doi.org/10.1111/geb.70325',
    status: 'published',
  },
  {
    authors: 'Peña-Aguilera, P. (corresponding author), Schmidt, N. M., Van Der Wal, R., Maclean, I. M. & Roslin, T.',
    year: 2026,
    title: 'Alpha diversity patterns are unmatched by beta diversity across productivity gradients of the subarctic.',
    venue: 'Ecosphere',
    details: '17(3), e70581',
    url: 'https://doi.org/10.1002/ecs2.70581',
    status: 'published',
  },
  {
    authors: 'Niittynen, P., Salminen, H., Peña-Aguilera, P., et al.',
    year: 2024,
    title: 'A gridded microclimate dataset from a Sub-Arctic biodiversity hotspot in Finland.',
    venue: 'bioRxiv',
    details: 'under revision in Geoscience Data Journal',
    url: 'https://doi.org/10.1101/2024.03.30.587419',
    status: 'preprint',
  },
  {
    authors: 'Van Dijk, L., et al.',
    year: 2026,
    title: 'Spatial and temporal synchrony between insect guilds and their parasitoids.',
    venue: 'Journal of Animal Ecology',
    details: '95(4), 712–726',
    url: 'https://doi.org/10.1111/1365-2656.70228',
    status: 'published',
  },
  {
    authors: 'Cirtwill, A. R., Roslin, T., Peña-Aguilera, P., et al.',
    year: 2025,
    title: 'The Latitudinal Biotic Interaction Hypothesis revisited: contrasting latitudinal richness gradients in actively vs. passively accumulated interaction partners of honey bees.',
    venue: 'BMC Ecology and Evolution',
    details: '25, 24',
    url: 'https://doi.org/10.1186/s12862-025-02363-1',
    status: 'published',
  },
  {
    authors: 'Hartop, E., Lee, L., Srivathsan, A., Jones, M., Peña-Aguilera, P., Ovaskainen, O., Roslin, T. & Meier, R.',
    year: 2024,
    title: 'Resolving biology’s dark matter: species richness, spatiotemporal distribution, and community composition of a dark taxon.',
    venue: 'BMC Biology',
    details: '22, 215',
    url: 'https://doi.org/10.1186/s12915-024-02010-z',
    status: 'published',
  },
  {
    authors: 'Kemppinen, J., et al.',
    year: 2024,
    title: 'Microclimate, an important part of ecology and biogeography.',
    venue: 'Global Ecology and Biogeography',
    details: '33(6), e13834',
    url: 'https://doi.org/10.1111/geb.13834',
    status: 'published',
  },
  {
    authors: 'Peña-Aguilera, P. (corresponding author), et al.',
    year: 2023,
    title: 'Consistent imprints of elevation, soil temperature and moisture on plant and arthropod communities across two subarctic landscapes.',
    venue: 'Insect Conservation and Diversity',
    details: '16(5), 684–700',
    url: 'https://doi.org/10.1111/icad.12667',
    status: 'published',
  },
  {
    authors: 'Wirta, H., Jones, M., Peña-Aguilera, P., Chacón-Duque, C., et al.',
    year: 2023,
    title: 'The role of seasonality in shaping the interactions of honeybees with other taxa.',
    venue: 'Ecology and Evolution',
    details: '13(10)',
    url: 'https://doi.org/10.1002/ece3.10580',
    status: 'published',
  },
  {
    authors: 'Schmidt, N. M., et al.',
    year: 2023,
    title: 'Little directional change in the timing of Arctic spring phenology over the past 25 years.',
    venue: 'Current Biology',
    details: '33(15), 3244–3249',
    url: 'https://doi.org/10.1016/j.cub.2023.06.038',
    status: 'published',
  },
  {
    authors: 'Ortuño, V. M., Arribas, O., Muñoz-Santiago, J. & Peña-Aguilera, P.',
    year: 2021,
    title: 'A case of allopatric speciation in the Central System (Iberian Peninsula): *Leistus elpis* sp. nov., a sibling species of *Leistus constrictus* (Coleoptera, Carabidae).',
    venue: 'Zootaxa',
    details: '4995(3), 452–470',
    url: 'https://doi.org/10.11646/zootaxa.4995.3.3',
    status: 'published',
  },
  {
    authors: 'Jiménez-Valverde, A., Rodriguez-Rey, M. & Peña-Aguilera, P.',
    year: 2021,
    title: 'Climate data source matters in species distribution modelling: the case of the Iberian Peninsula.',
    venue: 'Biodiversity and Conservation',
    details: '30, 67–84',
    url: 'https://doi.org/10.1007/s10531-020-02075-6',
    status: 'published',
  },
  {
    authors: 'Jiménez-Valverde, A., Peña-Aguilera, P., Barve, V. & Burguillo-Madrid, L.',
    year: 2019,
    title: 'Photo-sharing platforms key for characterising niche and distribution in poorly studied taxa.',
    venue: 'Insect Conservation and Diversity',
    details: '12(5), 389–403',
    url: 'https://doi.org/10.1111/icad.12351',
    status: 'published',
  },
  {
    authors: 'Peña-Aguilera, P. (corresponding author), et al.',
    year: 2019,
    title: 'Niche segregation in Iberian Argiope species.',
    venue: 'The Journal of Arachnology',
    details: '47(1), 37–44',
    url: 'https://doi.org/10.1636/0161-8202-47.1.37',
    status: 'published',
  },
];

/** Split an author string into "Surname, I." names; "et al." co-authors are not listed. */
export const authorList = (s: string): string[] =>
  [...s.replace(/\s*\(corresponding author\)|,?\s*et al\.?/g, '').matchAll(/([^,&\s][^,&]*?),\s*([A-Z]\.?(?:\s?-?\s?[A-Z]\.)*)/g)].map(
    (m) => `${m[1].trim()}, ${m[2].replace(/\s+/g, ' ').replace(/([A-Z])$/, '$1.')}`,
  );
