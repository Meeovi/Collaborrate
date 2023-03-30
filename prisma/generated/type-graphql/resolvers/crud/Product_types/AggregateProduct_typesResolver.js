"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_typesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProduct_typesArgs_1 = require("./args/AggregateProduct_typesArgs");
const Product_types_1 = require("../../../models/Product_types");
const AggregateProduct_types_1 = require("../../outputs/AggregateProduct_types");
const helpers_1 = require("../../../helpers");
let AggregateProduct_typesResolver = class AggregateProduct_typesResolver {
    async aggregateProduct_types(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_types_1.AggregateProduct_types, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProduct_typesArgs_1.AggregateProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProduct_typesResolver.prototype, "aggregateProduct_types", null);
AggregateProduct_typesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], AggregateProduct_typesResolver);
exports.AggregateProduct_typesResolver = AggregateProduct_typesResolver;
