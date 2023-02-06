"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaxesAvgOrderByAggregateInput = class TaxesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesAvgOrderByAggregateInput.prototype, "id", void 0);
TaxesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaxesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TaxesAvgOrderByAggregateInput);
exports.TaxesAvgOrderByAggregateInput = TaxesAvgOrderByAggregateInput;
