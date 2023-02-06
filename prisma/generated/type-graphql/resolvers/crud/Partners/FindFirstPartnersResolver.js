"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPartnersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPartnersArgs_1 = require("./args/FindFirstPartnersArgs");
const Partners_1 = require("../../../models/Partners");
const helpers_1 = require("../../../helpers");
let FindFirstPartnersResolver = class FindFirstPartnersResolver {
    async findFirstPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPartnersArgs_1.FindFirstPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPartnersResolver.prototype, "findFirstPartners", null);
FindFirstPartnersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], FindFirstPartnersResolver);
exports.FindFirstPartnersResolver = FindFirstPartnersResolver;
