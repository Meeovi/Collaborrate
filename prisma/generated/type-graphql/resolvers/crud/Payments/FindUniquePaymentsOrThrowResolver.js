"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePaymentsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePaymentsOrThrowArgs_1 = require("./args/FindUniquePaymentsOrThrowArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let FindUniquePaymentsOrThrowResolver = class FindUniquePaymentsOrThrowResolver {
    async findUniquePaymentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePaymentsOrThrowArgs_1.FindUniquePaymentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePaymentsOrThrowResolver.prototype, "findUniquePaymentsOrThrow", null);
FindUniquePaymentsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], FindUniquePaymentsOrThrowResolver);
exports.FindUniquePaymentsOrThrowResolver = FindUniquePaymentsOrThrowResolver;
