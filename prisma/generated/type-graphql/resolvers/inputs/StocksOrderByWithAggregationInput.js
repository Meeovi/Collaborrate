"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksAvgOrderByAggregateInput_1 = require("../inputs/StocksAvgOrderByAggregateInput");
const StocksCountOrderByAggregateInput_1 = require("../inputs/StocksCountOrderByAggregateInput");
const StocksMaxOrderByAggregateInput_1 = require("../inputs/StocksMaxOrderByAggregateInput");
const StocksMinOrderByAggregateInput_1 = require("../inputs/StocksMinOrderByAggregateInput");
const StocksSumOrderByAggregateInput_1 = require("../inputs/StocksSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StocksOrderByWithAggregationInput = class StocksOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithAggregationInput.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithAggregationInput.prototype, "sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksCountOrderByAggregateInput_1.StocksCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksCountOrderByAggregateInput_1.StocksCountOrderByAggregateInput)
], StocksOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksAvgOrderByAggregateInput_1.StocksAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksAvgOrderByAggregateInput_1.StocksAvgOrderByAggregateInput)
], StocksOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksMaxOrderByAggregateInput_1.StocksMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksMaxOrderByAggregateInput_1.StocksMaxOrderByAggregateInput)
], StocksOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksMinOrderByAggregateInput_1.StocksMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksMinOrderByAggregateInput_1.StocksMinOrderByAggregateInput)
], StocksOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksSumOrderByAggregateInput_1.StocksSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksSumOrderByAggregateInput_1.StocksSumOrderByAggregateInput)
], StocksOrderByWithAggregationInput.prototype, "_sum", void 0);
StocksOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksOrderByWithAggregationInput", {
        isAbstract: true
    })
], StocksOrderByWithAggregationInput);
exports.StocksOrderByWithAggregationInput = StocksOrderByWithAggregationInput;
