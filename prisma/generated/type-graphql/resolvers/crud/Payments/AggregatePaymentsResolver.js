"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePaymentsArgs_1 = require("./args/AggregatePaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const AggregatePayments_1 = require("../../outputs/AggregatePayments");
const helpers_1 = require("../../../helpers");
let AggregatePaymentsResolver = class AggregatePaymentsResolver {
    async aggregatePayments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePayments_1.AggregatePayments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePaymentsArgs_1.AggregatePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePaymentsResolver.prototype, "aggregatePayments", null);
AggregatePaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], AggregatePaymentsResolver);
exports.AggregatePaymentsResolver = AggregatePaymentsResolver;
