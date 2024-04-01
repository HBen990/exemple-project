export class Article
{
  language: string;
  articleDestinationID: string[] = [];
  paragraphs: {
    paragraphId: number[];
    paragraphTitle: string;
    paragraphDescription: string;
    paragraphDestinationId: string[];
  }[] = [];
  title: string = '';
  subtitle: string = '';
  description: string = '';

  constructor ()
  {
    this.title = '';
    this.subtitle = '';
    this.description = '';
    this.articleDestinationID = [];
    this.paragraphs = [];
    this.language = '';
  }

}
