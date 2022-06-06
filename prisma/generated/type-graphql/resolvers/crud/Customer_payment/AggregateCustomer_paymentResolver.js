"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomer_paymentArgs_1 = require("./args/AggregateCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const AggregateCustomer_payment_1 = require("../../outputs/AggregateCustomer_payment");
const helpers_1 = require("../../../helpers");
let AggregateCustomer_paymentResolver = class AggregateCustomer_paymentResolver {
    async aggregateCustomer_payment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_payment_1.AggregateCustomer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomer_paymentArgs_1.AggregateCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCustomer_paymentResolver.prototype, "aggregateCustomer_payment", null);
AggregateCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], AggregateCustomer_paymentResolver);
exports.AggregateCustomer_paymentResolver = AggregateCustomer_paymentResolver;
