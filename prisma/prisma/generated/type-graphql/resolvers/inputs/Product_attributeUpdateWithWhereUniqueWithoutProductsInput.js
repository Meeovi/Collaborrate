"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeUpdateWithoutProductsInput_1 = require("../inputs/Product_attributeUpdateWithoutProductsInput");
const Product_attributeWhereUniqueInput_1 = require("../inputs/Product_attributeWhereUniqueInput");
let Product_attributeUpdateWithWhereUniqueWithoutProductsInput = class Product_attributeUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], Product_attributeUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateWithoutProductsInput_1.Product_attributeUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateWithoutProductsInput_1.Product_attributeUpdateWithoutProductsInput)
], Product_attributeUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
Product_attributeUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeUpdateWithWhereUniqueWithoutProductsInput);
exports.Product_attributeUpdateWithWhereUniqueWithoutProductsInput = Product_attributeUpdateWithWhereUniqueWithoutProductsInput;
