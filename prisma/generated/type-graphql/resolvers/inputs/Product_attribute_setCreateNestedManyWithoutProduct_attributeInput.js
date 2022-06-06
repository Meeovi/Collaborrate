"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCreateNestedManyWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateManyProduct_attributeInputEnvelope_1 = require("../inputs/Product_attribute_setCreateManyProduct_attributeInputEnvelope");
const Product_attribute_setCreateOrConnectWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateOrConnectWithoutProduct_attributeInput");
const Product_attribute_setCreateWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateWithoutProduct_attributeInput");
const Product_attribute_setWhereUniqueInput_1 = require("../inputs/Product_attribute_setWhereUniqueInput");
let Product_attribute_setCreateNestedManyWithoutProduct_attributeInput = class Product_attribute_setCreateNestedManyWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setCreateWithoutProduct_attributeInput_1.Product_attribute_setCreateWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setCreateNestedManyWithoutProduct_attributeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setCreateOrConnectWithoutProduct_attributeInput_1.Product_attribute_setCreateOrConnectWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setCreateNestedManyWithoutProduct_attributeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateManyProduct_attributeInputEnvelope_1.Product_attribute_setCreateManyProduct_attributeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateManyProduct_attributeInputEnvelope_1.Product_attribute_setCreateManyProduct_attributeInputEnvelope)
], Product_attribute_setCreateNestedManyWithoutProduct_attributeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setCreateNestedManyWithoutProduct_attributeInput.prototype, "connect", void 0);
Product_attribute_setCreateNestedManyWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setCreateNestedManyWithoutProduct_attributeInput", {
        isAbstract: true
    })
], Product_attribute_setCreateNestedManyWithoutProduct_attributeInput);
exports.Product_attribute_setCreateNestedManyWithoutProduct_attributeInput = Product_attribute_setCreateNestedManyWithoutProduct_attributeInput;
