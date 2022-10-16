"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInvitationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByInvitationsArgs_1 = require("./args/GroupByInvitationsArgs");
const Invitations_1 = require("../../../models/Invitations");
const InvitationsGroupBy_1 = require("../../outputs/InvitationsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInvitationsResolver = class GroupByInvitationsResolver {
    async groupByInvitations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InvitationsGroupBy_1.InvitationsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInvitationsArgs_1.GroupByInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByInvitationsResolver.prototype, "groupByInvitations", null);
GroupByInvitationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], GroupByInvitationsResolver);
exports.GroupByInvitationsResolver = GroupByInvitationsResolver;
