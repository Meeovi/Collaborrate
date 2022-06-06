"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Special_discountsAvgOrderByAggregateInput = class Special_discountsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsAvgOrderByAggregateInput.prototype, "discount", void 0);
Special_discountsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Special_discountsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Special_discountsAvgOrderByAggregateInput);
exports.Special_discountsAvgOrderByAggregateInput = Special_discountsAvgOrderByAggregateInput;
