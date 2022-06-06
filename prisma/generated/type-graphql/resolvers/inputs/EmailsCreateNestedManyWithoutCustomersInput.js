"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateManyCustomersInputEnvelope_1 = require("../inputs/EmailsCreateManyCustomersInputEnvelope");
const EmailsCreateOrConnectWithoutCustomersInput_1 = require("../inputs/EmailsCreateOrConnectWithoutCustomersInput");
const EmailsCreateWithoutCustomersInput_1 = require("../inputs/EmailsCreateWithoutCustomersInput");
const EmailsWhereUniqueInput_1 = require("../inputs/EmailsWhereUniqueInput");
let EmailsCreateNestedManyWithoutCustomersInput = class EmailsCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsCreateWithoutCustomersInput_1.EmailsCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsCreateOrConnectWithoutCustomersInput_1.EmailsCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateManyCustomersInputEnvelope_1.EmailsCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsCreateManyCustomersInputEnvelope_1.EmailsCreateManyCustomersInputEnvelope)
], EmailsCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereUniqueInput_1.EmailsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
EmailsCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsCreateNestedManyWithoutCustomersInput);
exports.EmailsCreateNestedManyWithoutCustomersInput = EmailsCreateNestedManyWithoutCustomersInput;
