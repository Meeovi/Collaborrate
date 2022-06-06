"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesAvgOrderByAggregateInput_1 = require("../inputs/Project_templatesAvgOrderByAggregateInput");
const Project_templatesCountOrderByAggregateInput_1 = require("../inputs/Project_templatesCountOrderByAggregateInput");
const Project_templatesMaxOrderByAggregateInput_1 = require("../inputs/Project_templatesMaxOrderByAggregateInput");
const Project_templatesMinOrderByAggregateInput_1 = require("../inputs/Project_templatesMinOrderByAggregateInput");
const Project_templatesSumOrderByAggregateInput_1 = require("../inputs/Project_templatesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Project_templatesOrderByWithAggregationInput = class Project_templatesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "consider_working_days", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "project_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Project_templatesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesCountOrderByAggregateInput_1.Project_templatesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesCountOrderByAggregateInput_1.Project_templatesCountOrderByAggregateInput)
], Project_templatesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesAvgOrderByAggregateInput_1.Project_templatesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesAvgOrderByAggregateInput_1.Project_templatesAvgOrderByAggregateInput)
], Project_templatesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesMaxOrderByAggregateInput_1.Project_templatesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesMaxOrderByAggregateInput_1.Project_templatesMaxOrderByAggregateInput)
], Project_templatesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesMinOrderByAggregateInput_1.Project_templatesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesMinOrderByAggregateInput_1.Project_templatesMinOrderByAggregateInput)
], Project_templatesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesSumOrderByAggregateInput_1.Project_templatesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Project_templatesSumOrderByAggregateInput_1.Project_templatesSumOrderByAggregateInput)
], Project_templatesOrderByWithAggregationInput.prototype, "_sum", void 0);
Project_templatesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Project_templatesOrderByWithAggregationInput);
exports.Project_templatesOrderByWithAggregationInput = Project_templatesOrderByWithAggregationInput;
