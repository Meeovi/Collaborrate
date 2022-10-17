"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categorySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_categorySumOrderByAggregateInput = class Tax_categorySumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categorySumOrderByAggregateInput.prototype, "id", void 0);
Tax_categorySumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categorySumOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_categorySumOrderByAggregateInput);
exports.Tax_categorySumOrderByAggregateInput = Tax_categorySumOrderByAggregateInput;
