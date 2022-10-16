"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneTax_categoryArgs_1 = require("./args/UpsertOneTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const helpers_1 = require("../../../helpers");
let UpsertOneTax_categoryResolver = class UpsertOneTax_categoryResolver {
    async upsertOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTax_categoryArgs_1.UpsertOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTax_categoryResolver.prototype, "upsertOneTax_category", null);
UpsertOneTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], UpsertOneTax_categoryResolver);
exports.UpsertOneTax_categoryResolver = UpsertOneTax_categoryResolver;
