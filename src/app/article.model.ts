export class Article
{
  lingua: string;
  destinationID: string[] = [];
  paragraphs: {
    paragraphId: number[];
    paragraphTitle: string;
    paragraphText: string;
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
    this.destinationID = [];
    this.paragraphs = [];
    this.lingua = '';
  }

}
