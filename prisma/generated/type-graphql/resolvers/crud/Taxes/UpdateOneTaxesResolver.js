"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTaxesArgs_1 = require("./args/UpdateOneTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const helpers_1 = require("../../../helpers");
let UpdateOneTaxesResolver = class UpdateOneTaxesResolver {
    async updateOneTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTaxesArgs_1.UpdateOneTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTaxesResolver.prototype, "updateOneTaxes", null);
UpdateOneTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], UpdateOneTaxesResolver);
exports.UpdateOneTaxesResolver = UpdateOneTaxesResolver;
