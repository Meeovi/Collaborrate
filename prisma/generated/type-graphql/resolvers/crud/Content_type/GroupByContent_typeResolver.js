"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByContent_typeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByContent_typeArgs_1 = require("./args/GroupByContent_typeArgs");
const Content_type_1 = require("../../../models/Content_type");
const Content_typeGroupBy_1 = require("../../outputs/Content_typeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByContent_typeResolver = class GroupByContent_typeResolver {
    async groupByContent_type(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Content_typeGroupBy_1.Content_typeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByContent_typeArgs_1.GroupByContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByContent_typeResolver.prototype, "groupByContent_type", null);
GroupByContent_typeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], GroupByContent_typeResolver);
exports.GroupByContent_typeResolver = GroupByContent_typeResolver;
