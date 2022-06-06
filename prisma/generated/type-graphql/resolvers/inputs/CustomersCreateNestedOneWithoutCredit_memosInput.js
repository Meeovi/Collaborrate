"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCredit_memosInput");
const CustomersCreateWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateWithoutCredit_memosInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutCredit_memosInput = class CustomersCreateNestedOneWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput)
], CustomersCreateNestedOneWithoutCredit_memosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCredit_memosInput_1.CustomersCreateOrConnectWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCredit_memosInput_1.CustomersCreateOrConnectWithoutCredit_memosInput)
], CustomersCreateNestedOneWithoutCredit_memosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutCredit_memosInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCredit_memosInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutCredit_memosInput);
exports.CustomersCreateNestedOneWithoutCredit_memosInput = CustomersCreateNestedOneWithoutCredit_memosInput;
