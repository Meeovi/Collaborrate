"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlAvgOrderByAggregateInput_1 = require("../inputs/DashboardgraphqlAvgOrderByAggregateInput");
const DashboardgraphqlCountOrderByAggregateInput_1 = require("../inputs/DashboardgraphqlCountOrderByAggregateInput");
const DashboardgraphqlMaxOrderByAggregateInput_1 = require("../inputs/DashboardgraphqlMaxOrderByAggregateInput");
const DashboardgraphqlMinOrderByAggregateInput_1 = require("../inputs/DashboardgraphqlMinOrderByAggregateInput");
const DashboardgraphqlSumOrderByAggregateInput_1 = require("../inputs/DashboardgraphqlSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardgraphqlOrderByWithAggregationInput = class DashboardgraphqlOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlCountOrderByAggregateInput_1.DashboardgraphqlCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlCountOrderByAggregateInput_1.DashboardgraphqlCountOrderByAggregateInput)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlAvgOrderByAggregateInput_1.DashboardgraphqlAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlAvgOrderByAggregateInput_1.DashboardgraphqlAvgOrderByAggregateInput)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlMaxOrderByAggregateInput_1.DashboardgraphqlMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlMaxOrderByAggregateInput_1.DashboardgraphqlMaxOrderByAggregateInput)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlMinOrderByAggregateInput_1.DashboardgraphqlMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlMinOrderByAggregateInput_1.DashboardgraphqlMinOrderByAggregateInput)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlSumOrderByAggregateInput_1.DashboardgraphqlSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlSumOrderByAggregateInput_1.DashboardgraphqlSumOrderByAggregateInput)
], DashboardgraphqlOrderByWithAggregationInput.prototype, "_sum", void 0);
DashboardgraphqlOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlOrderByWithAggregationInput", {
        isAbstract: true
    })
], DashboardgraphqlOrderByWithAggregationInput);
exports.DashboardgraphqlOrderByWithAggregationInput = DashboardgraphqlOrderByWithAggregationInput;
