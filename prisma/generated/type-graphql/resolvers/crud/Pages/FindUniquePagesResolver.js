"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePagesArgs_1 = require("./args/FindUniquePagesArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let FindUniquePagesResolver = class FindUniquePagesResolver {
    async findUniquePages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pages_1.Pages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePagesArgs_1.FindUniquePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePagesResolver.prototype, "findUniquePages", null);
FindUniquePagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], FindUniquePagesResolver);
exports.FindUniquePagesResolver = FindUniquePagesResolver;
