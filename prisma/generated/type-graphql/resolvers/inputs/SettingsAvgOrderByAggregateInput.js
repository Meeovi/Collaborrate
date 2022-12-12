"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingsAvgOrderByAggregateInput = class SettingsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingsAvgOrderByAggregateInput.prototype, "id", void 0);
SettingsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SettingsAvgOrderByAggregateInput);
exports.SettingsAvgOrderByAggregateInput = SettingsAvgOrderByAggregateInput;
