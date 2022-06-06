"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutTax_rateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutTax_rateInput_1 = require("../inputs/ProductsCreateWithoutTax_rateInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutTax_rateInput = class ProductsCreateOrConnectWithoutTax_rateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutTax_rateInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput)
], ProductsCreateOrConnectWithoutTax_rateInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutTax_rateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutTax_rateInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutTax_rateInput);
exports.ProductsCreateOrConnectWithoutTax_rateInput = ProductsCreateOrConnectWithoutTax_rateInput;
