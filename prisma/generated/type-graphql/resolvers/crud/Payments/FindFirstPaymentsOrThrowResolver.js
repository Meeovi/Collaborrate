"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPaymentsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPaymentsOrThrowArgs_1 = require("./args/FindFirstPaymentsOrThrowArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let FindFirstPaymentsOrThrowResolver = class FindFirstPaymentsOrThrowResolver {
    async findFirstPaymentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPaymentsOrThrowArgs_1.FindFirstPaymentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPaymentsOrThrowResolver.prototype, "findFirstPaymentsOrThrow", null);
FindFirstPaymentsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], FindFirstPaymentsOrThrowResolver);
exports.FindFirstPaymentsOrThrowResolver = FindFirstPaymentsOrThrowResolver;
