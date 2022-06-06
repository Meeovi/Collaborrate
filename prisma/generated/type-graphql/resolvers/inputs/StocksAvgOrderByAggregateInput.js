"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StocksAvgOrderByAggregateInput = class StocksAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksAvgOrderByAggregateInput.prototype, "id", void 0);
StocksAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksAvgOrderByAggregateInput", {
        isAbstract: true
    })
], StocksAvgOrderByAggregateInput);
exports.StocksAvgOrderByAggregateInput = StocksAvgOrderByAggregateInput;
