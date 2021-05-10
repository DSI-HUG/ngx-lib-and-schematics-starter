import { Rule } from '@angular-devkit/schematics';

import { addPackageJsonDependencies, packageInstallTask } from '../utility/package-json';
import { schematic } from '../utility/rules';
import { NgAddOptions } from './ng-add-options';

export default (_options: NgAddOptions): Rule =>
    schematic('ng-add', [
        addPackageJsonDependencies(['LIBRARY_NAME']),
        packageInstallTask()
    ]);
