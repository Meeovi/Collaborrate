"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyManufacturerArgs_1 = require("./args/FindManyManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const helpers_1 = require("../../../helpers");
let FindManyManufacturerResolver = class FindManyManufacturerResolver {
    async manufacturers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Manufacturer_1.Manufacturer], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyManufacturerArgs_1.FindManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyManufacturerResolver.prototype, "manufacturers", null);
FindManyManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], FindManyManufacturerResolver);
exports.FindManyManufacturerResolver = FindManyManufacturerResolver;
