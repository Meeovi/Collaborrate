"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyProduct_attributeArgs_1 = require("./args/UpdateManyProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyProduct_attributeResolver = class UpdateManyProduct_attributeResolver {
    async updateManyProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProduct_attributeArgs_1.UpdateManyProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyProduct_attributeResolver.prototype, "updateManyProduct_attribute", null);
UpdateManyProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], UpdateManyProduct_attributeResolver);
exports.UpdateManyProduct_attributeResolver = UpdateManyProduct_attributeResolver;
