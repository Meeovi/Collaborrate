"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutEmailsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutEmailsInput_1 = require("../inputs/CustomersCreateOrConnectWithoutEmailsInput");
const CustomersCreateWithoutEmailsInput_1 = require("../inputs/CustomersCreateWithoutEmailsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutEmailsInput = class CustomersCreateNestedOneWithoutEmailsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutEmailsInput_1.CustomersCreateWithoutEmailsInput)
], CustomersCreateNestedOneWithoutEmailsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutEmailsInput_1.CustomersCreateOrConnectWithoutEmailsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutEmailsInput_1.CustomersCreateOrConnectWithoutEmailsInput)
], CustomersCreateNestedOneWithoutEmailsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutEmailsInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutEmailsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutEmailsInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutEmailsInput);
exports.CustomersCreateNestedOneWithoutEmailsInput = CustomersCreateNestedOneWithoutEmailsInput;
