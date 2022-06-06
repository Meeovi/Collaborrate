"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateWithoutCustomersInput");
const Customer_groupWhereUniqueInput_1 = require("../inputs/Customer_groupWhereUniqueInput");
let Customer_groupCreateOrConnectWithoutCustomersInput = class Customer_groupCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], Customer_groupCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomersInput_1.Customer_groupCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateWithoutCustomersInput_1.Customer_groupCreateWithoutCustomersInput)
], Customer_groupCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
Customer_groupCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupCreateOrConnectWithoutCustomersInput);
exports.Customer_groupCreateOrConnectWithoutCustomersInput = Customer_groupCreateOrConnectWithoutCustomersInput;
