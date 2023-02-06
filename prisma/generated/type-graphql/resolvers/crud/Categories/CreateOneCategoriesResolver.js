"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCategoriesArgs_1 = require("./args/CreateOneCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let CreateOneCategoriesResolver = class CreateOneCategoriesResolver {
    async createOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCategoriesArgs_1.CreateOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCategoriesResolver.prototype, "createOneCategories", null);
CreateOneCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], CreateOneCategoriesResolver);
exports.CreateOneCategoriesResolver = CreateOneCategoriesResolver;
