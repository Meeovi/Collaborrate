"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyCustomersInputEnvelope_1 = require("../inputs/ReturnsCreateManyCustomersInputEnvelope");
const ReturnsCreateOrConnectWithoutCustomersInput_1 = require("../inputs/ReturnsCreateOrConnectWithoutCustomersInput");
const ReturnsCreateWithoutCustomersInput_1 = require("../inputs/ReturnsCreateWithoutCustomersInput");
const ReturnsScalarWhereInput_1 = require("../inputs/ReturnsScalarWhereInput");
const ReturnsUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateManyWithWhereWithoutCustomersInput");
const ReturnsUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/ReturnsUpdateWithWhereUniqueWithoutCustomersInput");
const ReturnsUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/ReturnsUpsertWithWhereUniqueWithoutCustomersInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsUpdateManyWithoutCustomersInput = class ReturnsUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateWithoutCustomersInput_1.ReturnsCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutCustomersInput_1.ReturnsCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsUpsertWithWhereUniqueWithoutCustomersInput_1.ReturnsUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateManyCustomersInputEnvelope_1.ReturnsCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateManyCustomersInputEnvelope_1.ReturnsCreateManyCustomersInputEnvelope)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsUpdateWithWhereUniqueWithoutCustomersInput_1.ReturnsUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsUpdateManyWithWhereWithoutCustomersInput_1.ReturnsUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsScalarWhereInput_1.ReturnsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
ReturnsUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], ReturnsUpdateManyWithoutCustomersInput);
exports.ReturnsUpdateManyWithoutCustomersInput = ReturnsUpdateManyWithoutCustomersInput;
