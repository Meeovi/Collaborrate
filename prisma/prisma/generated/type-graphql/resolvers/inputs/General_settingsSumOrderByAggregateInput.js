"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let General_settingsSumOrderByAggregateInput = class General_settingsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsSumOrderByAggregateInput.prototype, "id", void 0);
General_settingsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("General_settingsSumOrderByAggregateInput", {
        isAbstract: true
    })
], General_settingsSumOrderByAggregateInput);
exports.General_settingsSumOrderByAggregateInput = General_settingsSumOrderByAggregateInput;
