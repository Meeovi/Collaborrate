"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CustomersSumOrderByAggregateInput = class CustomersSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersSumOrderByAggregateInput.prototype, "id", void 0);
CustomersSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersSumOrderByAggregateInput", {
        isAbstract: true
    })
], CustomersSumOrderByAggregateInput);
exports.CustomersSumOrderByAggregateInput = CustomersSumOrderByAggregateInput;
