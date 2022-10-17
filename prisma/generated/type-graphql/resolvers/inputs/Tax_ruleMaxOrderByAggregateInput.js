"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleMaxOrderByAggregateInput = class Tax_ruleMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleMaxOrderByAggregateInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleMaxOrderByAggregateInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleMaxOrderByAggregateInput.prototype, "products", void 0);
Tax_ruleMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_ruleMaxOrderByAggregateInput);
exports.Tax_ruleMaxOrderByAggregateInput = Tax_ruleMaxOrderByAggregateInput;
