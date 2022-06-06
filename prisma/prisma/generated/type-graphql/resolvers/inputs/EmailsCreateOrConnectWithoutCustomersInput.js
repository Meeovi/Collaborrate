"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsCreateWithoutCustomersInput_1 = require("../inputs/EmailsCreateWithoutCustomersInput");
const EmailsWhereUniqueInput_1 = require("../inputs/EmailsWhereUniqueInput");
let EmailsCreateOrConnectWithoutCustomersInput = class EmailsCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereUniqueInput_1.EmailsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsWhereUniqueInput_1.EmailsWhereUniqueInput)
], EmailsCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsCreateWithoutCustomersInput_1.EmailsCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EmailsCreateWithoutCustomersInput_1.EmailsCreateWithoutCustomersInput)
], EmailsCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
EmailsCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsCreateOrConnectWithoutCustomersInput);
exports.EmailsCreateOrConnectWithoutCustomersInput = EmailsCreateOrConnectWithoutCustomersInput;
