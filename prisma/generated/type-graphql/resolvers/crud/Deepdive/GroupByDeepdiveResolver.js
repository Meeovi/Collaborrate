"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDeepdiveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByDeepdiveArgs_1 = require("./args/GroupByDeepdiveArgs");
const Deepdive_1 = require("../../../models/Deepdive");
const DeepdiveGroupBy_1 = require("../../outputs/DeepdiveGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDeepdiveResolver = class GroupByDeepdiveResolver {
    async groupByDeepdive(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DeepdiveGroupBy_1.DeepdiveGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDeepdiveArgs_1.GroupByDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByDeepdiveResolver.prototype, "groupByDeepdive", null);
GroupByDeepdiveResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], GroupByDeepdiveResolver);
exports.GroupByDeepdiveResolver = GroupByDeepdiveResolver;
