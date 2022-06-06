"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let QuotesSumOrderByAggregateInput = class QuotesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesSumOrderByAggregateInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesSumOrderByAggregateInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesSumOrderByAggregateInput.prototype, "order_id", void 0);
QuotesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesSumOrderByAggregateInput", {
        isAbstract: true
    })
], QuotesSumOrderByAggregateInput);
exports.QuotesSumOrderByAggregateInput = QuotesSumOrderByAggregateInput;
