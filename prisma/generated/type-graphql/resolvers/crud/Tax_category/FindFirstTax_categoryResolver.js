"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTax_categoryArgs_1 = require("./args/FindFirstTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const helpers_1 = require("../../../helpers");
let FindFirstTax_categoryResolver = class FindFirstTax_categoryResolver {
    async findFirstTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tax_category_1.Tax_category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTax_categoryArgs_1.FindFirstTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTax_categoryResolver.prototype, "findFirstTax_category", null);
FindFirstTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], FindFirstTax_categoryResolver);
exports.FindFirstTax_categoryResolver = FindFirstTax_categoryResolver;
