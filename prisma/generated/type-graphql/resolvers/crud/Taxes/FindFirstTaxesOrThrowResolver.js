"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaxesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTaxesOrThrowArgs_1 = require("./args/FindFirstTaxesOrThrowArgs");
const Taxes_1 = require("../../../models/Taxes");
const helpers_1 = require("../../../helpers");
let FindFirstTaxesOrThrowResolver = class FindFirstTaxesOrThrowResolver {
    async findFirstTaxesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaxesOrThrowArgs_1.FindFirstTaxesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTaxesOrThrowResolver.prototype, "findFirstTaxesOrThrow", null);
FindFirstTaxesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], FindFirstTaxesOrThrowResolver);
exports.FindFirstTaxesOrThrowResolver = FindFirstTaxesOrThrowResolver;
