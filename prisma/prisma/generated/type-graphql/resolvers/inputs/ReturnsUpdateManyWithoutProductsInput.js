"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsUpdateManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateManyProductsInputEnvelope_1 = require("../inputs/ReturnsCreateManyProductsInputEnvelope");
const ReturnsCreateOrConnectWithoutProductsInput_1 = require("../inputs/ReturnsCreateOrConnectWithoutProductsInput");
const ReturnsCreateWithoutProductsInput_1 = require("../inputs/ReturnsCreateWithoutProductsInput");
const ReturnsScalarWhereInput_1 = require("../inputs/ReturnsScalarWhereInput");
const ReturnsUpdateManyWithWhereWithoutProductsInput_1 = require("../inputs/ReturnsUpdateManyWithWhereWithoutProductsInput");
const ReturnsUpdateWithWhereUniqueWithoutProductsInput_1 = require("../inputs/ReturnsUpdateWithWhereUniqueWithoutProductsInput");
const ReturnsUpsertWithWhereUniqueWithoutProductsInput_1 = require("../inputs/ReturnsUpsertWithWhereUniqueWithoutProductsInput");
const ReturnsWhereUniqueInput_1 = require("../inputs/ReturnsWhereUniqueInput");
let ReturnsUpdateManyWithoutProductsInput = class ReturnsUpdateManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateWithoutProductsInput_1.ReturnsCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutProductsInput_1.ReturnsCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsUpsertWithWhereUniqueWithoutProductsInput_1.ReturnsUpsertWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateManyProductsInputEnvelope_1.ReturnsCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateManyProductsInputEnvelope_1.ReturnsCreateManyProductsInputEnvelope)
], ReturnsUpdateManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsUpdateWithWhereUniqueWithoutProductsInput_1.ReturnsUpdateWithWhereUniqueWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsUpdateManyWithWhereWithoutProductsInput_1.ReturnsUpdateManyWithWhereWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsScalarWhereInput_1.ReturnsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReturnsUpdateManyWithoutProductsInput.prototype, "deleteMany", void 0);
ReturnsUpdateManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsUpdateManyWithoutProductsInput", {
        isAbstract: true
    })
], ReturnsUpdateManyWithoutProductsInput);
exports.ReturnsUpdateManyWithoutProductsInput = ReturnsUpdateManyWithoutProductsInput;
