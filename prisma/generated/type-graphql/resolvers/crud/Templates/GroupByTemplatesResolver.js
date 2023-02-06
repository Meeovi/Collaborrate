"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTemplatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTemplatesArgs_1 = require("./args/GroupByTemplatesArgs");
const Templates_1 = require("../../../models/Templates");
const TemplatesGroupBy_1 = require("../../outputs/TemplatesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTemplatesResolver = class GroupByTemplatesResolver {
    async groupByTemplates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TemplatesGroupBy_1.TemplatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTemplatesArgs_1.GroupByTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTemplatesResolver.prototype, "groupByTemplates", null);
GroupByTemplatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], GroupByTemplatesResolver);
exports.GroupByTemplatesResolver = GroupByTemplatesResolver;
