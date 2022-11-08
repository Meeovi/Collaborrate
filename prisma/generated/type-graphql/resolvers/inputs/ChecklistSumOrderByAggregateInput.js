"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChecklistSumOrderByAggregateInput = class ChecklistSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistSumOrderByAggregateInput.prototype, "id", void 0);
ChecklistSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChecklistSumOrderByAggregateInput", {
        isAbstract: true
    })
], ChecklistSumOrderByAggregateInput);
exports.ChecklistSumOrderByAggregateInput = ChecklistSumOrderByAggregateInput;
