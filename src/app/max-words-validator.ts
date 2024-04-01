import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxWordsValidator(maxWords: number): ValidatorFn
{
  return (control: AbstractControl): { [key: string]: any } | null =>
  {
    if (!control.value) {
      return null;  // return null if there's no value
    }

    const words = control.value.trim().split(/\s+/).length;  // count words

    return words > maxWords ? { 'maxWordsExceeded': true } : null;
  };
}