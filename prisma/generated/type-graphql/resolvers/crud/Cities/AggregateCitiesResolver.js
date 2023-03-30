"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCitiesArgs_1 = require("./args/AggregateCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const AggregateCities_1 = require("../../outputs/AggregateCities");
const helpers_1 = require("../../../helpers");
let AggregateCitiesResolver = class AggregateCitiesResolver {
    async aggregateCities(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCities_1.AggregateCities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCitiesArgs_1.AggregateCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCitiesResolver.prototype, "aggregateCities", null);
AggregateCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], AggregateCitiesResolver);
exports.AggregateCitiesResolver = AggregateCitiesResolver;
