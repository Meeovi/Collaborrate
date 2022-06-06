"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCreateNestedManyWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateManyCustomersInputEnvelope_1 = require("../inputs/Customer_groupCreateManyCustomersInputEnvelope");
const Customer_groupCreateOrConnectWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateOrConnectWithoutCustomersInput");
const Customer_groupCreateWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateWithoutCustomersInput");
const Customer_groupWhereUniqueInput_1 = require("../inputs/Customer_groupWhereUniqueInput");
let Customer_groupCreateNestedManyWithoutCustomersInput = class Customer_groupCreateNestedManyWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupCreateWithoutCustomersInput_1.Customer_groupCreateWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupCreateNestedManyWithoutCustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupCreateOrConnectWithoutCustomersInput_1.Customer_groupCreateOrConnectWithoutCustomersInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupCreateNestedManyWithoutCustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateManyCustomersInputEnvelope_1.Customer_groupCreateManyCustomersInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateManyCustomersInputEnvelope_1.Customer_groupCreateManyCustomersInputEnvelope)
], Customer_groupCreateNestedManyWithoutCustomersInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupCreateNestedManyWithoutCustomersInput.prototype, "connect", void 0);
Customer_groupCreateNestedManyWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCreateNestedManyWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupCreateNestedManyWithoutCustomersInput);
exports.Customer_groupCreateNestedManyWithoutCustomersInput = Customer_groupCreateNestedManyWithoutCustomersInput;
