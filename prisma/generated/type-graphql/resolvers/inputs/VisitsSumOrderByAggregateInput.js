"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VisitsSumOrderByAggregateInput = class VisitsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsSumOrderByAggregateInput.prototype, "id", void 0);
VisitsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisitsSumOrderByAggregateInput", {
        isAbstract: true
    })
], VisitsSumOrderByAggregateInput);
exports.VisitsSumOrderByAggregateInput = VisitsSumOrderByAggregateInput;
