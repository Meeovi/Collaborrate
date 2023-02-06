"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOnePartnersArgs_1 = require("./args/UpsertOnePartnersArgs");
const Partners_1 = require("../../../models/Partners");
const helpers_1 = require("../../../helpers");
let UpsertOnePartnersResolver = class UpsertOnePartnersResolver {
    async upsertOnePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Partners_1.Partners, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePartnersArgs_1.UpsertOnePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOnePartnersResolver.prototype, "upsertOnePartners", null);
UpsertOnePartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], UpsertOnePartnersResolver);
exports.UpsertOnePartnersResolver = UpsertOnePartnersResolver;
