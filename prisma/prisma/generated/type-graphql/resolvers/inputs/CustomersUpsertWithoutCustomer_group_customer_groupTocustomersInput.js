"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput");
let CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput = class CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput.prototype, "create", void 0);
CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput);
exports.CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput = CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput;
