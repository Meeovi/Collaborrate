"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsSumOrderByAggregateInput = class SettingsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsSumOrderByAggregateInput.prototype, "id", void 0);
SettingsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsSumOrderByAggregateInput", {
        isAbstract: true
    })
], SettingsSumOrderByAggregateInput);
exports.SettingsSumOrderByAggregateInput = SettingsSumOrderByAggregateInput;
