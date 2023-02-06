"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaxesSumOrderByAggregateInput = class TaxesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesSumOrderByAggregateInput.prototype, "id", void 0);
TaxesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaxesSumOrderByAggregateInput", {
        isAbstract: true
    })
], TaxesSumOrderByAggregateInput);
exports.TaxesSumOrderByAggregateInput = TaxesSumOrderByAggregateInput;
