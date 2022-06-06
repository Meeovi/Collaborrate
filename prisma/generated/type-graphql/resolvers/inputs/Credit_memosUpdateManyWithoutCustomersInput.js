"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosCreateManyCustomersInputEnvelope_1 = require("../inputs/Credit_memosCreateManyCustomersInputEnvelope");
const Credit_memosCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateOrConnectWithoutCustomersInput");
const Credit_memosCreateWithoutCustomersInput_1 = require("../inputs/Credit_memosCreateWithoutCustomersInput");
const Credit_memosScalarWhereInput_1 = require("../inputs/Credit_memosScalarWhereInput");
const Credit_memosUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateManyWithWhereWithoutCustomersInput");
const Credit_memosUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/Credit_memosUpdateWithWhereUniqueWithoutCustomersInput");
const Credit_memosUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/Credit_memosUpsertWithWhereUniqueWithoutCustomersInput");
const Credit_memosWhereUniqueInput_1 = require("../inputs/Credit_memosWhereUniqueInput");
let Credit_memosUpdateManyWithoutCustomersInput = class Credit_memosUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateWithoutCustomersInput_1.Credit_memosCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosCreateOrConnectWithoutCustomersInput_1.Credit_memosCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosUpsertWithWhereUniqueWithoutCustomersInput_1.Credit_memosUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateManyCustomersInputEnvelope_1.Credit_memosCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateManyCustomersInputEnvelope_1.Credit_memosCreateManyCustomersInputEnvelope)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosWhereUniqueInput_1.Credit_memosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosUpdateWithWhereUniqueWithoutCustomersInput_1.Credit_memosUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosUpdateManyWithWhereWithoutCustomersInput_1.Credit_memosUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosScalarWhereInput_1.Credit_memosScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Credit_memosUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
Credit_memosUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], Credit_memosUpdateManyWithoutCustomersInput);
exports.Credit_memosUpdateManyWithoutCustomersInput = Credit_memosUpdateManyWithoutCustomersInput;
