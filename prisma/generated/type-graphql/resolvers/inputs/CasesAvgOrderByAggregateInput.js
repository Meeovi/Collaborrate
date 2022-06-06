"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CasesAvgOrderByAggregateInput = class CasesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CasesAvgOrderByAggregateInput.prototype, "case_number", void 0);
CasesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CasesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CasesAvgOrderByAggregateInput);
exports.CasesAvgOrderByAggregateInput = CasesAvgOrderByAggregateInput;
