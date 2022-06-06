"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsUpdateManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateManyCustomersInputEnvelope_1 = require("../inputs/EmailsCreateManyCustomersInputEnvelope");
const EmailsCreateOrConnectWithoutCustomersInput_1 = require("../inputs/EmailsCreateOrConnectWithoutCustomersInput");
const EmailsCreateWithoutCustomersInput_1 = require("../inputs/EmailsCreateWithoutCustomersInput");
const EmailsScalarWhereInput_1 = require("../inputs/EmailsScalarWhereInput");
const EmailsUpdateManyWithWhereWithoutCustomersInput_1 = require("../inputs/EmailsUpdateManyWithWhereWithoutCustomersInput");
const EmailsUpdateWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/EmailsUpdateWithWhereUniqueWithoutCustomersInput");
const EmailsUpsertWithWhereUniqueWithoutCustomersInput_1 = require("../inputs/EmailsUpsertWithWhereUniqueWithoutCustomersInput");
const EmailsWhereUniqueInput_1 = require("../inputs/EmailsWhereUniqueInput");
let EmailsUpdateManyWithoutCustomersInput = class EmailsUpdateManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsCreateWithoutCustomersInput_1.EmailsCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsCreateOrConnectWithoutCustomersInput_1.EmailsCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsUpsertWithWhereUniqueWithoutCustomersInput_1.EmailsUpsertWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateManyCustomersInputEnvelope_1.EmailsCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateManyCustomersInputEnvelope_1.EmailsCreateManyCustomersInputEnvelope)
], EmailsUpdateManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereUniqueInput_1.EmailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereUniqueInput_1.EmailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereUniqueInput_1.EmailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereUniqueInput_1.EmailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsUpdateWithWhereUniqueWithoutCustomersInput_1.EmailsUpdateWithWhereUniqueWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsUpdateManyWithWhereWithoutCustomersInput_1.EmailsUpdateManyWithWhereWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsScalarWhereInput_1.EmailsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsUpdateManyWithoutCustomersInput.prototype, "deleteMany", void 0);
EmailsUpdateManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsUpdateManyWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsUpdateManyWithoutCustomersInput);
exports.EmailsUpdateManyWithoutCustomersInput = EmailsUpdateManyWithoutCustomersInput;
