"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyProduct_attributeArgs_1 = require("./args/DeleteManyProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProduct_attributeResolver = class DeleteManyProduct_attributeResolver {
    async deleteManyProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProduct_attributeArgs_1.DeleteManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProduct_attributeResolver.prototype, "deleteManyProduct_attribute", null);
DeleteManyProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], DeleteManyProduct_attributeResolver);
exports.DeleteManyProduct_attributeResolver = DeleteManyProduct_attributeResolver;
