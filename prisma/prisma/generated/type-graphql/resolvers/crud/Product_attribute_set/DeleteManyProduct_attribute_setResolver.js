"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_attribute_setResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyProduct_attribute_setArgs_1 = require("./args/DeleteManyProduct_attribute_setArgs");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProduct_attribute_setResolver = class DeleteManyProduct_attribute_setResolver {
    async deleteManyProduct_attribute_set(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProduct_attribute_setArgs_1.DeleteManyProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProduct_attribute_setResolver.prototype, "deleteManyProduct_attribute_set", null);
DeleteManyProduct_attribute_setResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], DeleteManyProduct_attribute_setResolver);
exports.DeleteManyProduct_attribute_setResolver = DeleteManyProduct_attribute_setResolver;
