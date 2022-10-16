"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMessagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMessagesArgs_1 = require("./args/GroupByMessagesArgs");
const Messages_1 = require("../../../models/Messages");
const MessagesGroupBy_1 = require("../../outputs/MessagesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMessagesResolver = class GroupByMessagesResolver {
    async groupByMessages(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MessagesGroupBy_1.MessagesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMessagesArgs_1.GroupByMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMessagesResolver.prototype, "groupByMessages", null);
GroupByMessagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Messages_1.Messages)
], GroupByMessagesResolver);
exports.GroupByMessagesResolver = GroupByMessagesResolver;
