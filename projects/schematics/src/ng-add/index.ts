import { Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { JSONFile } from '@schematics/angular/utility/json-file';

import { Schema } from '../schema/schema.model';

const isAngularProject = (tree: Tree): boolean => {
    const angularJson = new JSONFile(tree, 'angular.json');
    if (!angularJson) {
        throw new SchematicsException('Project is not an angular project.');
    }
    return true;
};

export const ngAdd = (options: Schema): Rule =>
    (tree: Tree, context: SchematicContext): Tree => {
        context.logger.debug('ngAdd', options);

        if (isAngularProject(tree)) {
            context.addTask(new NodePackageInstallTask());
        }

        return tree;
    };
