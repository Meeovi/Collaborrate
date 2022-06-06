"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateInput_1 = require("../../../inputs/ProjectsCreateInput");
let CreateProjectsArgs = class CreateProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateInput_1.ProjectsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateInput_1.ProjectsCreateInput)
], CreateProjectsArgs.prototype, "data", void 0);
CreateProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProjectsArgs);
exports.CreateProjectsArgs = CreateProjectsArgs;
