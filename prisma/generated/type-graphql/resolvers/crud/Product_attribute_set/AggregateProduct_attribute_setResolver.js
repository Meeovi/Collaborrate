"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_attribute_setResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProduct_attribute_setArgs_1 = require("./args/AggregateProduct_attribute_setArgs");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const AggregateProduct_attribute_set_1 = require("../../outputs/AggregateProduct_attribute_set");
const helpers_1 = require("../../../helpers");
let AggregateProduct_attribute_setResolver = class AggregateProduct_attribute_setResolver {
    async aggregateProduct_attribute_set(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_attribute_set_1.AggregateProduct_attribute_set, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProduct_attribute_setArgs_1.AggregateProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProduct_attribute_setResolver.prototype, "aggregateProduct_attribute_set", null);
AggregateProduct_attribute_setResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], AggregateProduct_attribute_setResolver);
exports.AggregateProduct_attribute_setResolver = AggregateProduct_attribute_setResolver;
