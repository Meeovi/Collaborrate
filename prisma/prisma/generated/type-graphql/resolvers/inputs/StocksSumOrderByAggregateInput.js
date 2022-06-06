"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StocksSumOrderByAggregateInput = class StocksSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksSumOrderByAggregateInput.prototype, "id", void 0);
StocksSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksSumOrderByAggregateInput", {
        isAbstract: true
    })
], StocksSumOrderByAggregateInput);
exports.StocksSumOrderByAggregateInput = StocksSumOrderByAggregateInput;
