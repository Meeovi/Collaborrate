"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyTax_categoryArgs_1 = require("./args/UpdateManyTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTax_categoryResolver = class UpdateManyTax_categoryResolver {
    async updateManyTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTax_categoryArgs_1.UpdateManyTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTax_categoryResolver.prototype, "updateManyTax_category", null);
UpdateManyTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], UpdateManyTax_categoryResolver);
exports.UpdateManyTax_categoryResolver = UpdateManyTax_categoryResolver;
