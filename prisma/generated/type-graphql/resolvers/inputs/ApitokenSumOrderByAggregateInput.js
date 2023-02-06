"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ApitokenSumOrderByAggregateInput = class ApitokenSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenSumOrderByAggregateInput.prototype, "token", void 0);
ApitokenSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenSumOrderByAggregateInput", {
        isAbstract: true
    })
], ApitokenSumOrderByAggregateInput);
exports.ApitokenSumOrderByAggregateInput = ApitokenSumOrderByAggregateInput;
