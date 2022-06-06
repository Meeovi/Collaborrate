"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Sales_settingsSumOrderByAggregateInput = class Sales_settingsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsSumOrderByAggregateInput.prototype, "id", void 0);
Sales_settingsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Sales_settingsSumOrderByAggregateInput", {
        isAbstract: true
    })
], Sales_settingsSumOrderByAggregateInput);
exports.Sales_settingsSumOrderByAggregateInput = Sales_settingsSumOrderByAggregateInput;
