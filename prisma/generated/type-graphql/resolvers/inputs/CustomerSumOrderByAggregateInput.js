"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CustomerSumOrderByAggregateInput = class CustomerSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerSumOrderByAggregateInput.prototype, "id", void 0);
CustomerSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerSumOrderByAggregateInput", {
        isAbstract: true
    })
], CustomerSumOrderByAggregateInput);
exports.CustomerSumOrderByAggregateInput = CustomerSumOrderByAggregateInput;
