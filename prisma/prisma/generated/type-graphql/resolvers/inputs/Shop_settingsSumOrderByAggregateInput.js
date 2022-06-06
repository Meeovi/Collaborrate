"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Shop_settingsSumOrderByAggregateInput = class Shop_settingsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsSumOrderByAggregateInput.prototype, "id", void 0);
Shop_settingsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Shop_settingsSumOrderByAggregateInput", {
        isAbstract: true
    })
], Shop_settingsSumOrderByAggregateInput);
exports.Shop_settingsSumOrderByAggregateInput = Shop_settingsSumOrderByAggregateInput;
