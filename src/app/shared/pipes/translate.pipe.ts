import { Pipe, PipeTransform } from '@angular/core';
import { appConfig } from '../../app.config'
import { enValues } from '@core/localization/en.locale';
import { faValues } from '@core/localization/fa.locale';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  transform(key: string): string {
    return appConfig.locale === 'en' ? enValues[key] : faValues[key];
  }
}
