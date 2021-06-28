// import { chain, Rule, Tree } from '@angular-devkit/schematics';
// import { ensureIsAngularProject, getDefaultProjectOutputPath } from '../utility/angular';
// import { deployFiles, modifyJson } from '../utility/file';
// import { addPackageJsonDependencies, packageInstallTask } from '../utility/package-json';

import { Rule, Tree } from '@angular-devkit/schematics';

import { ensureIsAngularProject } from '../utility/angular';
import { schematic } from '../utility/rules';
import { StarterOptions } from './starter-options';

export default (options: StarterOptions): Rule =>
    (_tree: Tree): Rule =>
        schematic('starter', [
            ensureIsAngularProject()
            // deployFiles(options),
            // modifyJson('tsconfig.json', ['compilerOptions', 'resolveJsonModule'], true),
            // chain([
            //    addPackageJsonDependencies([]),
            //    packageInstallTask()
            // ])
        ], options);
