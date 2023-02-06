"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardjsonArgs_1 = require("./args/AggregateDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const AggregateDashboardjson_1 = require("../../outputs/AggregateDashboardjson");
const helpers_1 = require("../../../helpers");
let AggregateDashboardjsonResolver = class AggregateDashboardjsonResolver {
    async aggregateDashboardjson(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardjson_1.AggregateDashboardjson, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardjsonArgs_1.AggregateDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDashboardjsonResolver.prototype, "aggregateDashboardjson", null);
AggregateDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], AggregateDashboardjsonResolver);
exports.AggregateDashboardjsonResolver = AggregateDashboardjsonResolver;
