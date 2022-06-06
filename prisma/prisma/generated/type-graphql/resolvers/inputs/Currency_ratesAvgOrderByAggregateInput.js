"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesAvgOrderByAggregateInput = class Currency_ratesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesAvgOrderByAggregateInput.prototype, "usd", void 0);
Currency_ratesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_ratesAvgOrderByAggregateInput);
exports.Currency_ratesAvgOrderByAggregateInput = Currency_ratesAvgOrderByAggregateInput;
