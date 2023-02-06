"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCategoriesArgs_1 = require("./args/UpsertOneCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let UpsertOneCategoriesResolver = class UpsertOneCategoriesResolver {
    async upsertOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCategoriesArgs_1.UpsertOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCategoriesResolver.prototype, "upsertOneCategories", null);
UpsertOneCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], UpsertOneCategoriesResolver);
exports.UpsertOneCategoriesResolver = UpsertOneCategoriesResolver;
