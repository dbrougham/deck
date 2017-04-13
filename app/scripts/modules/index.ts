import {Type} from '@angular/core';

import {IDowngradeItem} from 'core/domain/IDowngradeItem';
import {CORE_MODULE_DOWNGRADES, CORE_DIRECTIVE_UPGRADES} from './core';

export const SPINNAKER_DOWNGRADES: IDowngradeItem[] = [
  ...CORE_MODULE_DOWNGRADES
];

export const SPINNAKER_DIRECTIVE_UPGRADES: Type<any>[] = [
  ...CORE_DIRECTIVE_UPGRADES
];
