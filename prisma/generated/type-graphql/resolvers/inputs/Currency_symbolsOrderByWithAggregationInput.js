"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsAvgOrderByAggregateInput_1 = require("../inputs/Currency_symbolsAvgOrderByAggregateInput");
const Currency_symbolsCountOrderByAggregateInput_1 = require("../inputs/Currency_symbolsCountOrderByAggregateInput");
const Currency_symbolsMaxOrderByAggregateInput_1 = require("../inputs/Currency_symbolsMaxOrderByAggregateInput");
const Currency_symbolsMinOrderByAggregateInput_1 = require("../inputs/Currency_symbolsMinOrderByAggregateInput");
const Currency_symbolsSumOrderByAggregateInput_1 = require("../inputs/Currency_symbolsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsOrderByWithAggregationInput = class Currency_symbolsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithAggregationInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithAggregationInput.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsCountOrderByAggregateInput_1.Currency_symbolsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsCountOrderByAggregateInput_1.Currency_symbolsCountOrderByAggregateInput)
], Currency_symbolsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsAvgOrderByAggregateInput_1.Currency_symbolsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsAvgOrderByAggregateInput_1.Currency_symbolsAvgOrderByAggregateInput)
], Currency_symbolsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsMaxOrderByAggregateInput_1.Currency_symbolsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsMaxOrderByAggregateInput_1.Currency_symbolsMaxOrderByAggregateInput)
], Currency_symbolsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsMinOrderByAggregateInput_1.Currency_symbolsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsMinOrderByAggregateInput_1.Currency_symbolsMinOrderByAggregateInput)
], Currency_symbolsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsSumOrderByAggregateInput_1.Currency_symbolsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsSumOrderByAggregateInput_1.Currency_symbolsSumOrderByAggregateInput)
], Currency_symbolsOrderByWithAggregationInput.prototype, "_sum", void 0);
Currency_symbolsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsOrderByWithAggregationInput", {
        isAbstract: true
    })
], Currency_symbolsOrderByWithAggregationInput);
exports.Currency_symbolsOrderByWithAggregationInput = Currency_symbolsOrderByWithAggregationInput;
