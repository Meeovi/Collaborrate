"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let QuotesAvgOrderByAggregateInput = class QuotesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesAvgOrderByAggregateInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesAvgOrderByAggregateInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QuotesAvgOrderByAggregateInput.prototype, "order_id", void 0);
QuotesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], QuotesAvgOrderByAggregateInput);
exports.QuotesAvgOrderByAggregateInput = QuotesAvgOrderByAggregateInput;
