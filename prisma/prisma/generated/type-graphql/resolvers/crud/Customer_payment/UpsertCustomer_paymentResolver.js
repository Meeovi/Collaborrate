"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCustomer_paymentArgs_1 = require("./args/UpsertCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const helpers_1 = require("../../../helpers");
let UpsertCustomer_paymentResolver = class UpsertCustomer_paymentResolver {
    async upsertCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCustomer_paymentArgs_1.UpsertCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCustomer_paymentResolver.prototype, "upsertCustomer_payment", null);
UpsertCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], UpsertCustomer_paymentResolver);
exports.UpsertCustomer_paymentResolver = UpsertCustomer_paymentResolver;
