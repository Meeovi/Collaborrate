"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput = class CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput);
exports.CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput = CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput;
