"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWebsitesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByWebsitesArgs_1 = require("./args/GroupByWebsitesArgs");
const Websites_1 = require("../../../models/Websites");
const WebsitesGroupBy_1 = require("../../outputs/WebsitesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWebsitesResolver = class GroupByWebsitesResolver {
    async groupByWebsites(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WebsitesGroupBy_1.WebsitesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWebsitesArgs_1.GroupByWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByWebsitesResolver.prototype, "groupByWebsites", null);
GroupByWebsitesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], GroupByWebsitesResolver);
exports.GroupByWebsitesResolver = GroupByWebsitesResolver;
