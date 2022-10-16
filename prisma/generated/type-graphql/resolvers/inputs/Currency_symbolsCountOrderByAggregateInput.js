"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsCountOrderByAggregateInput = class Currency_symbolsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsCountOrderByAggregateInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsCountOrderByAggregateInput.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsCountOrderByAggregateInput.prototype, "id", void 0);
Currency_symbolsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsCountOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_symbolsCountOrderByAggregateInput);
exports.Currency_symbolsCountOrderByAggregateInput = Currency_symbolsCountOrderByAggregateInput;
