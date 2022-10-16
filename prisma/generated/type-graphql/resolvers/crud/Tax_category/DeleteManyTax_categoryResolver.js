"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyTax_categoryArgs_1 = require("./args/DeleteManyTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTax_categoryResolver = class DeleteManyTax_categoryResolver {
    async deleteManyTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTax_categoryArgs_1.DeleteManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTax_categoryResolver.prototype, "deleteManyTax_category", null);
DeleteManyTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], DeleteManyTax_categoryResolver);
exports.DeleteManyTax_categoryResolver = DeleteManyTax_categoryResolver;
