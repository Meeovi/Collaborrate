"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerAvgOrderByAggregateInput_1 = require("../inputs/SchedulerAvgOrderByAggregateInput");
const SchedulerCountOrderByAggregateInput_1 = require("../inputs/SchedulerCountOrderByAggregateInput");
const SchedulerMaxOrderByAggregateInput_1 = require("../inputs/SchedulerMaxOrderByAggregateInput");
const SchedulerMinOrderByAggregateInput_1 = require("../inputs/SchedulerMinOrderByAggregateInput");
const SchedulerSumOrderByAggregateInput_1 = require("../inputs/SchedulerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SchedulerOrderByWithAggregationInput = class SchedulerOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "public", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "permission", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerCountOrderByAggregateInput_1.SchedulerCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerCountOrderByAggregateInput_1.SchedulerCountOrderByAggregateInput)
], SchedulerOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerAvgOrderByAggregateInput_1.SchedulerAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerAvgOrderByAggregateInput_1.SchedulerAvgOrderByAggregateInput)
], SchedulerOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerMaxOrderByAggregateInput_1.SchedulerMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerMaxOrderByAggregateInput_1.SchedulerMaxOrderByAggregateInput)
], SchedulerOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerMinOrderByAggregateInput_1.SchedulerMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerMinOrderByAggregateInput_1.SchedulerMinOrderByAggregateInput)
], SchedulerOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerSumOrderByAggregateInput_1.SchedulerSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerSumOrderByAggregateInput_1.SchedulerSumOrderByAggregateInput)
], SchedulerOrderByWithAggregationInput.prototype, "_sum", void 0);
SchedulerOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchedulerOrderByWithAggregationInput", {
        isAbstract: true
    })
], SchedulerOrderByWithAggregationInput);
exports.SchedulerOrderByWithAggregationInput = SchedulerOrderByWithAggregationInput;
