"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByManufacturerArgs_1 = require("./args/GroupByManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const ManufacturerGroupBy_1 = require("../../outputs/ManufacturerGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByManufacturerResolver = class GroupByManufacturerResolver {
    async groupByManufacturer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ManufacturerGroupBy_1.ManufacturerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByManufacturerArgs_1.GroupByManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByManufacturerResolver.prototype, "groupByManufacturer", null);
GroupByManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], GroupByManufacturerResolver);
exports.GroupByManufacturerResolver = GroupByManufacturerResolver;
