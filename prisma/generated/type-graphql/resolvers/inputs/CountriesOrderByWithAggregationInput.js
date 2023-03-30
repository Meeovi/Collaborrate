"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesAvgOrderByAggregateInput_1 = require("../inputs/CountriesAvgOrderByAggregateInput");
const CountriesCountOrderByAggregateInput_1 = require("../inputs/CountriesCountOrderByAggregateInput");
const CountriesMaxOrderByAggregateInput_1 = require("../inputs/CountriesMaxOrderByAggregateInput");
const CountriesMinOrderByAggregateInput_1 = require("../inputs/CountriesMinOrderByAggregateInput");
const CountriesSumOrderByAggregateInput_1 = require("../inputs/CountriesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CountriesOrderByWithAggregationInput = class CountriesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithAggregationInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithAggregationInput.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesCountOrderByAggregateInput_1.CountriesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesCountOrderByAggregateInput_1.CountriesCountOrderByAggregateInput)
], CountriesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesAvgOrderByAggregateInput_1.CountriesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesAvgOrderByAggregateInput_1.CountriesAvgOrderByAggregateInput)
], CountriesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesMaxOrderByAggregateInput_1.CountriesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesMaxOrderByAggregateInput_1.CountriesMaxOrderByAggregateInput)
], CountriesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesMinOrderByAggregateInput_1.CountriesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesMinOrderByAggregateInput_1.CountriesMinOrderByAggregateInput)
], CountriesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesSumOrderByAggregateInput_1.CountriesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesSumOrderByAggregateInput_1.CountriesSumOrderByAggregateInput)
], CountriesOrderByWithAggregationInput.prototype, "_sum", void 0);
CountriesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesOrderByWithAggregationInput", {
        isAbstract: true
    })
], CountriesOrderByWithAggregationInput);
exports.CountriesOrderByWithAggregationInput = CountriesOrderByWithAggregationInput;
