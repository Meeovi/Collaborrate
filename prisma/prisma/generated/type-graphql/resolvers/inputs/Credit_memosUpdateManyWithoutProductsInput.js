"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyProductsInputEnvelope_1 = require("../inputs/Credit_memosCreateManyProductsInputEnvelope");
const Credit_memosCreateOrConnectWithoutProductsInput_1 = require("../inputs/Credit_memosCreateOrConnectWithoutProductsInput");
const Credit_memosCreateWithoutProductsInput_1 = require("../inputs/Credit_memosCreateWithoutProductsInput");
const Credit_memosScalarWhereInput_1 = require("../inputs/Credit_memosScalarWhereInput");
const Credit_memosUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/Credit_memosUpdateManyWithWhereWithoutProductsInput");
const Credit_memosUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Credit_memosUpdateWithWhereUniqueWithoutProductsInput");
const Credit_memosUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/Credit_memosUpsertWithWhereUniqueWithoutProductsInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosUpdateManyWithoutProductsInput = class Credit_memosUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateWithoutProductsInput_1.Credit_memosCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutProductsInput_1.Credit_memosCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosUpsertWithWhereUniqueWithoutProductsInput_1.Credit_memosUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateManyProductsInputEnvelope_1.Credit_memosCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateManyProductsInputEnvelope_1.Credit_memosCreateManyProductsInputEnvelope)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosUpdateWithWhereUniqueWithoutProductsInput_1.Credit_memosUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosUpdateManyWithWhereWithoutProductsInput_1.Credit_memosUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosScalarWhereInput_1.Credit_memosScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
Credit_memosUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], Credit_memosUpdateManyWithoutProductsInput);
exports.Credit_memosUpdateManyWithoutProductsInput = Credit_memosUpdateManyWithoutProductsInput;
