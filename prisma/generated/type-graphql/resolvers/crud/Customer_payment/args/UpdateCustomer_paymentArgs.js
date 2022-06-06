"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentUpdateInput_1 = require("../../../inputs/Customer_paymentUpdateInput");
const Customer_paymentWhereUniqueInput_1 = require("../../../inputs/Customer_paymentWhereUniqueInput");
let UpdateCustomer_paymentArgs = class UpdateCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateInput_1.Customer_paymentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateInput_1.Customer_paymentUpdateInput)
], UpdateCustomer_paymentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], UpdateCustomer_paymentArgs.prototype, "where", void 0);
UpdateCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCustomer_paymentArgs);
exports.UpdateCustomer_paymentArgs = UpdateCustomer_paymentArgs;
