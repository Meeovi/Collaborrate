"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLogInResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByLogInArgs_1 = require("./args/GroupByLogInArgs");
const LogIn_1 = require("../../../models/LogIn");
const LogInGroupBy_1 = require("../../outputs/LogInGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLogInResolver = class GroupByLogInResolver {
    async groupByLogIn(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LogInGroupBy_1.LogInGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLogInArgs_1.GroupByLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLogInResolver.prototype, "groupByLogIn", null);
GroupByLogInResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], GroupByLogInResolver);
exports.GroupByLogInResolver = GroupByLogInResolver;
