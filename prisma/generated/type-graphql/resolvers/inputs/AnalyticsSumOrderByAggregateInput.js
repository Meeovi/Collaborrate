"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AnalyticsSumOrderByAggregateInput = class AnalyticsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsSumOrderByAggregateInput.prototype, "id", void 0);
AnalyticsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AnalyticsSumOrderByAggregateInput", {
        isAbstract: true
    })
], AnalyticsSumOrderByAggregateInput);
exports.AnalyticsSumOrderByAggregateInput = AnalyticsSumOrderByAggregateInput;
