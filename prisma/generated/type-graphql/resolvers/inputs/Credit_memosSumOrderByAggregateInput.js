"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosSumOrderByAggregateInput = class Credit_memosSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosSumOrderByAggregateInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosSumOrderByAggregateInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosSumOrderByAggregateInput.prototype, "prod_id", void 0);
Credit_memosSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosSumOrderByAggregateInput", {
        isAbstract: true
    })
], Credit_memosSumOrderByAggregateInput);
exports.Credit_memosSumOrderByAggregateInput = Credit_memosSumOrderByAggregateInput;
