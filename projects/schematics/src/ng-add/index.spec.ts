import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions, Style } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as SchematicOptions } from '../schema/schema.model';
import { Tree } from '@angular-devkit/schematics';
import { join } from 'path';

describe('Test - ngAdd schematic', () => {
    const collectionPath = join(__dirname, '../collection.json');
    const runner = new SchematicTestRunner('ngAdd schematic', collectionPath);
    let appTree: UnitTestTree;

    const workspaceOptions: WorkspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '0.0.0'
    };

    const appOptions: ApplicationOptions = {
        name: 'app-test',
        inlineStyle: false,
        inlineTemplate: false,
        routing: false,
        style: Style.Scss,
        skipTests: false,
        skipPackageJson: false,
    };

    const schematicOptions: SchematicOptions = {
        arg1: ''
    };

    /**
     * Create angular application before each test
     */
    beforeEach(async () => {
        appTree = await runner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise();
        appTree = await runner.runExternalSchematicAsync('@schematics/angular', 'application', appOptions, appTree).toPromise();
    });

    /**
     * Angular project should be required
     */
    it('should failed without an angular app', async () => {
        const tree$ = runner.runSchematicAsync('ng-add', schematicOptions, Tree.empty()).toPromise();
        await expectAsync(tree$).toBeRejected();
    });
});
