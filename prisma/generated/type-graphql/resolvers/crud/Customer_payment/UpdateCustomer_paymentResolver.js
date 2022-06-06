"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCustomer_paymentArgs_1 = require("./args/UpdateCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const helpers_1 = require("../../../helpers");
let UpdateCustomer_paymentResolver = class UpdateCustomer_paymentResolver {
    async updateCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCustomer_paymentArgs_1.UpdateCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCustomer_paymentResolver.prototype, "updateCustomer_payment", null);
UpdateCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], UpdateCustomer_paymentResolver);
exports.UpdateCustomer_paymentResolver = UpdateCustomer_paymentResolver;
