"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueManufacturerOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueManufacturerOrThrowArgs_1 = require("./args/FindUniqueManufacturerOrThrowArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const helpers_1 = require("../../../helpers");
let FindUniqueManufacturerOrThrowResolver = class FindUniqueManufacturerOrThrowResolver {
    async getManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueManufacturerOrThrowArgs_1.FindUniqueManufacturerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueManufacturerOrThrowResolver.prototype, "getManufacturer", null);
FindUniqueManufacturerOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], FindUniqueManufacturerOrThrowResolver);
exports.FindUniqueManufacturerOrThrowResolver = FindUniqueManufacturerOrThrowResolver;
