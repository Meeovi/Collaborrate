"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOnePartnersArgs_1 = require("./args/UpdateOnePartnersArgs");
const Partners_1 = require("../../../models/Partners");
const helpers_1 = require("../../../helpers");
let UpdateOnePartnersResolver = class UpdateOnePartnersResolver {
    async updateOnePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePartnersArgs_1.UpdateOnePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOnePartnersResolver.prototype, "updateOnePartners", null);
UpdateOnePartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], UpdateOnePartnersResolver);
exports.UpdateOnePartnersResolver = UpdateOnePartnersResolver;
