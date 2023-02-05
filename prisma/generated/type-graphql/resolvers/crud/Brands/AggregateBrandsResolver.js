"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBrandsArgs_1 = require("./args/AggregateBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const AggregateBrands_1 = require("../../outputs/AggregateBrands");
const helpers_1 = require("../../../helpers");
let AggregateBrandsResolver = class AggregateBrandsResolver {
    async aggregateBrands(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBrands_1.AggregateBrands, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBrandsArgs_1.AggregateBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBrandsResolver.prototype, "aggregateBrands", null);
AggregateBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], AggregateBrandsResolver);
exports.AggregateBrandsResolver = AggregateBrandsResolver;
