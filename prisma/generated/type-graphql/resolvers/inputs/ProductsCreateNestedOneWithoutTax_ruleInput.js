"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutTax_ruleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateOrConnectWithoutTax_ruleInput");
const ProductsCreateWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateWithoutTax_ruleInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutTax_ruleInput = class ProductsCreateNestedOneWithoutTax_ruleInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput)
], ProductsCreateNestedOneWithoutTax_ruleInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_ruleInput_1.ProductsCreateOrConnectWithoutTax_ruleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutTax_ruleInput_1.ProductsCreateOrConnectWithoutTax_ruleInput)
], ProductsCreateNestedOneWithoutTax_ruleInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutTax_ruleInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutTax_ruleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutTax_ruleInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutTax_ruleInput);
exports.ProductsCreateNestedOneWithoutTax_ruleInput = ProductsCreateNestedOneWithoutTax_ruleInput;
