"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutEmailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutEmailsInput_1 = require("../inputs/CustomersCreateWithoutEmailsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutEmailsInput = class CustomersCreateOrConnectWithoutEmailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutEmailsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput)
], CustomersCreateOrConnectWithoutEmailsInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutEmailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutEmailsInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutEmailsInput);
exports.CustomersCreateOrConnectWithoutEmailsInput = CustomersCreateOrConnectWithoutEmailsInput;
