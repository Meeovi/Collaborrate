"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setUpdateManyWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateManyProduct_attributeInputEnvelope_1 = require("../inputs/Product_attribute_setCreateManyProduct_attributeInputEnvelope");
const Product_attribute_setCreateOrConnectWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateOrConnectWithoutProduct_attributeInput");
const Product_attribute_setCreateWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateWithoutProduct_attributeInput");
const Product_attribute_setScalarWhereInput_1 = require("../inputs/Product_attribute_setScalarWhereInput");
const Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput");
const Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput");
const Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput");
const Product_attribute_setWhereUniqueInput_1 = require("../inputs/Product_attribute_setWhereUniqueInput");
let Product_attribute_setUpdateManyWithoutProduct_attributeInput = class Product_attribute_setUpdateManyWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setCreateWithoutProduct_attributeInput_1.Product_attribute_setCreateWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setCreateOrConnectWithoutProduct_attributeInput_1.Product_attribute_setCreateOrConnectWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput_1.Product_attribute_setUpsertWithWhereUniqueWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateManyProduct_attributeInputEnvelope_1.Product_attribute_setCreateManyProduct_attributeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateManyProduct_attributeInputEnvelope_1.Product_attribute_setCreateManyProduct_attributeInputEnvelope)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput_1.Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput_1.Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereInput_1.Product_attribute_setScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setUpdateManyWithoutProduct_attributeInput.prototype, "deleteMany", void 0);
Product_attribute_setUpdateManyWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setUpdateManyWithoutProduct_attributeInput", {
        isAbstract: true
    })
], Product_attribute_setUpdateManyWithoutProduct_attributeInput);
exports.Product_attribute_setUpdateManyWithoutProduct_attributeInput = Product_attribute_setUpdateManyWithoutProduct_attributeInput;
