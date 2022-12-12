"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PaymentsSumOrderByAggregateInput = class PaymentsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsSumOrderByAggregateInput.prototype, "id", void 0);
PaymentsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaymentsSumOrderByAggregateInput", {
        isAbstract: true
    })
], PaymentsSumOrderByAggregateInput);
exports.PaymentsSumOrderByAggregateInput = PaymentsSumOrderByAggregateInput;
