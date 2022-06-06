"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsOrderByWithRelationInput_1 = require("../../../inputs/ProjectsOrderByWithRelationInput");
const ProjectsWhereInput_1 = require("../../../inputs/ProjectsWhereInput");
const ProjectsWhereUniqueInput_1 = require("../../../inputs/ProjectsWhereUniqueInput");
const ProjectsScalarFieldEnum_1 = require("../../../../enums/ProjectsScalarFieldEnum");
let FindFirstProjectsArgs = class FindFirstProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], FindFirstProjectsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsOrderByWithRelationInput_1.ProjectsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProjectsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereUniqueInput_1.ProjectsWhereUniqueInput)
], FindFirstProjectsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProjectsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProjectsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsScalarFieldEnum_1.ProjectsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProjectsArgs.prototype, "distinct", void 0);
FindFirstProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstProjectsArgs);
exports.FindFirstProjectsArgs = FindFirstProjectsArgs;
