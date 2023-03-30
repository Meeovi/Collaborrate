"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePagesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniquePagesOrThrowArgs_1 = require("./args/FindUniquePagesOrThrowArgs");
const Pages_1 = require("../../../models/Pages");
const helpers_1 = require("../../../helpers");
let FindUniquePagesOrThrowResolver = class FindUniquePagesOrThrowResolver {
    async findUniquePagesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePagesOrThrowArgs_1.FindUniquePagesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePagesOrThrowResolver.prototype, "findUniquePagesOrThrow", null);
FindUniquePagesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], FindUniquePagesOrThrowResolver);
exports.FindUniquePagesOrThrowResolver = FindUniquePagesOrThrowResolver;
