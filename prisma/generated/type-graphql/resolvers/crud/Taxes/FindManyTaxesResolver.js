"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTaxesArgs_1 = require("./args/FindManyTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const helpers_1 = require("../../../helpers");
let FindManyTaxesResolver = class FindManyTaxesResolver {
    async findManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Taxes_1.Taxes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTaxesArgs_1.FindManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTaxesResolver.prototype, "findManyTaxes", null);
FindManyTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], FindManyTaxesResolver);
exports.FindManyTaxesResolver = FindManyTaxesResolver;
