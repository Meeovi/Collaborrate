"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCategoriesArgs_1 = require("./args/UpdateCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let UpdateCategoriesResolver = class UpdateCategoriesResolver {
    async updateCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCategoriesArgs_1.UpdateCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCategoriesResolver.prototype, "updateCategories", null);
UpdateCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], UpdateCategoriesResolver);
exports.UpdateCategoriesResolver = UpdateCategoriesResolver;
