"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesAvgOrderByAggregateInput_1 = require("../inputs/Currency_ratesAvgOrderByAggregateInput");
const Currency_ratesCountOrderByAggregateInput_1 = require("../inputs/Currency_ratesCountOrderByAggregateInput");
const Currency_ratesMaxOrderByAggregateInput_1 = require("../inputs/Currency_ratesMaxOrderByAggregateInput");
const Currency_ratesMinOrderByAggregateInput_1 = require("../inputs/Currency_ratesMinOrderByAggregateInput");
const Currency_ratesSumOrderByAggregateInput_1 = require("../inputs/Currency_ratesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesOrderByWithAggregationInput = class Currency_ratesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithAggregationInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithAggregationInput.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCountOrderByAggregateInput_1.Currency_ratesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesCountOrderByAggregateInput_1.Currency_ratesCountOrderByAggregateInput)
], Currency_ratesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesAvgOrderByAggregateInput_1.Currency_ratesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesAvgOrderByAggregateInput_1.Currency_ratesAvgOrderByAggregateInput)
], Currency_ratesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesMaxOrderByAggregateInput_1.Currency_ratesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesMaxOrderByAggregateInput_1.Currency_ratesMaxOrderByAggregateInput)
], Currency_ratesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesMinOrderByAggregateInput_1.Currency_ratesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesMinOrderByAggregateInput_1.Currency_ratesMinOrderByAggregateInput)
], Currency_ratesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesSumOrderByAggregateInput_1.Currency_ratesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesSumOrderByAggregateInput_1.Currency_ratesSumOrderByAggregateInput)
], Currency_ratesOrderByWithAggregationInput.prototype, "_sum", void 0);
Currency_ratesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Currency_ratesOrderByWithAggregationInput);
exports.Currency_ratesOrderByWithAggregationInput = Currency_ratesOrderByWithAggregationInput;
