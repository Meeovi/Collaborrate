"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsMaxOrderByAggregateInput = class Currency_symbolsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsMaxOrderByAggregateInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsMaxOrderByAggregateInput.prototype, "use_standard", void 0);
Currency_symbolsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_symbolsMaxOrderByAggregateInput);
exports.Currency_symbolsMaxOrderByAggregateInput = Currency_symbolsMaxOrderByAggregateInput;
