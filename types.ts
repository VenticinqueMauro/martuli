
export interface LegacyItem {
  name: string;
  role: string;
  image?: string;
  description: string;
  placeholderText?: string;
}

export interface ArticleData {
  title: string;
  subtitle: string;
  content: string;
}

export enum NewspaperSection {
  PORTADA = 'PORTADA',
  LEGADO = 'LEGADO',
  RECUERDOS = 'RECUERDOS'
}
