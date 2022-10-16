"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CitiesSumOrderByAggregateInput = class CitiesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesSumOrderByAggregateInput.prototype, "id", void 0);
CitiesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesSumOrderByAggregateInput", {
        isAbstract: true
    })
], CitiesSumOrderByAggregateInput);
exports.CitiesSumOrderByAggregateInput = CitiesSumOrderByAggregateInput;
