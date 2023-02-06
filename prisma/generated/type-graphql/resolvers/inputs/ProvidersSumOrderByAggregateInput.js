"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProvidersSumOrderByAggregateInput = class ProvidersSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProvidersSumOrderByAggregateInput.prototype, "id", void 0);
ProvidersSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProvidersSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProvidersSumOrderByAggregateInput);
exports.ProvidersSumOrderByAggregateInput = ProvidersSumOrderByAggregateInput;
