"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContent_typeOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueContent_typeOrThrowArgs_1 = require("./args/FindUniqueContent_typeOrThrowArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let FindUniqueContent_typeOrThrowResolver = class FindUniqueContent_typeOrThrowResolver {
    async getContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueContent_typeOrThrowArgs_1.FindUniqueContent_typeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueContent_typeOrThrowResolver.prototype, "getContent_type", null);
FindUniqueContent_typeOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], FindUniqueContent_typeOrThrowResolver);
exports.FindUniqueContent_typeOrThrowResolver = FindUniqueContent_typeOrThrowResolver;
