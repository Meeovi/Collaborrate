"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CustomizationsSumOrderByAggregateInput = class CustomizationsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsSumOrderByAggregateInput.prototype, "id", void 0);
CustomizationsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomizationsSumOrderByAggregateInput", {
        isAbstract: true
    })
], CustomizationsSumOrderByAggregateInput);
exports.CustomizationsSumOrderByAggregateInput = CustomizationsSumOrderByAggregateInput;
