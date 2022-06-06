"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCategoriesArgs_1 = require("./args/UpsertCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let UpsertCategoriesResolver = class UpsertCategoriesResolver {
    async upsertCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCategoriesArgs_1.UpsertCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCategoriesResolver.prototype, "upsertCategories", null);
UpsertCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], UpsertCategoriesResolver);
exports.UpsertCategoriesResolver = UpsertCategoriesResolver;
