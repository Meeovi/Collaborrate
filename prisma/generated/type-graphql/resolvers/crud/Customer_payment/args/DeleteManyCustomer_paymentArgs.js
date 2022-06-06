"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentWhereInput_1 = require("../../../inputs/Customer_paymentWhereInput");
let DeleteManyCustomer_paymentArgs = class DeleteManyCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], DeleteManyCustomer_paymentArgs.prototype, "where", void 0);
DeleteManyCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCustomer_paymentArgs);
exports.DeleteManyCustomer_paymentArgs = DeleteManyCustomer_paymentArgs;
