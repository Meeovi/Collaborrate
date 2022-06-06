"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateNestedOneWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateNestedOneWithoutTax_ruleInput");
let Tax_ruleCreateInput = class Tax_ruleCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutTax_ruleInput_1.ProductsCreateNestedOneWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutTax_ruleInput_1.ProductsCreateNestedOneWithoutTax_ruleInput)
], Tax_ruleCreateInput.prototype, "products", void 0);
Tax_ruleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateInput", {
        isAbstract: true
    })
], Tax_ruleCreateInput);
exports.Tax_ruleCreateInput = Tax_ruleCreateInput;
