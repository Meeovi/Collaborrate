"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InvoicesAvgOrderByAggregateInput = class InvoicesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesAvgOrderByAggregateInput.prototype, "invoice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesAvgOrderByAggregateInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesAvgOrderByAggregateInput.prototype, "id", void 0);
InvoicesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvoicesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], InvoicesAvgOrderByAggregateInput);
exports.InvoicesAvgOrderByAggregateInput = InvoicesAvgOrderByAggregateInput;
