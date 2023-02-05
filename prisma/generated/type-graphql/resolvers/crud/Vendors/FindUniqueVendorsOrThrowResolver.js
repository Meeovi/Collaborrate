"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVendorsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueVendorsOrThrowArgs_1 = require("./args/FindUniqueVendorsOrThrowArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let FindUniqueVendorsOrThrowResolver = class FindUniqueVendorsOrThrowResolver {
    async findUniqueVendorsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVendorsOrThrowArgs_1.FindUniqueVendorsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueVendorsOrThrowResolver.prototype, "findUniqueVendorsOrThrow", null);
FindUniqueVendorsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], FindUniqueVendorsOrThrowResolver);
exports.FindUniqueVendorsOrThrowResolver = FindUniqueVendorsOrThrowResolver;
