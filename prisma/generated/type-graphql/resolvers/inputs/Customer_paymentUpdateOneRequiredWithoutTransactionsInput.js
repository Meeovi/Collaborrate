"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentUpdateOneRequiredWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateOrConnectWithoutTransactionsInput");
const Customer_paymentCreateWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateWithoutTransactionsInput");
const Customer_paymentUpdateWithoutTransactionsInput_1 = require("../inputs/Customer_paymentUpdateWithoutTransactionsInput");
const Customer_paymentUpsertWithoutTransactionsInput_1 = require("../inputs/Customer_paymentUpsertWithoutTransactionsInput");
const Customer_paymentWhereUniqueInput_1 = require("../inputs/Customer_paymentWhereUniqueInput");
let Customer_paymentUpdateOneRequiredWithoutTransactionsInput = class Customer_paymentUpdateOneRequiredWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput)
], Customer_paymentUpdateOneRequiredWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateOrConnectWithoutTransactionsInput_1.Customer_paymentCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateOrConnectWithoutTransactionsInput_1.Customer_paymentCreateOrConnectWithoutTransactionsInput)
], Customer_paymentUpdateOneRequiredWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpsertWithoutTransactionsInput_1.Customer_paymentUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpsertWithoutTransactionsInput_1.Customer_paymentUpsertWithoutTransactionsInput)
], Customer_paymentUpdateOneRequiredWithoutTransactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], Customer_paymentUpdateOneRequiredWithoutTransactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutTransactionsInput_1.Customer_paymentUpdateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateWithoutTransactionsInput_1.Customer_paymentUpdateWithoutTransactionsInput)
], Customer_paymentUpdateOneRequiredWithoutTransactionsInput.prototype, "update", void 0);
Customer_paymentUpdateOneRequiredWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentUpdateOneRequiredWithoutTransactionsInput", {
        isAbstract: true
    })
], Customer_paymentUpdateOneRequiredWithoutTransactionsInput);
exports.Customer_paymentUpdateOneRequiredWithoutTransactionsInput = Customer_paymentUpdateOneRequiredWithoutTransactionsInput;
