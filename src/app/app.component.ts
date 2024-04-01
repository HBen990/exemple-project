import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { maxWordsValidator } from './max-words-validator';
import { Article, } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit
{
  constructor (private fb: FormBuilder)
  {
    this.paragraphArray = this.fb.array([]);
    this.articleForm = this.fb.group({
      selectedLanguage: [this.selectedLanguage, Validators.required],
      title: ['', [Validators.required, this.validateWordCount(15)]],
      subtitle: ['', [Validators.required, this.validateWordCount(17)]],
      description: ['', [Validators.required]],
      articleDestinationID: [[], [Validators.required]],
      paragraphs: this.paragraphArray
    });
    this.addParagraph();
  }

  articleForm: FormGroup;
  paragraphArray: FormArray;
  article: Article = new Article();
  languageOptions = [
    { label: 'Italiano', value: 'italiano' },
    { label: 'Inglese', value: 'inglese' },
    { label: 'Francese', value: 'francese' },
    { label: 'Tedesco', value: 'tedesco' },
    { label: 'Spagnolo', value: 'spagnolo' }
  ];
  selectedLanguage = 'italiano';
  articleCities: string[] = [];
  formSubmitted = false;
  title: string = "";
  ngOnInit(): void
  {

  }

  onLanguageChange(event: any): void
  {
    this.selectedLanguage = event.value;
  }

  validateWordCount(maxWords: number)
  {
    return (control: any) =>
    {
      const value = control.value;
      const words = value ? value.split(/\s+/) : 0;
      return words && words.length > maxWords ? { 'maxWordsExceeded': true } : null;
    };
  }

  createParagraph(): FormGroup
  {
    return this.fb.group({
      paragraphTitle: ['', Validators.required],
      paragraphDescription: ['', Validators.required],
      paragraphDestinationID: ['', Validators.required],

      // altri campi per il paragrafo
    });
  }

  addParagraph(): void
  {
    this.paragraphArray.push(this.createParagraph());
  }

  get paragraphs(): FormArray
  {
    return this.articleForm.get('paragraphs') as FormArray;
  }

  resetParagraph(paragraphIndex: number): void
  {
    const paragraphsArray = this.articleForm.get('paragraphs') as FormArray;
    const paragraphGroup = paragraphsArray.at(paragraphIndex);
    paragraphGroup.reset();
    this.formSubmitted = false;
  }





















  saveArticle()
  {
    this.formSubmitted = true;
    if (this.articleForm.valid) {
      const articleData = new Article();
      const cities = this.articleForm.value.articleDestinationID.split(' ').map((city: string) => city.trim());
      articleData.language = this.selectedLanguage;
      articleData.articleDestinationID = cities;
      articleData.title = this.articleForm.value.title;
      articleData.subtitle = this.articleForm.value.subtitle;
      articleData.description = this.articleForm.value.description;

      const paragraphsArray = this.articleForm.get('paragraphs') as FormArray;
      const paragraphs = paragraphsArray.controls.map((control, index) =>
      {
        const paragraph = control.value;
        paragraph.paragraphId = index + 1; // Assegna un paragraphId incrementale
        if (typeof paragraph.paragraphDestinationID === 'string') {
          const destinations: string[] = paragraph.paragraphDestinationID.split(' ').filter(Boolean).map((destination: string) => destination.trim());
          paragraph.paragraphDestinationID = destinations;
        }
        return paragraph;
      });

      articleData.paragraphs = paragraphs;

      console.log(articleData);



      // Salva l'oggetto article in sessionStorage
      sessionStorage.setItem('articolo', JSON.stringify(articleData));

      console.log('Articolo salvato con successo:', articleData);
    }
  }


}
