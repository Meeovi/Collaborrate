"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateManufacturerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateManufacturerArgs_1 = require("./args/AggregateManufacturerArgs");
const Manufacturer_1 = require("../../../models/Manufacturer");
const AggregateManufacturer_1 = require("../../outputs/AggregateManufacturer");
const helpers_1 = require("../../../helpers");
let AggregateManufacturerResolver = class AggregateManufacturerResolver {
    async aggregateManufacturer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateManufacturer_1.AggregateManufacturer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateManufacturerArgs_1.AggregateManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateManufacturerResolver.prototype, "aggregateManufacturer", null);
AggregateManufacturerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], AggregateManufacturerResolver);
exports.AggregateManufacturerResolver = AggregateManufacturerResolver;
