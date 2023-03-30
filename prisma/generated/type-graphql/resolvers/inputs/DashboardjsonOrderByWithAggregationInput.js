"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonAvgOrderByAggregateInput_1 = require("../inputs/DashboardjsonAvgOrderByAggregateInput");
const DashboardjsonCountOrderByAggregateInput_1 = require("../inputs/DashboardjsonCountOrderByAggregateInput");
const DashboardjsonMaxOrderByAggregateInput_1 = require("../inputs/DashboardjsonMaxOrderByAggregateInput");
const DashboardjsonMinOrderByAggregateInput_1 = require("../inputs/DashboardjsonMinOrderByAggregateInput");
const DashboardjsonSumOrderByAggregateInput_1 = require("../inputs/DashboardjsonSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardjsonOrderByWithAggregationInput = class DashboardjsonOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithAggregationInput.prototype, "definition", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithAggregationInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonCountOrderByAggregateInput_1.DashboardjsonCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonCountOrderByAggregateInput_1.DashboardjsonCountOrderByAggregateInput)
], DashboardjsonOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonAvgOrderByAggregateInput_1.DashboardjsonAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonAvgOrderByAggregateInput_1.DashboardjsonAvgOrderByAggregateInput)
], DashboardjsonOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonMaxOrderByAggregateInput_1.DashboardjsonMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonMaxOrderByAggregateInput_1.DashboardjsonMaxOrderByAggregateInput)
], DashboardjsonOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonMinOrderByAggregateInput_1.DashboardjsonMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonMinOrderByAggregateInput_1.DashboardjsonMinOrderByAggregateInput)
], DashboardjsonOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonSumOrderByAggregateInput_1.DashboardjsonSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonSumOrderByAggregateInput_1.DashboardjsonSumOrderByAggregateInput)
], DashboardjsonOrderByWithAggregationInput.prototype, "_sum", void 0);
DashboardjsonOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonOrderByWithAggregationInput", {
        isAbstract: true
    })
], DashboardjsonOrderByWithAggregationInput);
exports.DashboardjsonOrderByWithAggregationInput = DashboardjsonOrderByWithAggregationInput;
