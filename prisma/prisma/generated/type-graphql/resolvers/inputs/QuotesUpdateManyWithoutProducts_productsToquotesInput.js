"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateManyWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyProducts_productsToquotesInputEnvelope_1 = require("../inputs/QuotesCreateManyProducts_productsToquotesInputEnvelope");
const QuotesCreateOrConnectWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateOrConnectWithoutProducts_productsToquotesInput");
const QuotesCreateWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateWithoutProducts_productsToquotesInput");
const QuotesScalarWhereInput_1 = require("../inputs/QuotesScalarWhereInput");
const QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput");
const QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput");
const QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpdateManyWithoutProducts_productsToquotesInput = class QuotesUpdateManyWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateWithoutProducts_productsToquotesInput_1.QuotesCreateWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutProducts_productsToquotesInput_1.QuotesCreateOrConnectWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput_1.QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateManyProducts_productsToquotesInputEnvelope_1.QuotesCreateManyProducts_productsToquotesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateManyProducts_productsToquotesInputEnvelope_1.QuotesCreateManyProducts_productsToquotesInputEnvelope)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput_1.QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput_1.QuotesUpdateManyWithWhereWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesScalarWhereInput_1.QuotesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutProducts_productsToquotesInput.prototype, "deleteMany", void 0);
QuotesUpdateManyWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateManyWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesUpdateManyWithoutProducts_productsToquotesInput);
exports.QuotesUpdateManyWithoutProducts_productsToquotesInput = QuotesUpdateManyWithoutProducts_productsToquotesInput;
