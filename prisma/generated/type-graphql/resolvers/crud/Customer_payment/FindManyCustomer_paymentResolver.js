"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCustomer_paymentArgs_1 = require("./args/FindManyCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const helpers_1 = require("../../../helpers");
let FindManyCustomer_paymentResolver = class FindManyCustomer_paymentResolver {
    async customer_payments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_payment_1.Customer_payment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomer_paymentArgs_1.FindManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCustomer_paymentResolver.prototype, "customer_payments", null);
FindManyCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], FindManyCustomer_paymentResolver);
exports.FindManyCustomer_paymentResolver = FindManyCustomer_paymentResolver;
