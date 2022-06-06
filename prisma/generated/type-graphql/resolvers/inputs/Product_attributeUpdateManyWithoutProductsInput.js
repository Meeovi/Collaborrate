"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateManyProductsInputEnvelope_1 = require("../inputs/Product_attributeCreateManyProductsInputEnvelope");
const Product_attributeCreateOrConnectWithoutProductsInput_1 = require("../inputs/Product_attributeCreateOrConnectWithoutProductsInput");
const Product_attributeCreateWithoutProductsInput_1 = require("../inputs/Product_attributeCreateWithoutProductsInput");
const Product_attributeScalarWhereInput_1 = require("../inputs/Product_attributeScalarWhereInput");
const Product_attributeUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/Product_attributeUpdateManyWithWhereWithoutProductsInput");
const Product_attributeUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Product_attributeUpdateWithWhereUniqueWithoutProductsInput");
const Product_attributeUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Product_attributeUpsertWithWhereUniqueWithoutProductsInput");
const Product_attributeWhereUniqueInput_1 = require("../inputs/Product_attributeWhereUniqueInput");
let Product_attributeUpdateManyWithoutProductsInput = class Product_attributeUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeCreateWithoutProductsInput_1.Product_attributeCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeCreateOrConnectWithoutProductsInput_1.Product_attributeCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeUpsertWithWhereUniqueWithoutProductsInput_1.Product_attributeUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateManyProductsInputEnvelope_1.Product_attributeCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateManyProductsInputEnvelope_1.Product_attributeCreateManyProductsInputEnvelope)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeUpdateWithWhereUniqueWithoutProductsInput_1.Product_attributeUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeUpdateManyWithWhereWithoutProductsInput_1.Product_attributeUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeScalarWhereInput_1.Product_attributeScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
Product_attributeUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeUpdateManyWithoutProductsInput);
exports.Product_attributeUpdateManyWithoutProductsInput = Product_attributeUpdateManyWithoutProductsInput;
