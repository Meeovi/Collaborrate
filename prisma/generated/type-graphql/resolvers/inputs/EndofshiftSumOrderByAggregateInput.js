"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EndofshiftSumOrderByAggregateInput = class EndofshiftSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftSumOrderByAggregateInput.prototype, "id", void 0);
EndofshiftSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EndofshiftSumOrderByAggregateInput", {
        isAbstract: true
    })
], EndofshiftSumOrderByAggregateInput);
exports.EndofshiftSumOrderByAggregateInput = EndofshiftSumOrderByAggregateInput;
