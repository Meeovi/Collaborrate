"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomizationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCustomizationsArgs_1 = require("./args/GroupByCustomizationsArgs");
const Customizations_1 = require("../../../models/Customizations");
const CustomizationsGroupBy_1 = require("../../outputs/CustomizationsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCustomizationsResolver = class GroupByCustomizationsResolver {
    async groupByCustomizations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CustomizationsGroupBy_1.CustomizationsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomizationsArgs_1.GroupByCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCustomizationsResolver.prototype, "groupByCustomizations", null);
GroupByCustomizationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customizations_1.Customizations)
], GroupByCustomizationsResolver);
exports.GroupByCustomizationsResolver = GroupByCustomizationsResolver;
