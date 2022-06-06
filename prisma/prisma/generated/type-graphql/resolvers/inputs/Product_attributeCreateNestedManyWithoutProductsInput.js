"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateManyProductsInputEnvelope_1 = require("../inputs/Product_attributeCreateManyProductsInputEnvelope");
const Product_attributeCreateOrConnectWithoutProductsInput_1 = require("../inputs/Product_attributeCreateOrConnectWithoutProductsInput");
const Product_attributeCreateWithoutProductsInput_1 = require("../inputs/Product_attributeCreateWithoutProductsInput");
const Product_attributeWhereUniqueInput_1 = require("../inputs/Product_attributeWhereUniqueInput");
let Product_attributeCreateNestedManyWithoutProductsInput = class Product_attributeCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeCreateWithoutProductsInput_1.Product_attributeCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeCreateOrConnectWithoutProductsInput_1.Product_attributeCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateManyProductsInputEnvelope_1.Product_attributeCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateManyProductsInputEnvelope_1.Product_attributeCreateManyProductsInputEnvelope)
], Product_attributeCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
Product_attributeCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeCreateNestedManyWithoutProductsInput);
exports.Product_attributeCreateNestedManyWithoutProductsInput = Product_attributeCreateNestedManyWithoutProductsInput;
