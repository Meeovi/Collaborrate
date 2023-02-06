"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CountriesAvgOrderByAggregateInput = class CountriesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesAvgOrderByAggregateInput.prototype, "id", void 0);
CountriesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CountriesAvgOrderByAggregateInput);
exports.CountriesAvgOrderByAggregateInput = CountriesAvgOrderByAggregateInput;
