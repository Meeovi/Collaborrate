"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAttributesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAttributesArgs_1 = require("./args/GroupByAttributesArgs");
const Attributes_1 = require("../../../models/Attributes");
const AttributesGroupBy_1 = require("../../outputs/AttributesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAttributesResolver = class GroupByAttributesResolver {
    async groupByAttributes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AttributesGroupBy_1.AttributesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAttributesArgs_1.GroupByAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAttributesResolver.prototype, "groupByAttributes", null);
GroupByAttributesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], GroupByAttributesResolver);
exports.GroupByAttributesResolver = GroupByAttributesResolver;
