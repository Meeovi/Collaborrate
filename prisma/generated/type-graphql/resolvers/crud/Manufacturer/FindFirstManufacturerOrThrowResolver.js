"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstManufacturerOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstManufacturerOrThrowArgs_1 = require("./args/FindFirstManufacturerOrThrowArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const helpers_1 = require("../../../helpers");
let FindFirstManufacturerOrThrowResolver = class FindFirstManufacturerOrThrowResolver {
    async findFirstManufacturerOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstManufacturerOrThrowArgs_1.FindFirstManufacturerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstManufacturerOrThrowResolver.prototype, "findFirstManufacturerOrThrow", null);
FindFirstManufacturerOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], FindFirstManufacturerOrThrowResolver);
exports.FindFirstManufacturerOrThrowResolver = FindFirstManufacturerOrThrowResolver;
