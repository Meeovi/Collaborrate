"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyZonesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyZonesArgs_1 = require("./args/CreateManyZonesArgs");
const Zones_1 = require("../../../models/Zones");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyZonesResolver = class CreateManyZonesResolver {
    async createManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyZonesArgs_1.CreateManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyZonesResolver.prototype, "createManyZones", null);
CreateManyZonesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], CreateManyZonesResolver);
exports.CreateManyZonesResolver = CreateManyZonesResolver;
