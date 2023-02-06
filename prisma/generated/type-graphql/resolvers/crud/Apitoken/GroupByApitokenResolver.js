"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByApitokenArgs_1 = require("./args/GroupByApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const ApitokenGroupBy_1 = require("../../outputs/ApitokenGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByApitokenResolver = class GroupByApitokenResolver {
    async groupByApitoken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ApitokenGroupBy_1.ApitokenGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByApitokenArgs_1.GroupByApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByApitokenResolver.prototype, "groupByApitoken", null);
GroupByApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], GroupByApitokenResolver);
exports.GroupByApitokenResolver = GroupByApitokenResolver;
