import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions, Style } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { join } from 'path';

import { StarterOptions } from './starter-options';

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
    skipPackageJson: false
};

const schematicOptions: StarterOptions = {
    option1: 'option1'
};

const collectionPath = join(__dirname, '../collection.json');

const runner = new SchematicTestRunner('starter schematic', collectionPath);

const getCleanAppTree = async (): Promise<UnitTestTree> => {
    const workspaceTree = await runner
        .runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions)
        .toPromise();
    return await runner
        .runExternalSchematicAsync('@schematics/angular', 'application', appOptions, workspaceTree)
        .toPromise();
};

describe('Test - starter schematic', () => {
    /**
     * Angular project should be required
     */
    it('should failed without an angular app', async () => {
        const tree$ = runner.runSchematicAsync('starter', schematicOptions, Tree.empty()).toPromise();
        await expectAsync(tree$).toBeRejected();
    });

    /**
     * Schematics should work
     */
    describe('should update & create files', () => {
        let tree: UnitTestTree;
        let nbFiles: number;

        beforeAll(async () => {
            tree = await getCleanAppTree();
            nbFiles = tree.files.length;
            tree = await runner.runSchematicAsync('starter', schematicOptions, tree).toPromise();
        });

        it('should not create any new files', () => {
            expect(tree.files.length).toEqual(nbFiles);
        });
    });
});
