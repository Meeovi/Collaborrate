"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOnePaymentsArgs_1 = require("./args/UpsertOnePaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let UpsertOnePaymentsResolver = class UpsertOnePaymentsResolver {
    async upsertOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePaymentsArgs_1.UpsertOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOnePaymentsResolver.prototype, "upsertOnePayments", null);
UpsertOnePaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], UpsertOnePaymentsResolver);
exports.UpsertOnePaymentsResolver = UpsertOnePaymentsResolver;
