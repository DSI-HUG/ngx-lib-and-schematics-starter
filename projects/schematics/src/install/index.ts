import { Rule } from '@angular-devkit/schematics';

import { ensureIsAngularProject } from '../utility/angular';
import { addPackageJsonDependencies, packageInstallTask } from '../utility/package-json';
import { schematic } from '../utility/rules';
import { InstallOptions } from './install-options';

export default (_options: InstallOptions): Rule =>
    schematic('install', [
        ensureIsAngularProject(),
        addPackageJsonDependencies(['LIBRARY_NAME']),
        packageInstallTask()
    ]);
