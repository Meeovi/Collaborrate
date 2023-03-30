"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProductsArgs_1 = require("./args/AggregateProductsArgs");
const Products_1 = require("../../../models/Products");
const AggregateProducts_1 = require("../../outputs/AggregateProducts");
const helpers_1 = require("../../../helpers");
let AggregateProductsResolver = class AggregateProductsResolver {
    async aggregateProducts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProducts_1.AggregateProducts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProductsArgs_1.AggregateProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProductsResolver.prototype, "aggregateProducts", null);
AggregateProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], AggregateProductsResolver);
exports.AggregateProductsResolver = AggregateProductsResolver;
