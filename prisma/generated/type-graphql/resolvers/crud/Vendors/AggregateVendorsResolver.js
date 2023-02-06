"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateVendorsArgs_1 = require("./args/AggregateVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const AggregateVendors_1 = require("../../outputs/AggregateVendors");
const helpers_1 = require("../../../helpers");
let AggregateVendorsResolver = class AggregateVendorsResolver {
    async aggregateVendors(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVendors_1.AggregateVendors, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVendorsArgs_1.AggregateVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVendorsResolver.prototype, "aggregateVendors", null);
AggregateVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], AggregateVendorsResolver);
exports.AggregateVendorsResolver = AggregateVendorsResolver;
