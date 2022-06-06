"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleSumOrderByAggregateInput = class Tax_ruleSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleSumOrderByAggregateInput.prototype, "prod_id", void 0);
Tax_ruleSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleSumOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_ruleSumOrderByAggregateInput);
exports.Tax_ruleSumOrderByAggregateInput = Tax_ruleSumOrderByAggregateInput;
