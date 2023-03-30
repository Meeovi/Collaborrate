"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyPartnersArgs_1 = require("./args/UpdateManyPartnersArgs");
const Partners_1 = require("../../../models/Partners");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPartnersResolver = class UpdateManyPartnersResolver {
    async updateManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPartnersArgs_1.UpdateManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyPartnersResolver.prototype, "updateManyPartners", null);
UpdateManyPartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], UpdateManyPartnersResolver);
exports.UpdateManyPartnersResolver = UpdateManyPartnersResolver;
