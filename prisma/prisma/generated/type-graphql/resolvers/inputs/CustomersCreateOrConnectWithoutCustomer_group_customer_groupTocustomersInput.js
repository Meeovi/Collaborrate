"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput = class CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput);
exports.CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput = CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput;
