"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsSumOrderByAggregateInput = class Currency_symbolsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsSumOrderByAggregateInput.prototype, "id", void 0);
Currency_symbolsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsSumOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_symbolsSumOrderByAggregateInput);
exports.Currency_symbolsSumOrderByAggregateInput = Currency_symbolsSumOrderByAggregateInput;
