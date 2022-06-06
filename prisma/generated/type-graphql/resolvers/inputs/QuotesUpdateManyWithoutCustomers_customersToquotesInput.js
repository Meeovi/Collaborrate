"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateManyWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyCustomers_customersToquotesInputEnvelope_1 = require("../inputs/QuotesCreateManyCustomers_customersToquotesInputEnvelope");
const QuotesCreateOrConnectWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateOrConnectWithoutCustomers_customersToquotesInput");
const QuotesCreateWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateWithoutCustomers_customersToquotesInput");
const QuotesScalarWhereInput_1 = require("../inputs/QuotesScalarWhereInput");
const QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput");
const QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput");
const QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpdateManyWithoutCustomers_customersToquotesInput = class QuotesUpdateManyWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateWithoutCustomers_customersToquotesInput_1.QuotesCreateWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutCustomers_customersToquotesInput_1.QuotesCreateOrConnectWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput_1.QuotesUpsertWithWhereUniqueWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateManyCustomers_customersToquotesInputEnvelope_1.QuotesCreateManyCustomers_customersToquotesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateManyCustomers_customersToquotesInputEnvelope_1.QuotesCreateManyCustomers_customersToquotesInputEnvelope)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput_1.QuotesUpdateWithWhereUniqueWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput_1.QuotesUpdateManyWithWhereWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesScalarWhereInput_1.QuotesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesUpdateManyWithoutCustomers_customersToquotesInput.prototype, "deleteMany", void 0);
QuotesUpdateManyWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateManyWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesUpdateManyWithoutCustomers_customersToquotesInput);
exports.QuotesUpdateManyWithoutCustomers_customersToquotesInput = QuotesUpdateManyWithoutCustomers_customersToquotesInput;
