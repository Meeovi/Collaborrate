"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_rateSumOrderByAggregateInput = class Tax_rateSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateSumOrderByAggregateInput.prototype, "prod_id", void 0);
Tax_rateSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateSumOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_rateSumOrderByAggregateInput);
exports.Tax_rateSumOrderByAggregateInput = Tax_rateSumOrderByAggregateInput;
