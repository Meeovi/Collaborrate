"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Sales_settingsAvgOrderByAggregateInput = class Sales_settingsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Sales_settingsAvgOrderByAggregateInput.prototype, "id", void 0);
Sales_settingsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Sales_settingsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Sales_settingsAvgOrderByAggregateInput);
exports.Sales_settingsAvgOrderByAggregateInput = Sales_settingsAvgOrderByAggregateInput;
