"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateInput_1 = require("../../../inputs/ProjectsCreateInput");
let CreateOneProjectsArgs = class CreateOneProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateInput_1.ProjectsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateInput_1.ProjectsCreateInput)
], CreateOneProjectsArgs.prototype, "data", void 0);
CreateOneProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProjectsArgs);
exports.CreateOneProjectsArgs = CreateOneProjectsArgs;
