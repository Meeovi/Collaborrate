"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OpportunitiesSumOrderByAggregateInput = class OpportunitiesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesSumOrderByAggregateInput.prototype, "id", void 0);
OpportunitiesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OpportunitiesSumOrderByAggregateInput", {
        isAbstract: true
    })
], OpportunitiesSumOrderByAggregateInput);
exports.OpportunitiesSumOrderByAggregateInput = OpportunitiesSumOrderByAggregateInput;
