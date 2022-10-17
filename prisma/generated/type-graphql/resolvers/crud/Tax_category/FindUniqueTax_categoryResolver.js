"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTax_categoryArgs_1 = require("./args/FindUniqueTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const helpers_1 = require("../../../helpers");
let FindUniqueTax_categoryResolver = class FindUniqueTax_categoryResolver {
    async tax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTax_categoryArgs_1.FindUniqueTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTax_categoryResolver.prototype, "tax_category", null);
FindUniqueTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], FindUniqueTax_categoryResolver);
exports.FindUniqueTax_categoryResolver = FindUniqueTax_categoryResolver;
