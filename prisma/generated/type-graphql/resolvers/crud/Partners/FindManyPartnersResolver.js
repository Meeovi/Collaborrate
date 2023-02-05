"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyPartnersArgs_1 = require("./args/FindManyPartnersArgs");
const Partners_1 = require("../../../models/Partners");
const helpers_1 = require("../../../helpers");
let FindManyPartnersResolver = class FindManyPartnersResolver {
    async findManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Partners_1.Partners], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPartnersArgs_1.FindManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPartnersResolver.prototype, "findManyPartners", null);
FindManyPartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], FindManyPartnersResolver);
exports.FindManyPartnersResolver = FindManyPartnersResolver;
