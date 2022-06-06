"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Shop_settingsAvgOrderByAggregateInput = class Shop_settingsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsAvgOrderByAggregateInput.prototype, "id", void 0);
Shop_settingsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Shop_settingsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Shop_settingsAvgOrderByAggregateInput);
exports.Shop_settingsAvgOrderByAggregateInput = Shop_settingsAvgOrderByAggregateInput;
