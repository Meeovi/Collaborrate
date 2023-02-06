"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTaxesArgs_1 = require("./args/FindUniqueTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const helpers_1 = require("../../../helpers");
let FindUniqueTaxesResolver = class FindUniqueTaxesResolver {
    async findUniqueTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaxesArgs_1.FindUniqueTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTaxesResolver.prototype, "findUniqueTaxes", null);
FindUniqueTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], FindUniqueTaxesResolver);
exports.FindUniqueTaxesResolver = FindUniqueTaxesResolver;
