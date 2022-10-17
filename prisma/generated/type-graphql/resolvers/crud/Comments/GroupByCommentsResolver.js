"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCommentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCommentsArgs_1 = require("./args/GroupByCommentsArgs");
const Comments_1 = require("../../../models/Comments");
const CommentsGroupBy_1 = require("../../outputs/CommentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCommentsResolver = class GroupByCommentsResolver {
    async groupByComments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentsGroupBy_1.CommentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCommentsArgs_1.GroupByCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCommentsResolver.prototype, "groupByComments", null);
GroupByCommentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], GroupByCommentsResolver);
exports.GroupByCommentsResolver = GroupByCommentsResolver;
