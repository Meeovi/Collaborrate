"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePartnersArgs_1 = require("./args/FindUniquePartnersArgs");
const Partners_1 = require("../../../models/Partners");
const helpers_1 = require("../../../helpers");
let FindUniquePartnersResolver = class FindUniquePartnersResolver {
    async findUniquePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePartnersArgs_1.FindUniquePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePartnersResolver.prototype, "findUniquePartners", null);
FindUniquePartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], FindUniquePartnersResolver);
exports.FindUniquePartnersResolver = FindUniquePartnersResolver;
