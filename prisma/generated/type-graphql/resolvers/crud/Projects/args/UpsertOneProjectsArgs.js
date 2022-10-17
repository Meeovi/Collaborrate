"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateInput_1 = require("../../../inputs/ProjectsCreateInput");
const ProjectsUpdateInput_1 = require("../../../inputs/ProjectsUpdateInput");
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
let UpsertOneProjectsArgs = class UpsertOneProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], UpsertOneProjectsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateInput_1.ProjectsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateInput_1.ProjectsCreateInput)
], UpsertOneProjectsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateInput_1.ProjectsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateInput_1.ProjectsUpdateInput)
], UpsertOneProjectsArgs.prototype, "update", void 0);
UpsertOneProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProjectsArgs);
exports.UpsertOneProjectsArgs = UpsertOneProjectsArgs;
