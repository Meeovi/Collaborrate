"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTax_categoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneTax_categoryArgs_1 = require("./args/UpdateOneTax_categoryArgs");
const Tax_category_1 = require("../../../models/Tax_category");
const helpers_1 = require("../../../helpers");
let UpdateOneTax_categoryResolver = class UpdateOneTax_categoryResolver {
    async updateOneTax_category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tax_category.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tax_category_1.Tax_category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTax_categoryArgs_1.UpdateOneTax_categoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTax_categoryResolver.prototype, "updateOneTax_category", null);
UpdateOneTax_categoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tax_category_1.Tax_category)
], UpdateOneTax_categoryResolver);
exports.UpdateOneTax_categoryResolver = UpdateOneTax_categoryResolver;
