"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPartnersArgs_1 = require("./args/DeleteManyPartnersArgs");
const Partners_1 = require("../../../models/Partners");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPartnersResolver = class DeleteManyPartnersResolver {
    async deleteManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPartnersArgs_1.DeleteManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPartnersResolver.prototype, "deleteManyPartners", null);
DeleteManyPartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], DeleteManyPartnersResolver);
exports.DeleteManyPartnersResolver = DeleteManyPartnersResolver;
