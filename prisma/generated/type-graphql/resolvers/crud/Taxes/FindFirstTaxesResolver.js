"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTaxesArgs_1 = require("./args/FindFirstTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const helpers_1 = require("../../../helpers");
let FindFirstTaxesResolver = class FindFirstTaxesResolver {
    async findFirstTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaxesArgs_1.FindFirstTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTaxesResolver.prototype, "findFirstTaxes", null);
FindFirstTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], FindFirstTaxesResolver);
exports.FindFirstTaxesResolver = FindFirstTaxesResolver;
