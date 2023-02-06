"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiAvgOrderByAggregateInput_1 = require("../inputs/DashboardrestapiAvgOrderByAggregateInput");
const DashboardrestapiCountOrderByAggregateInput_1 = require("../inputs/DashboardrestapiCountOrderByAggregateInput");
const DashboardrestapiMaxOrderByAggregateInput_1 = require("../inputs/DashboardrestapiMaxOrderByAggregateInput");
const DashboardrestapiMinOrderByAggregateInput_1 = require("../inputs/DashboardrestapiMinOrderByAggregateInput");
const DashboardrestapiSumOrderByAggregateInput_1 = require("../inputs/DashboardrestapiSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardrestapiOrderByWithAggregationInput = class DashboardrestapiOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "authenticationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiCountOrderByAggregateInput_1.DashboardrestapiCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiCountOrderByAggregateInput_1.DashboardrestapiCountOrderByAggregateInput)
], DashboardrestapiOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiAvgOrderByAggregateInput_1.DashboardrestapiAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiAvgOrderByAggregateInput_1.DashboardrestapiAvgOrderByAggregateInput)
], DashboardrestapiOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiMaxOrderByAggregateInput_1.DashboardrestapiMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiMaxOrderByAggregateInput_1.DashboardrestapiMaxOrderByAggregateInput)
], DashboardrestapiOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiMinOrderByAggregateInput_1.DashboardrestapiMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiMinOrderByAggregateInput_1.DashboardrestapiMinOrderByAggregateInput)
], DashboardrestapiOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiSumOrderByAggregateInput_1.DashboardrestapiSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiSumOrderByAggregateInput_1.DashboardrestapiSumOrderByAggregateInput)
], DashboardrestapiOrderByWithAggregationInput.prototype, "_sum", void 0);
DashboardrestapiOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiOrderByWithAggregationInput", {
        isAbstract: true
    })
], DashboardrestapiOrderByWithAggregationInput);
exports.DashboardrestapiOrderByWithAggregationInput = DashboardrestapiOrderByWithAggregationInput;
