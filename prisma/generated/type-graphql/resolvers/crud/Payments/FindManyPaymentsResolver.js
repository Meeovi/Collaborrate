"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyPaymentsArgs_1 = require("./args/FindManyPaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let FindManyPaymentsResolver = class FindManyPaymentsResolver {
    async findManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Payments_1.Payments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPaymentsArgs_1.FindManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPaymentsResolver.prototype, "findManyPayments", null);
FindManyPaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], FindManyPaymentsResolver);
exports.FindManyPaymentsResolver = FindManyPaymentsResolver;
