"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslidesSumOrderByAggregateInput = class DashboardslidesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesSumOrderByAggregateInput.prototype, "id", void 0);
DashboardslidesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesSumOrderByAggregateInput", {
        isAbstract: true
    })
], DashboardslidesSumOrderByAggregateInput);
exports.DashboardslidesSumOrderByAggregateInput = DashboardslidesSumOrderByAggregateInput;
