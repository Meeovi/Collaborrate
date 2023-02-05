"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesAvgOrderByAggregateInput_1 = require("../inputs/CurrenciesAvgOrderByAggregateInput");
const CurrenciesCountOrderByAggregateInput_1 = require("../inputs/CurrenciesCountOrderByAggregateInput");
const CurrenciesMaxOrderByAggregateInput_1 = require("../inputs/CurrenciesMaxOrderByAggregateInput");
const CurrenciesMinOrderByAggregateInput_1 = require("../inputs/CurrenciesMinOrderByAggregateInput");
const CurrenciesSumOrderByAggregateInput_1 = require("../inputs/CurrenciesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CurrenciesOrderByWithAggregationInput = class CurrenciesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithAggregationInput.prototype, "useStandard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesCountOrderByAggregateInput_1.CurrenciesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesCountOrderByAggregateInput_1.CurrenciesCountOrderByAggregateInput)
], CurrenciesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesAvgOrderByAggregateInput_1.CurrenciesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesAvgOrderByAggregateInput_1.CurrenciesAvgOrderByAggregateInput)
], CurrenciesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesMaxOrderByAggregateInput_1.CurrenciesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesMaxOrderByAggregateInput_1.CurrenciesMaxOrderByAggregateInput)
], CurrenciesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesMinOrderByAggregateInput_1.CurrenciesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesMinOrderByAggregateInput_1.CurrenciesMinOrderByAggregateInput)
], CurrenciesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesSumOrderByAggregateInput_1.CurrenciesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesSumOrderByAggregateInput_1.CurrenciesSumOrderByAggregateInput)
], CurrenciesOrderByWithAggregationInput.prototype, "_sum", void 0);
CurrenciesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrenciesOrderByWithAggregationInput", {
        isAbstract: true
    })
], CurrenciesOrderByWithAggregationInput);
exports.CurrenciesOrderByWithAggregationInput = CurrenciesOrderByWithAggregationInput;
