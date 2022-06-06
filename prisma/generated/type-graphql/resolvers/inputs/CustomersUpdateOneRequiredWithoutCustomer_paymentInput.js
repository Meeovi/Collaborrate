"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCustomer_paymentInput");
const CustomersCreateWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateWithoutCustomer_paymentInput");
const CustomersUpdateWithoutCustomer_paymentInput_1 = require("../inputs/CustomersUpdateWithoutCustomer_paymentInput");
const CustomersUpsertWithoutCustomer_paymentInput_1 = require("../inputs/CustomersUpsertWithoutCustomer_paymentInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutCustomer_paymentInput = class CustomersUpdateOneRequiredWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCustomer_paymentInput_1.CustomersCreateWithoutCustomer_paymentInput)
], CustomersUpdateOneRequiredWithoutCustomer_paymentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_paymentInput_1.CustomersCreateOrConnectWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCustomer_paymentInput_1.CustomersCreateOrConnectWithoutCustomer_paymentInput)
], CustomersUpdateOneRequiredWithoutCustomer_paymentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutCustomer_paymentInput_1.CustomersUpsertWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutCustomer_paymentInput_1.CustomersUpsertWithoutCustomer_paymentInput)
], CustomersUpdateOneRequiredWithoutCustomer_paymentInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutCustomer_paymentInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_paymentInput_1.CustomersUpdateWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCustomer_paymentInput_1.CustomersUpdateWithoutCustomer_paymentInput)
], CustomersUpdateOneRequiredWithoutCustomer_paymentInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutCustomer_paymentInput);
exports.CustomersUpdateOneRequiredWithoutCustomer_paymentInput = CustomersUpdateOneRequiredWithoutCustomer_paymentInput;
