"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTaxesArgs_1 = require("./args/UpdateManyTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTaxesResolver = class UpdateManyTaxesResolver {
    async updateManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaxesArgs_1.UpdateManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTaxesResolver.prototype, "updateManyTaxes", null);
UpdateManyTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], UpdateManyTaxesResolver);
exports.UpdateManyTaxesResolver = UpdateManyTaxesResolver;
