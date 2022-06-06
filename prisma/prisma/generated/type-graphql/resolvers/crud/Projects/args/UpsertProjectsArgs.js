"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateInput_1 = require("../../../inputs/ProjectsCreateInput");
const ProjectsUpdateInput_1 = require("../../../inputs/ProjectsUpdateInput");
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let UpsertProjectsArgs = class UpsertProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], UpsertProjectsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateInput_1.ProjectsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateInput_1.ProjectsCreateInput)
], UpsertProjectsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateInput_1.ProjectsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateInput_1.ProjectsUpdateInput)
], UpsertProjectsArgs.prototype, "update", void 0);
UpsertProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertProjectsArgs);
exports.UpsertProjectsArgs = UpsertProjectsArgs;
