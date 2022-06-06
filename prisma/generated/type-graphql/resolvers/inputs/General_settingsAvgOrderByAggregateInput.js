"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let General_settingsAvgOrderByAggregateInput = class General_settingsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsAvgOrderByAggregateInput.prototype, "id", void 0);
General_settingsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("General_settingsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], General_settingsAvgOrderByAggregateInput);
exports.General_settingsAvgOrderByAggregateInput = General_settingsAvgOrderByAggregateInput;
