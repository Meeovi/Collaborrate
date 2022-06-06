"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUrl_rewritesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByUrl_rewritesArgs_1 = require("./args/GroupByUrl_rewritesArgs");
const Url_rewrites_1 = require("../../../models/Url_rewrites");
const Url_rewritesGroupBy_1 = require("../../outputs/Url_rewritesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUrl_rewritesResolver = class GroupByUrl_rewritesResolver {
    async groupByUrl_rewrites(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).url_rewrites.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Url_rewritesGroupBy_1.Url_rewritesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUrl_rewritesArgs_1.GroupByUrl_rewritesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByUrl_rewritesResolver.prototype, "groupByUrl_rewrites", null);
GroupByUrl_rewritesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Url_rewrites_1.Url_rewrites)
], GroupByUrl_rewritesResolver);
exports.GroupByUrl_rewritesResolver = GroupByUrl_rewritesResolver;
