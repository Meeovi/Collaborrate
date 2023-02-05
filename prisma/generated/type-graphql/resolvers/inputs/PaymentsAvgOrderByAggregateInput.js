"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PaymentsAvgOrderByAggregateInput = class PaymentsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsAvgOrderByAggregateInput.prototype, "id", void 0);
PaymentsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaymentsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PaymentsAvgOrderByAggregateInput);
exports.PaymentsAvgOrderByAggregateInput = PaymentsAvgOrderByAggregateInput;
