"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePartnersOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePartnersOrThrowArgs_1 = require("./args/FindUniquePartnersOrThrowArgs");
const Partners_1 = require("../../../models/Partners");
const helpers_1 = require("../../../helpers");
let FindUniquePartnersOrThrowResolver = class FindUniquePartnersOrThrowResolver {
    async findUniquePartnersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePartnersOrThrowArgs_1.FindUniquePartnersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePartnersOrThrowResolver.prototype, "findUniquePartnersOrThrow", null);
FindUniquePartnersOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], FindUniquePartnersOrThrowResolver);
exports.FindUniquePartnersOrThrowResolver = FindUniquePartnersOrThrowResolver;
