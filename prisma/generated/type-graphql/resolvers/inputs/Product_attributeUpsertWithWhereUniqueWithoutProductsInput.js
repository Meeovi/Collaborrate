"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateWithoutProductsInput_1 = require("../inputs/Product_attributeCreateWithoutProductsInput");
const Product_attributeUpdateWithoutProductsInput_1 = require("../inputs/Product_attributeUpdateWithoutProductsInput");
const Product_attributeWhereUniqueInput_1 = require("../inputs/Product_attributeWhereUniqueInput");
let Product_attributeUpsertWithWhereUniqueWithoutProductsInput = class Product_attributeUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], Product_attributeUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateWithoutProductsInput_1.Product_attributeUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateWithoutProductsInput_1.Product_attributeUpdateWithoutProductsInput)
], Product_attributeUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateWithoutProductsInput_1.Product_attributeCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateWithoutProductsInput_1.Product_attributeCreateWithoutProductsInput)
], Product_attributeUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
Product_attributeUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeUpsertWithWhereUniqueWithoutProductsInput);
exports.Product_attributeUpsertWithWhereUniqueWithoutProductsInput = Product_attributeUpsertWithWhereUniqueWithoutProductsInput;
