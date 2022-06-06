"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ProductsCreateOrConnectWithoutOrdersInput");
const ProductsCreateWithoutOrdersInput_1 = require("../inputs/ProductsCreateWithoutOrdersInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutOrdersInput = class ProductsCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput)
], ProductsCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOrdersInput_1.ProductsCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutOrdersInput_1.ProductsCreateOrConnectWithoutOrdersInput)
], ProductsCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutOrdersInput);
exports.ProductsCreateNestedOneWithoutOrdersInput = ProductsCreateNestedOneWithoutOrdersInput;
