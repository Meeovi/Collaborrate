"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyContent_typeArgs_1 = require("./args/FindManyContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let FindManyContent_typeResolver = class FindManyContent_typeResolver {
    async content_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Content_type_1.Content_type], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyContent_typeArgs_1.FindManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyContent_typeResolver.prototype, "content_types", null);
FindManyContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], FindManyContent_typeResolver);
exports.FindManyContent_typeResolver = FindManyContent_typeResolver;
