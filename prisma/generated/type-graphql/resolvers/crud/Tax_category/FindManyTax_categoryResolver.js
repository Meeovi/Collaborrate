"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyTax_categoryArgs_1 = require("./args/FindManyTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const helpers_1 = require("../../../helpers");
let FindManyTax_categoryResolver = class FindManyTax_categoryResolver {
    async tax_categories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tax_category_1.Tax_category], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTax_categoryArgs_1.FindManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTax_categoryResolver.prototype, "tax_categories", null);
FindManyTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], FindManyTax_categoryResolver);
exports.FindManyTax_categoryResolver = FindManyTax_categoryResolver;
