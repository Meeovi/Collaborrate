"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsAvgOrderByAggregateInput_1 = require("../inputs/ProjectsAvgOrderByAggregateInput");
const ProjectsCountOrderByAggregateInput_1 = require("../inputs/ProjectsCountOrderByAggregateInput");
const ProjectsMaxOrderByAggregateInput_1 = require("../inputs/ProjectsMaxOrderByAggregateInput");
const ProjectsMinOrderByAggregateInput_1 = require("../inputs/ProjectsMinOrderByAggregateInput");
const ProjectsSumOrderByAggregateInput_1 = require("../inputs/ProjectsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProjectsOrderByWithAggregationInput = class ProjectsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "project_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "considerworkingdays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "project_template", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCountOrderByAggregateInput_1.ProjectsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCountOrderByAggregateInput_1.ProjectsCountOrderByAggregateInput)
], ProjectsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsAvgOrderByAggregateInput_1.ProjectsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsAvgOrderByAggregateInput_1.ProjectsAvgOrderByAggregateInput)
], ProjectsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsMaxOrderByAggregateInput_1.ProjectsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsMaxOrderByAggregateInput_1.ProjectsMaxOrderByAggregateInput)
], ProjectsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsMinOrderByAggregateInput_1.ProjectsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsMinOrderByAggregateInput_1.ProjectsMinOrderByAggregateInput)
], ProjectsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsSumOrderByAggregateInput_1.ProjectsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsSumOrderByAggregateInput_1.ProjectsSumOrderByAggregateInput)
], ProjectsOrderByWithAggregationInput.prototype, "_sum", void 0);
ProjectsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProjectsOrderByWithAggregationInput);
exports.ProjectsOrderByWithAggregationInput = ProjectsOrderByWithAggregationInput;
