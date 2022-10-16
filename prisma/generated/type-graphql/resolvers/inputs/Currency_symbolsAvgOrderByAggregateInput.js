"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsAvgOrderByAggregateInput = class Currency_symbolsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsAvgOrderByAggregateInput.prototype, "id", void 0);
Currency_symbolsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_symbolsAvgOrderByAggregateInput);
exports.Currency_symbolsAvgOrderByAggregateInput = Currency_symbolsAvgOrderByAggregateInput;
