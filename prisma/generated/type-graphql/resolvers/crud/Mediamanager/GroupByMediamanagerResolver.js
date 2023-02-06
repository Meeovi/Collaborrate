"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByMediamanagerArgs_1 = require("./args/GroupByMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const MediamanagerGroupBy_1 = require("../../outputs/MediamanagerGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMediamanagerResolver = class GroupByMediamanagerResolver {
    async groupByMediamanager(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MediamanagerGroupBy_1.MediamanagerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMediamanagerArgs_1.GroupByMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMediamanagerResolver.prototype, "groupByMediamanager", null);
GroupByMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], GroupByMediamanagerResolver);
exports.GroupByMediamanagerResolver = GroupByMediamanagerResolver;
