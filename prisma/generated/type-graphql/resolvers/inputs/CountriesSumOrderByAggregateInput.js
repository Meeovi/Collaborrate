"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CountriesSumOrderByAggregateInput = class CountriesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesSumOrderByAggregateInput.prototype, "id", void 0);
CountriesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesSumOrderByAggregateInput", {
        isAbstract: true
    })
], CountriesSumOrderByAggregateInput);
exports.CountriesSumOrderByAggregateInput = CountriesSumOrderByAggregateInput;
