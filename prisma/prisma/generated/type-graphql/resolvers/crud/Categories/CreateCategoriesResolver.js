"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateCategoriesArgs_1 = require("./args/CreateCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let CreateCategoriesResolver = class CreateCategoriesResolver {
    async createCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCategoriesArgs_1.CreateCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateCategoriesResolver.prototype, "createCategories", null);
CreateCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], CreateCategoriesResolver);
exports.CreateCategoriesResolver = CreateCategoriesResolver;
