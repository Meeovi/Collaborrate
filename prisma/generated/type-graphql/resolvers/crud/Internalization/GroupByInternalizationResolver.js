"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByInternalizationArgs_1 = require("./args/GroupByInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const InternalizationGroupBy_1 = require("../../outputs/InternalizationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInternalizationResolver = class GroupByInternalizationResolver {
    async groupByInternalization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InternalizationGroupBy_1.InternalizationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInternalizationArgs_1.GroupByInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByInternalizationResolver.prototype, "groupByInternalization", null);
GroupByInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], GroupByInternalizationResolver);
exports.GroupByInternalizationResolver = GroupByInternalizationResolver;
