"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesAvgOrderByAggregateInput_1 = require("../inputs/CasesAvgOrderByAggregateInput");
const CasesCountOrderByAggregateInput_1 = require("../inputs/CasesCountOrderByAggregateInput");
const CasesMaxOrderByAggregateInput_1 = require("../inputs/CasesMaxOrderByAggregateInput");
const CasesMinOrderByAggregateInput_1 = require("../inputs/CasesMinOrderByAggregateInput");
const CasesSumOrderByAggregateInput_1 = require("../inputs/CasesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CasesOrderByWithAggregationInput = class CasesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "case_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesOrderByWithAggregationInput.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCountOrderByAggregateInput_1.CasesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesCountOrderByAggregateInput_1.CasesCountOrderByAggregateInput)
], CasesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesAvgOrderByAggregateInput_1.CasesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesAvgOrderByAggregateInput_1.CasesAvgOrderByAggregateInput)
], CasesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesMaxOrderByAggregateInput_1.CasesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesMaxOrderByAggregateInput_1.CasesMaxOrderByAggregateInput)
], CasesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesMinOrderByAggregateInput_1.CasesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesMinOrderByAggregateInput_1.CasesMinOrderByAggregateInput)
], CasesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesSumOrderByAggregateInput_1.CasesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesSumOrderByAggregateInput_1.CasesSumOrderByAggregateInput)
], CasesOrderByWithAggregationInput.prototype, "_sum", void 0);
CasesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CasesOrderByWithAggregationInput", {
        isAbstract: true
    })
], CasesOrderByWithAggregationInput);
exports.CasesOrderByWithAggregationInput = CasesOrderByWithAggregationInput;
