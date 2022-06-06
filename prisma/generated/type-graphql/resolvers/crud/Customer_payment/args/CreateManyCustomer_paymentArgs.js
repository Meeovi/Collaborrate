"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateManyInput_1 = require("../../../inputs/Customer_paymentCreateManyInput");
let CreateManyCustomer_paymentArgs = class CreateManyCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentCreateManyInput_1.Customer_paymentCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCustomer_paymentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCustomer_paymentArgs.prototype, "skipDuplicates", void 0);
CreateManyCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCustomer_paymentArgs);
exports.CreateManyCustomer_paymentArgs = CreateManyCustomer_paymentArgs;
