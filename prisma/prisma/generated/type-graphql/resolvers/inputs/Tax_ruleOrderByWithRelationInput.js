"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleOrderByWithRelationInput = class Tax_ruleOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], Tax_ruleOrderByWithRelationInput.prototype, "products", void 0);
Tax_ruleOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleOrderByWithRelationInput", {
        isAbstract: true
    })
], Tax_ruleOrderByWithRelationInput);
exports.Tax_ruleOrderByWithRelationInput = Tax_ruleOrderByWithRelationInput;
