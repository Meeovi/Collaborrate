"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsOrderByWithAggregationInput_1 = require("../../../inputs/ProjectsOrderByWithAggregationInput");
const ProjectsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProjectsScalarWhereWithAggregatesInput");
const ProjectsWhereInput_1 = require("../../../inputs/ProjectsWhereInput");
const ProjectsScalarFieldEnum_1 = require("../../../../enums/ProjectsScalarFieldEnum");
let GroupByProjectsArgs = class GroupByProjectsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], GroupByProjectsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsOrderByWithAggregationInput_1.ProjectsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProjectsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectsScalarFieldEnum_1.ProjectsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProjectsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsScalarWhereWithAggregatesInput_1.ProjectsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsScalarWhereWithAggregatesInput_1.ProjectsScalarWhereWithAggregatesInput)
], GroupByProjectsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProjectsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProjectsArgs.prototype, "skip", void 0);
GroupByProjectsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProjectsArgs);
exports.GroupByProjectsArgs = GroupByProjectsArgs;
