"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReportsAvgOrderByAggregateInput = class ReportsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsAvgOrderByAggregateInput.prototype, "quantity", void 0);
ReportsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ReportsAvgOrderByAggregateInput);
exports.ReportsAvgOrderByAggregateInput = ReportsAvgOrderByAggregateInput;
