"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupOrderByRelationAggregateInput = class Customer_groupOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByRelationAggregateInput.prototype, "_count", void 0);
Customer_groupOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Customer_groupOrderByRelationAggregateInput);
exports.Customer_groupOrderByRelationAggregateInput = Customer_groupOrderByRelationAggregateInput;
