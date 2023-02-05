"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAgreementsArgs_1 = require("./args/GroupByAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const AgreementsGroupBy_1 = require("../../outputs/AgreementsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAgreementsResolver = class GroupByAgreementsResolver {
    async groupByAgreements(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AgreementsGroupBy_1.AgreementsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAgreementsArgs_1.GroupByAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAgreementsResolver.prototype, "groupByAgreements", null);
GroupByAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], GroupByAgreementsResolver);
exports.GroupByAgreementsResolver = GroupByAgreementsResolver;
