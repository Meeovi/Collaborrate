"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IntegrationsSumOrderByAggregateInput = class IntegrationsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IntegrationsSumOrderByAggregateInput.prototype, "id", void 0);
IntegrationsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsSumOrderByAggregateInput", {
        isAbstract: true
    })
], IntegrationsSumOrderByAggregateInput);
exports.IntegrationsSumOrderByAggregateInput = IntegrationsSumOrderByAggregateInput;
