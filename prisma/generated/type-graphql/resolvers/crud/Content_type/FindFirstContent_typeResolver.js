"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstContent_typeArgs_1 = require("./args/FindFirstContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let FindFirstContent_typeResolver = class FindFirstContent_typeResolver {
    async findFirstContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstContent_typeArgs_1.FindFirstContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstContent_typeResolver.prototype, "findFirstContent_type", null);
FindFirstContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], FindFirstContent_typeResolver);
exports.FindFirstContent_typeResolver = FindFirstContent_typeResolver;
