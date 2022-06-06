"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutOrdersInput_1 = require("../inputs/ProductsCreateWithoutOrdersInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutOrdersInput = class ProductsCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput)
], ProductsCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutOrdersInput);
exports.ProductsCreateOrConnectWithoutOrdersInput = ProductsCreateOrConnectWithoutOrdersInput;
