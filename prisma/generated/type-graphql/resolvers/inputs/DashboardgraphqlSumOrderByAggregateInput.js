"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardgraphqlSumOrderByAggregateInput = class DashboardgraphqlSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlSumOrderByAggregateInput.prototype, "id", void 0);
DashboardgraphqlSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlSumOrderByAggregateInput", {
        isAbstract: true
    })
], DashboardgraphqlSumOrderByAggregateInput);
exports.DashboardgraphqlSumOrderByAggregateInput = DashboardgraphqlSumOrderByAggregateInput;
