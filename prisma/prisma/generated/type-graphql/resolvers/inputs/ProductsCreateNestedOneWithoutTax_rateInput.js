"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutTax_rateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutTax_rateInput_1 = require("../inputs/ProductsCreateOrConnectWithoutTax_rateInput");
const ProductsCreateWithoutTax_rateInput_1 = require("../inputs/ProductsCreateWithoutTax_rateInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutTax_rateInput = class ProductsCreateNestedOneWithoutTax_rateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput)
], ProductsCreateNestedOneWithoutTax_rateInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_rateInput_1.ProductsCreateOrConnectWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutTax_rateInput_1.ProductsCreateOrConnectWithoutTax_rateInput)
], ProductsCreateNestedOneWithoutTax_rateInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutTax_rateInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutTax_rateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutTax_rateInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutTax_rateInput);
exports.ProductsCreateNestedOneWithoutTax_rateInput = ProductsCreateNestedOneWithoutTax_rateInput;
