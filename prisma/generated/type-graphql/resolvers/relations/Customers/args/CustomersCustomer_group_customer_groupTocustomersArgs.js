"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCustomer_group_customer_groupTocustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByWithRelationInput_1 = require("../../../inputs/Customer_groupOrderByWithRelationInput");
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
const Customer_groupWhereUniqueInput_1 = require("../../../inputs/Customer_groupWhereUniqueInput");
const Customer_groupScalarFieldEnum_1 = require("../../../../enums/Customer_groupScalarFieldEnum");
let CustomersCustomer_group_customer_groupTocustomersArgs = class CustomersCustomer_group_customer_groupTocustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], CustomersCustomer_group_customer_groupTocustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupOrderByWithRelationInput_1.Customer_groupOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersCustomer_group_customer_groupTocustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], CustomersCustomer_group_customer_groupTocustomersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersCustomer_group_customer_groupTocustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersCustomer_group_customer_groupTocustomersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupScalarFieldEnum_1.Customer_groupScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersCustomer_group_customer_groupTocustomersArgs.prototype, "distinct", void 0);
CustomersCustomer_group_customer_groupTocustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CustomersCustomer_group_customer_groupTocustomersArgs);
exports.CustomersCustomer_group_customer_groupTocustomersArgs = CustomersCustomer_group_customer_groupTocustomersArgs;
