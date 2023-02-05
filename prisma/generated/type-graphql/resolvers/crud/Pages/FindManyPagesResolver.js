"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyPagesArgs_1 = require("./args/FindManyPagesArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let FindManyPagesResolver = class FindManyPagesResolver {
    async findManyPages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Pages_1.Pages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPagesArgs_1.FindManyPagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPagesResolver.prototype, "findManyPages", null);
FindManyPagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], FindManyPagesResolver);
exports.FindManyPagesResolver = FindManyPagesResolver;
