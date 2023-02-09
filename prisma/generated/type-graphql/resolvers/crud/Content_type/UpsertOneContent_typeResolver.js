"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneContent_typeArgs_1 = require("./args/UpsertOneContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const helpers_1 = require("../../../helpers");
let UpsertOneContent_typeResolver = class UpsertOneContent_typeResolver {
    async upsertOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Content_type_1.Content_type, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneContent_typeArgs_1.UpsertOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneContent_typeResolver.prototype, "upsertOneContent_type", null);
UpsertOneContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], UpsertOneContent_typeResolver);
exports.UpsertOneContent_typeResolver = UpsertOneContent_typeResolver;
