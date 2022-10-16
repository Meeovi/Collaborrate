"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ContractsSumOrderByAggregateInput = class ContractsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ContractsSumOrderByAggregateInput.prototype, "id", void 0);
ContractsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ContractsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ContractsSumOrderByAggregateInput);
exports.ContractsSumOrderByAggregateInput = ContractsSumOrderByAggregateInput;
