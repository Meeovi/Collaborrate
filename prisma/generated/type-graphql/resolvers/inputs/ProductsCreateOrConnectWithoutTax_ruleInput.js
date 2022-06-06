"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutTax_ruleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateWithoutTax_ruleInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutTax_ruleInput = class ProductsCreateOrConnectWithoutTax_ruleInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutTax_ruleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput)
], ProductsCreateOrConnectWithoutTax_ruleInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutTax_ruleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutTax_ruleInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutTax_ruleInput);
exports.ProductsCreateOrConnectWithoutTax_ruleInput = ProductsCreateOrConnectWithoutTax_ruleInput;
