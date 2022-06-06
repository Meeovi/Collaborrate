"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesSumOrderByAggregateInput = class Currency_ratesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesSumOrderByAggregateInput.prototype, "usd", void 0);
Currency_ratesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_ratesSumOrderByAggregateInput);
exports.Currency_ratesSumOrderByAggregateInput = Currency_ratesSumOrderByAggregateInput;
