"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueContent_typeArgs_1 = require("./args/FindUniqueContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let FindUniqueContent_typeResolver = class FindUniqueContent_typeResolver {
    async content_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueContent_typeArgs_1.FindUniqueContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueContent_typeResolver.prototype, "content_type", null);
FindUniqueContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], FindUniqueContent_typeResolver);
exports.FindUniqueContent_typeResolver = FindUniqueContent_typeResolver;
