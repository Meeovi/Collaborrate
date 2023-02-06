"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVendorsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueVendorsArgs_1 = require("./args/FindUniqueVendorsArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let FindUniqueVendorsResolver = class FindUniqueVendorsResolver {
    async findUniqueVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVendorsArgs_1.FindUniqueVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueVendorsResolver.prototype, "findUniqueVendors", null);
FindUniqueVendorsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], FindUniqueVendorsResolver);
exports.FindUniqueVendorsResolver = FindUniqueVendorsResolver;
