"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVendorsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstVendorsOrThrowArgs_1 = require("./args/FindFirstVendorsOrThrowArgs");
const Vendors_1 = require("../../../models/Vendors");
const helpers_1 = require("../../../helpers");
let FindFirstVendorsOrThrowResolver = class FindFirstVendorsOrThrowResolver {
    async findFirstVendorsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVendorsOrThrowArgs_1.FindFirstVendorsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstVendorsOrThrowResolver.prototype, "findFirstVendorsOrThrow", null);
FindFirstVendorsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], FindFirstVendorsOrThrowResolver);
exports.FindFirstVendorsOrThrowResolver = FindFirstVendorsOrThrowResolver;
