"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReportsSumOrderByAggregateInput = class ReportsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsSumOrderByAggregateInput.prototype, "quantity", void 0);
ReportsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ReportsSumOrderByAggregateInput);
exports.ReportsSumOrderByAggregateInput = ReportsSumOrderByAggregateInput;
