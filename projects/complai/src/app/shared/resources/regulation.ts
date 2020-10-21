import { Publisher } from './publisher';
import { Category } from './category';

export class Regulation {
  title: string;
  publisher: Publisher;
  categories: Array<Category>;
  relevacny_score: number;
}

export enum RegulationStatus {
  Bookmarked = 1,
  Inprogress = 2,
  Compliant = 3,
  Otherwise = 0
}

export let regulationStatusToString = function (status: number): string {
  if (status === 2) {
    return 'In Progress';
  } else {
    return RegulationStatus[status];
  }
};

export class RegulationSummary {
  id: number;
  title: string;
  subTitle: string;
  status: RegulationStatus;
  application_area: string;
  industry: string;
  type_of_commitment: string;
  enforcement_date: string;
  publisher: string;
  publishedDate: string;
  summarized_regulation: string;
  aims: string[];
  key_points: string[];
  apply_date: string;
  backgrounds: string[];
  key_terms: string[];
  main_documents: string[];
  related_documents: string[];
  pdfUrl: string;
  tags: string[];
  type_of_act: string;
}
