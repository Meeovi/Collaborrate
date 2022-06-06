"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CasesSumOrderByAggregateInput = class CasesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesSumOrderByAggregateInput.prototype, "case_number", void 0);
CasesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CasesSumOrderByAggregateInput", {
        isAbstract: true
    })
], CasesSumOrderByAggregateInput);
exports.CasesSumOrderByAggregateInput = CasesSumOrderByAggregateInput;
