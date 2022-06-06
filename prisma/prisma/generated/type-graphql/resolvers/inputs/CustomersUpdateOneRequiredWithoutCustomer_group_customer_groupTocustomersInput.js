"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput_1 = require("../inputs/CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput = class CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput_1.CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput)
], CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput);
exports.CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput = CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput;
