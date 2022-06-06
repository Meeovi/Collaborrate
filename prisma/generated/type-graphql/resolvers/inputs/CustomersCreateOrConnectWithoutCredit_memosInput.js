"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateWithoutCredit_memosInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutCredit_memosInput = class CustomersCreateOrConnectWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutCredit_memosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput)
], CustomersCreateOrConnectWithoutCredit_memosInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCredit_memosInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutCredit_memosInput);
exports.CustomersCreateOrConnectWithoutCredit_memosInput = CustomersCreateOrConnectWithoutCredit_memosInput;
