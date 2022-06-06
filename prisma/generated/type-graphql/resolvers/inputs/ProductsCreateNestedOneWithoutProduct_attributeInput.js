"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutProduct_attributeInput_1 = require("../inputs/ProductsCreateOrConnectWithoutProduct_attributeInput");
const ProductsCreateWithoutProduct_attributeInput_1 = require("../inputs/ProductsCreateWithoutProduct_attributeInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutProduct_attributeInput = class ProductsCreateNestedOneWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput)
], ProductsCreateNestedOneWithoutProduct_attributeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutProduct_attributeInput_1.ProductsCreateOrConnectWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutProduct_attributeInput_1.ProductsCreateOrConnectWithoutProduct_attributeInput)
], ProductsCreateNestedOneWithoutProduct_attributeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutProduct_attributeInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutProduct_attributeInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutProduct_attributeInput);
exports.ProductsCreateNestedOneWithoutProduct_attributeInput = ProductsCreateNestedOneWithoutProduct_attributeInput;
